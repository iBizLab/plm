/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineComponent, ref, computed, onMounted, Ref } from 'vue';
import { useNamespace } from '@ibiz-template/vue3-util';
import './audio.scss';
import { getCustomNodeProps } from '../../utils';

const calculateScaledValue = (
  numerator: number,
  denominator: number,
): number => {
  //  防止除以零的错误
  if (numerator === 0 || denominator === 0) {
    return 0; //  返回NaN，或者根据需求返回其他值
  }
  //  计算比例并转换为0-100范围内的数值
  let scaledValue = (numerator / denominator) * 100;
  //  确保结果在0到100之间
  if (scaledValue < 0) {
    scaledValue = 0;
  } else if (scaledValue > 100) {
    scaledValue = 100;
  }
  return scaledValue;
};

export const Audio = defineComponent({
  name: 'IBizAudio',
  props: getCustomNodeProps(),
  setup(props) {
    const ns = useNamespace('audio');
    // 文件名称
    const fileName = ref('');
    // 文件大小
    const fileSize = ref(0);
    // 地址
    const audioSrc = ref('');
    if (props.data) {
      const { name, size, url } = props.data;
      fileName.value = name;
      fileSize.value = size;
      audioSrc.value = url;
    }

    const isPlay: Ref<boolean> = ref(false);
    const realAudioTime: Ref<string> = ref('00:00');
    const totalAudioTime: Ref<string> = ref('00:00');
    const audioRef = ref();
    const bar = ref();
    const slid = ref();
    const allTime = ref(0);
    const currentT = ref(0);
    const percentage = ref(0);
    const fileSizeText = computed(() => {
      const size =
        fileSize.value <= 0
          ? 0
          : Math.round((fileSize.value / (1024 * 1024)) * 10) / 10;
      return `${size} MB`;
    });

    const calcTotalAudioTime = (): void => {
      if (audioRef.value) {
        allTime.value = audioRef.value.duration;
        if (Number.isNaN(allTime.value)) {
          allTime.value = 0;
        }

        // 分钟
        const minutes = parseInt((allTime.value / 60).toString(), 10);
        let minutesSr = minutes.toString();
        if (minutes < 10) {
          minutesSr = `0${minutes.toString()}`;
        }
        // 秒
        const seconds = Math.round(allTime.value % 60);
        let secondsStr = seconds.toString();
        if (seconds < 10) {
          secondsStr = `0${seconds.toString()}`;
        }
        totalAudioTime.value = `${minutesSr}:${secondsStr}`;
      }
    };

    //  处理时间
    const handleAudioTime = (): void => {
      // 用秒数来显示当前播放进度
      currentT.value = audioRef.value.currentTime;
      const timeDisplay = Math.floor(currentT.value); // 获取实时时间
      // 分钟
      const minute = parseInt((timeDisplay / 60).toString(), 10);
      let minutesSr = minute.toString();
      if (minute < 10) {
        minutesSr = `0${minute.toString()}`;
      }
      // 秒
      const second = Math.round(timeDisplay % 60);
      let secondStr = second.toString();
      if (second < 10) {
        secondStr = `0${second.toString()}`;
      }
      realAudioTime.value = `${minutesSr}:${secondStr}`;
      if (totalAudioTime.value === '00:00') {
        calcTotalAudioTime();
      }
    };

    const switchAudio = (): void => {
      isPlay.value = false;
      audioRef.value.load();
      realAudioTime.value = '00:00';
    };

    //  使用事件监听方式捕捉事件
    const watchAudioTime = (): void => {
      audioRef.value.addEventListener(
        'timeupdate',
        () => {
          handleAudioTime();
          if (audioRef.value) {
            percentage.value = calculateScaledValue(
              currentT.value,
              allTime.value,
            );
          }
        },
        false,
      );
      //  播放完毕
      audioRef.value.addEventListener('ended', () => {
        switchAudio(); //  自动播放
      });
      //  捕获音频文件已准备完毕
      //  当媒体文件可以播放的时候会触发oncanplay事件,也可以用oncanplay
      audioRef.value.oncanplaythrough = (): void => {
        calcTotalAudioTime();
      };
    };

    const play = (): void => {
      if (audioRef.value.paused) {
        audioRef.value.play();
        isPlay.value = true;
      } else {
        audioRef.value.pause();
        isPlay.value = false;
      }
    };

    const onSliderChange = (value: number): void => {
      // TODO 拖动改变播放时间
    };

    onMounted(() => {
      if (audioRef.value) {
        watchAudioTime();
      }
    });

    const renderArrowSvg = (): JSX.Element => {
      return (
        <svg
          class='icon'
          viewBox='0 0 1024 1024'
          version='1.1'
          xmlns='http:// www.w3.org/2000/svg'
          p-id='2304'
          width='1em'
          height='1em'
        >
          <path d='M768 512 256 0 256 1024Z' p-id='2305'></path>
        </svg>
      );
    };

    const renderStop = (): JSX.Element => {
      return (
        <svg
          class='icon'
          viewBox='0 0 1024 1024'
          version='1.1'
          xmlns='http:// www.w3.org/2000/svg'
          p-id='3144'
          width='1em'
          height='1em'
        >
          <path
            d='M209.645253 863.934444l201.049992 0 0-703.866842L209.645253 160.067602 209.645253 863.934444zM611.804588 863.934444l201.113437 0 0-703.866842L611.804588 160.067602 611.804588 863.934444z'
            p-id='3145'
          ></path>
        </svg>
      );
    };

    const renderAudioSvg = (): JSX.Element => {
      return (
        <svg
          class='icon audio-icon'
          viewBox='0 0 1092 1024'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          p-id='4287'
          width='1em'
          height='1em'
        >
          <path
            d='M394.24 429.056v378.368c0 83.456-67.584 150.528-150.528 150.528-83.456 0-150.528-67.584-150.528-150.528 0-83.456 67.584-150.528 150.528-150.528 25.6 0 49.152 6.144 70.144 17.408V395.776 194.048c0-19.456 13.824-36.352 33.28-39.424l550.4-95.232c24.576-4.096 47.104 14.848 47.104 39.424v611.84c0 83.456-67.584 150.528-150.528 150.528-83.456 0-150.528-67.584-150.528-150.528 0-83.456 67.584-150.528 150.528-150.528 25.6 0 49.152 6.144 70.144 17.408V347.648L394.24 429.056z m0-81.408L864.256 266.24V146.432L394.24 228.352v119.296zM243.2 877.568c38.912 0 70.144-31.744 70.144-70.144 0-38.912-31.744-70.144-70.144-70.144s-70.144 31.744-70.144 70.144c0 38.4 31.744 70.144 70.144 70.144z m550.912-96.256c38.912 0 70.144-31.744 70.144-70.144 0-38.912-31.744-70.144-70.144-70.144-38.912 0-70.144 31.744-70.144 70.144 0 38.4 31.232 70.144 70.144 70.144z'
            p-id='4288'
          ></path>
        </svg>
      );
    };

    return {
      ns,
      realAudioTime,
      totalAudioTime,
      isPlay,
      audioRef,
      bar,
      slid,
      percentage,
      fileName,
      fileSizeText,
      audioSrc,
      play,
      renderStop,
      renderArrowSvg,
      renderAudioSvg,
      onSliderChange,
    };
  },
  render() {
    const content = (
      <div class={[this.ns.e('content')]} ref='componentRef'>
        <div class={this.ns.e('left')}>
          <div
            class={[this.ns.e('play'), this.ns.is('active', this.isPlay)]}
            onClick={() => this.play()}
          >
            {!this.isPlay ? this.renderArrowSvg() : this.renderStop()}
          </div>
        </div>
        <div class={this.ns.e('wrapper')}>
          <div class={this.ns.em('wrapper', 'top')}>
            <span>{this.fileName}</span>
            <span class={this.ns.em('wrapper', 'file-size')}>
              {this.fileSizeText}
            </span>
          </div>
          <div class={this.ns.em('wrapper', 'time-bar')}>
            <div class={this.ns.em('wrapper', 'time')}>
              {this.realAudioTime}
            </div>
            <div class={this.ns.em('wrapper', 'slider')}>
              <el-slider
                v-model={this.percentage}
                max={100}
                min={0}
                disabled={true}
                onChange={this.onSliderChange}
              />
            </div>
            <div class={this.ns.em('wrapper', 'time')}>
              {this.totalAudioTime}
            </div>
          </div>
        </div>
        <audio ref='audioRef' src={this.audioSrc}></audio>
      </div>
    );
    return (
      <div
        ref='audio'
        class={[
          this.ns.b(),
          this.disabled ? this.ns.m('disabled') : '',
          this.readonly ? this.ns.m('readonly') : '',
        ]}
      >
        {content}
      </div>
    );
  },
});
