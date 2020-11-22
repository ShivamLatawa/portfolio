# Portfolio

## Building and running on localhost

First install dependencies:

```
yarn install
```

To run app locally:

```
yarn start
```

To create a production build:

```
yarn build
```

## Running emulator

1. Install android studio
2. Run an emulator: AVD Manager -> Start [It should show an android phone on your device]
3. Set adb in path by
    - export PATH=~/Library/Android/sdk/tools:\$PATH
    - export PATH=~/Library/Android/sdk/platform-tools:\$PATH
4. Verify adb by command - adb devices [It should show the list of devices attached]
5. Run command `yarn run android`
