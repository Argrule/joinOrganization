    const sendData={
        stdId: '',
        stdName:'',
        major:'', 
        classNum: '',
        stdQQ: '',
        stdPhone:'' , 
        firstWill: {    
        organization: '',
        branch: '',
        reason: '', 
        },   
        secondWill: { 
        organization: '',   
        branch: '',  
        reason: '',
        },   
        isDispensing: true ,//Boolean
    }
    const majorData= [{
    "value": "计算机科学与技术",
    "label": "计算机科学与技术",
    "children": [{
        "value": "一班",
        "label": "一班"
        },
        {
        "value": "二班",
        "label": "二班"
        },
        {
        "value": "三班",
        "label": "三班"
        },
        {
        "value": "四班",
        "label": "四班"
        }
    ]
    },
    {
    "value": "信息安全",
    "label": "信息安全",
    "children": [{
        "value": "一班",
        "label": "一班"
        },
        {
        "value": "二班",
        "label": "二班"
        },
        {
        "value": "三班",
        "label": "三班"
        },
        {
        "value": "四班",
        "label": "四班"
        }
    ]
    },
    {
    "value": "物联网",
    "label": "物联网",
    "children": [{
        "value": "一班",
        "label": "一班"
        },
        {
        "value": "二班",
        "label": "二班"
        }
    ]
    },
    {
    "value": "数据科学与大数据技术",
    "label": "数据科学与大数据技术",
    "children": [{
        "value": "一班",
        "label": "一班"
        },
        {
        "value": "二班",
        "label": "二班"
        }
    ]
    },
    {
    "value": "计算机科学与技术(中外合作)",
    "label": "计算机科学与技术(中外合作)",
    "children": [{
        "value": "一班",
        "label": "一班"
        },
        {
        "value": "二班",
        "label": "二班"
        },
        {
        "value": "三班",
        "label": "三班"
        },
        {
        "value": "四班",
        "label": "四班"
        },
        {
        "value": "五班",
        "label": "五班"
        },
        {
        "value": "六班",
        "label": "六班"
        }
    ]
    }
    ]
    const orginazationData= [{
    "value": "科技协会",
    "label": "科技协会",
    "children": [{
        "value": "科技协会",
        "label": "科技协会"
    }]
    },
    {
    "value": "团委",
    "label": "团委",
    "children": [{
        "value": "组织部",
        "label": "组织部"
        },
        {
        "value": "宣传部",
        "label": "宣传部"
        },
        {
        "value": "心协",
        "label": "心协"
        },
        {
        "value": "青协",
        "label": "青协"
        }
    ]
    },
    {
    "value": "学生会",
    "label": "学生会",
    "children": [{
        "value": "办公室",
        "label": "办公室"
        },
        {
        "value": "学习部",
        "label": "学习部"
        },
        {
        "value": "宣传部",
        "label": "宣传部"
        },
        {
        "value": "文艺部",
        "label": "文艺部"
        },
        {
        "value": "体育部",
        "label": "体育部"
        },
        {
        "value": "外联部",
        "label": "外联部"
        },
        {
        "value": "自管会",
        "label": "自管会"
        }
    ]
    },
    {
    "value": "勤工助学中心",
    "label": "勤工助学中心",
    "children": [{
        "value": "管理部",
        "label": "管理部"
        },
        {
        "value": "活动部",
        "label": "活动部"
        },
        {
        "value": "助贷部",
        "label": "助贷部"
        },
        {
        "value": "外联部",
        "label": "外联部"
        }
    ]
    },
    {
    "value": "新闻中心",
    "label": "新闻中心",
    "children": [{
        "value": "摄影协会",
        "label": "摄影协会"
        },
        {
        "value": "新媒体部",
        "label": "新媒体部"
        },
        {
        "value": "记者团",
        "label": "记者团"
        }
    ]
    }
    ]
    export{
        sendData,
        majorData,
        orginazationData
    }