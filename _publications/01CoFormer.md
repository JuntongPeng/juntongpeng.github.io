---
title: "Compatible Transformer for Irregularly Sampled Multivariate Time Series"
collection: publications
accepted: True
permalink: /publication/CoFormer
date: 2023-09-15
authors: Yuxi Wei, <b>Juntong Peng</b>, Tong He, Chenxin Xu, Jian Zhang, Shirui Pan, and Siheng Chen
venue: 'IEEE International Conference on Data Mining (ICDM)'
# header:
#     teaser: "coformer.png"
---
**Abstract:**
To analyze multivariate time series, most previous methods assume regular subsampling of time series, where the interval between adjacent measurements and the number of samples remain unchanged. Practically, data collection systems could produce **irregularly sampled time series** due to sensor failures and interventions. However, existing methods designed for regularly sampled multivariate time series cannot directly handle irregularity owing to misalignment along both temporal and variate dimensions. To fill this gap, we propose Compatible Transformer (CoFormer), a transformer-based encoder to achieve comprehensive temporal-interaction feature learning for each individual sample in irregular multivariate time series. In CoFormer, we view each sample as a unique variatetime point and leverage intra-variate/inter-variate attentions to learn sample-wise temporal/interaction features based on intra-variate/inter-variate neighbors. With CoFormer as the core, we can analyze irregularly sampled multivariate time series for many downstream tasks, including classification and prediction. Furthermore, we propose an irregularity-compatible decoder to achieve precise prediction at any continuous timestamp. We conduct extensive experiments on 5 real-world datasets for both **classification** and **prediction** tasks and validate that the proposed CoFormer significantly and consistently outperforms existing methods on both tasks.

