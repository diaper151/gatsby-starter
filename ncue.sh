#!/bin/bash
yes Y | conda create --name ncue python=3.6 
source activate ncue 
yes Y | conda install -c nvidia -c rapidsai -c conda-forge -c defaults cuml cudatoolkit=10.0 
yes Y | conda install -c nvidia -c rapidsai -c numba -c conda-forge -c defaults cudf=0.7 python=3.6 cudatoolkit=10.0
yes Y | pip install watermark 
yes Y | conda install -c conda-forge jupyterlab 
yes Y | conda install scikit-learn 
yes Y | conda install ipykernel 
cp -R $CONDA_PREFIX/lib/python3.6/site-packages/cuml $CONDA_PREFIX/lib/python3.6/site-packages/ncue 
python -m ipykernel install --user --name ncue --display-name "Python (ncue)"