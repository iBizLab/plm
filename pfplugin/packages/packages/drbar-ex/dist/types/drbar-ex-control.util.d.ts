import { Ref } from 'vue';
import { DRBarExController } from './drbar-ex.controller';
export declare function useAppDrBar(c: DRBarExController, controlRef: Ref<IData | undefined>, counterData: IData): {
    visibleItems: Ref<IData>;
    moreItems: Ref<IData>;
};
