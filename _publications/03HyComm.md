---
title: "Communication-Efficient Multi-Agent 3D Detection via Hybrid Collaboration"
collection: publications
permalink: /publication/HyComm
date: 2024-01-01
authors: Yue Hu, <b>Juntong Peng</b>, Yunqiao Yang, Xiaoqi Qin, Zhiyong Feng, Wenjun Zhang, Siheng Chen
venue: 'IEEE International Conference on Robotics and Automation(ICRA)'
# header:
#     teaser: "hycomm.png"
---

**Abstract:**
Collaborative **3D detection** can substantially boost detection performance by allowing agents to exchange complementary information. It inherently results in a fundamental trade-off between detection performance and communication bandwidth.
To tackle this bottleneck issue, previous works have explored three collaboration strategies, each using a unique type of communication message tailored to a narrow range of communication budgets. To enhance adaptability, we propose a novel hybrid collaboration. It integrates two types of communication message: perceptual outputs, which are compact, and raw observations, which offer richer information. Together, they cater to a wide range of communication demands. Each message type is also ranked by significance, ensuring the most crucial perceptual information is prioritized in bandwidth allocation.
Building on this hybrid collaboration, we present HyComm, a communication-efficient LiDAR-based collaborative 3D detection system. HyComm boasts two main benefits: i) it facilitates **adaptable compression rates** for messages, addressing various communication requirements, and ii) it uses **standardized data formats** for messages, representing detection output with boxes and observations with point clouds. This ensures they are independent of specific detection models, fostering adaptability across different agent configurations. 
To evaluate HyComm, we conduct experiments on both real-world and simulation datasets: DAIR-V2X and OPV2V. HyComm consistently outperforms previous methods and achieves superior performance-bandwidth trade-off regardless of whether agents use the same or varied detection models. It achieves **more than 2,006$\times$ lower communication volume** and still outperforms Where2comm on DAIR-V2X in terms of AP50. 