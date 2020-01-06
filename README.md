# 彰師資管109專題報告

專題網址 <https://ncue.xyz/>

## 安裝

### Installing from Conda env:

1. 請先確認Nvidia-cuda-toolkit已經安裝

> https://developer.nvidia.com/cuda-downloads
```shell
# disable the graphical target
systemctl isolate multi-user.target
modprobe -r nvidia-drm
sudo sh cuda_10.1.168_418.67_linux.run
# 驗證安裝是否成功
nvcc --version
```

2. 下載build.sh
```shell
wget https://raw.githubusercontent.com/diaper151/gatsby-starter/master/ncue.sh
bash ncue.sh
```

3. 執行Jupyter Lab

```shell
source activate ncue
jupyter lab
```
