pages:
  stage: deploy
  tags:
    - docker  
  script:
    - mkdir .public
    - cp -r * .public
    - rm -rf public
    - mv .public public
  artifacts:
    paths:
      - public
  only:
    - master