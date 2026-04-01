// =====================================================
// data.js — Real account & transaction data
// Generated from: transactions.csv + customer_profiles.csv + account_status.csv
// 200 accounts · 1930 transactions
// =====================================================

const realAccounts = [
  {
    "id": "A1000",
    "name": "A1000",
    "type": "Student",
    "age": 25,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9598,137",
    "outflow": "\u20b9534,625",
    "connections": 18,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1000",
        "A1088",
        "A1125",
        "A1000"
      ],
      [
        "A1000",
        "A1154",
        "A1097",
        "A1000"
      ],
      [
        "A1000",
        "A1050",
        "A1000"
      ]
    ],
    "openDate": "2022-06-23",
    "lastTxn": "2022-10-13",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1125",
        "amt": 125149,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1960"
      },
      {
        "dir": "out",
        "other": "A1088",
        "amt": 125149,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1961"
      },
      {
        "dir": "in",
        "other": "A1053",
        "amt": 96344,
        "ch": "UPI",
        "time": "10:36",
        "branch": "Delhi",
        "txn_id": "T419"
      },
      {
        "dir": "in",
        "other": "A1097",
        "amt": 90490,
        "ch": "UPI",
        "time": "03:39",
        "branch": "Bangalore",
        "txn_id": "T752"
      },
      {
        "dir": "in",
        "other": "A1024",
        "amt": 90431,
        "ch": "ATM",
        "time": "18:30",
        "branch": "Delhi",
        "txn_id": "T638"
      },
      {
        "dir": "out",
        "other": "A1046",
        "amt": 83203,
        "ch": "NEFT",
        "time": "02:51",
        "branch": "Mumbai",
        "txn_id": "T1303"
      },
      {
        "dir": "in",
        "other": "A1050",
        "amt": 81975,
        "ch": "IMPS",
        "time": "02:41",
        "branch": "Mumbai",
        "txn_id": "T675"
      },
      {
        "dir": "in",
        "other": "A1035",
        "amt": 79255,
        "ch": "UPI",
        "time": "18:50",
        "branch": "Kolkata",
        "txn_id": "T1796"
      }
    ]
  },
  {
    "id": "A1001",
    "name": "A1001",
    "type": "Engineer",
    "age": 58,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9892,481",
    "outflow": "\u20b9649,665",
    "connections": 21,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1001",
        "A1148",
        "A1072",
        "A1001"
      ],
      [
        "A1001",
        "A1148",
        "A1161",
        "A1001"
      ],
      [
        "A1001",
        "A1028",
        "A1054",
        "A1001"
      ]
    ],
    "openDate": "2015-10-30",
    "lastTxn": "2016-02-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1143",
        "amt": 348605,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1911"
      },
      {
        "dir": "out",
        "other": "A1107",
        "amt": 348331,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1912"
      },
      {
        "dir": "in",
        "other": "A1054",
        "amt": 90248,
        "ch": "IMPS",
        "time": "09:33",
        "branch": "Bangalore",
        "txn_id": "T1561"
      },
      {
        "dir": "out",
        "other": "A1173",
        "amt": 86919,
        "ch": "UPI",
        "time": "04:56",
        "branch": "Delhi",
        "txn_id": "T104"
      },
      {
        "dir": "in",
        "other": "A1161",
        "amt": 74462,
        "ch": "UPI",
        "time": "23:45",
        "branch": "Kolkata",
        "txn_id": "T1469"
      },
      {
        "dir": "out",
        "other": "A1020",
        "amt": 70597,
        "ch": "ATM",
        "time": "13:27",
        "branch": "Bangalore",
        "txn_id": "T1693"
      },
      {
        "dir": "in",
        "other": "A1065",
        "amt": 57493,
        "ch": "NEFT",
        "time": "05:42",
        "branch": "Chennai",
        "txn_id": "T751"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 52769,
        "ch": "UPI",
        "time": "08:27",
        "branch": "Delhi",
        "txn_id": "T1060"
      }
    ]
  },
  {
    "id": "A1002",
    "name": "A1002",
    "type": "Business",
    "age": 29,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9629,987",
    "outflow": "\u20b9840,825",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1002",
        "A1130",
        "A1071",
        "A1002"
      ],
      [
        "A1002",
        "A1088",
        "A1002"
      ]
    ],
    "openDate": "2020-11-15",
    "lastTxn": "2023-02-02",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1159",
        "amt": 320461,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1901"
      },
      {
        "dir": "in",
        "other": "A1083",
        "amt": 250276,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1906"
      },
      {
        "dir": "out",
        "other": "A1144",
        "amt": 249736,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1907"
      },
      {
        "dir": "in",
        "other": "A1088",
        "amt": 84868,
        "ch": "UPI",
        "time": "04:36",
        "branch": "Mumbai",
        "txn_id": "T409"
      },
      {
        "dir": "in",
        "other": "A1104",
        "amt": 81192,
        "ch": "RTGS",
        "time": "04:02",
        "branch": "Mumbai",
        "txn_id": "T1793"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 66990,
        "ch": "ATM",
        "time": "20:27",
        "branch": "Bangalore",
        "txn_id": "T155"
      },
      {
        "dir": "in",
        "other": "A1071",
        "amt": 58251,
        "ch": "RTGS",
        "time": "20:57",
        "branch": "Delhi",
        "txn_id": "T707"
      },
      {
        "dir": "out",
        "other": "A1153",
        "amt": 51614,
        "ch": "IMPS",
        "time": "23:08",
        "branch": "Kolkata",
        "txn_id": "T398"
      }
    ]
  },
  {
    "id": "A1003",
    "name": "A1003",
    "type": "Freelancer",
    "age": 24,
    "risk": "fraud",
    "riskScore": 88,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9466,082",
    "outflow": "\u20b9714,351",
    "connections": 21,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1003",
        "A1173",
        "A1048",
        "A1003"
      ],
      [
        "A1003",
        "A1173",
        "A1033",
        "A1003"
      ],
      [
        "A1003",
        "A1048",
        "A1003"
      ]
    ],
    "openDate": "2023-11-03",
    "lastTxn": "2026-05-18",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1114",
        "amt": 95442,
        "ch": "RTGS",
        "time": "15:07",
        "branch": "Mumbai",
        "txn_id": "T900"
      },
      {
        "dir": "out",
        "other": "A1091",
        "amt": 89765,
        "ch": "UPI",
        "time": "07:34",
        "branch": "Mumbai",
        "txn_id": "T184"
      },
      {
        "dir": "out",
        "other": "A1025",
        "amt": 79204,
        "ch": "NEFT",
        "time": "14:16",
        "branch": "Kolkata",
        "txn_id": "T1161"
      },
      {
        "dir": "out",
        "other": "A1188",
        "amt": 78055,
        "ch": "RTGS",
        "time": "10:45",
        "branch": "Delhi",
        "txn_id": "T147"
      },
      {
        "dir": "in",
        "other": "A1033",
        "amt": 77843,
        "ch": "NEFT",
        "time": "21:36",
        "branch": "Chennai",
        "txn_id": "T1501"
      },
      {
        "dir": "out",
        "other": "A1143",
        "amt": 75978,
        "ch": "RTGS",
        "time": "21:24",
        "branch": "Chennai",
        "txn_id": "T969"
      },
      {
        "dir": "in",
        "other": "A1155",
        "amt": 74915,
        "ch": "RTGS",
        "time": "15:55",
        "branch": "Chennai",
        "txn_id": "T1524"
      },
      {
        "dir": "out",
        "other": "A1180",
        "amt": 67237,
        "ch": "UPI",
        "time": "19:35",
        "branch": "Delhi",
        "txn_id": "T1454"
      }
    ]
  },
  {
    "id": "A1004",
    "name": "A1004",
    "type": "Teacher",
    "age": 62,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9631,938",
    "outflow": "\u20b9338,277",
    "connections": 19,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1004",
        "A1113",
        "A1013",
        "A1004"
      ],
      [
        "A1004",
        "A1178",
        "A1187",
        "A1004"
      ],
      [
        "A1004",
        "A1178",
        "A1016",
        "A1004"
      ]
    ],
    "openDate": "2015-08-13",
    "lastTxn": "2016-06-25",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1179",
        "amt": 90724,
        "ch": "ATM",
        "time": "11:57",
        "branch": "Chennai",
        "txn_id": "T146"
      },
      {
        "dir": "in",
        "other": "A1091",
        "amt": 89992,
        "ch": "ATM",
        "time": "14:21",
        "branch": "Bangalore",
        "txn_id": "T1111"
      },
      {
        "dir": "out",
        "other": "A1178",
        "amt": 89313,
        "ch": "ATM",
        "time": "10:05",
        "branch": "Kolkata",
        "txn_id": "T362"
      },
      {
        "dir": "out",
        "other": "A1031",
        "amt": 88689,
        "ch": "RTGS",
        "time": "00:13",
        "branch": "Mumbai",
        "txn_id": "T549"
      },
      {
        "dir": "in",
        "other": "A1009",
        "amt": 81734,
        "ch": "RTGS",
        "time": "23:47",
        "branch": "Bangalore",
        "txn_id": "T1169"
      },
      {
        "dir": "in",
        "other": "A1103",
        "amt": 77300,
        "ch": "ATM",
        "time": "08:09",
        "branch": "Chennai",
        "txn_id": "T646"
      },
      {
        "dir": "in",
        "other": "A1016",
        "amt": 72993,
        "ch": "IMPS",
        "time": "09:57",
        "branch": "Mumbai",
        "txn_id": "T1407"
      },
      {
        "dir": "in",
        "other": "A1107",
        "amt": 66451,
        "ch": "ATM",
        "time": "22:03",
        "branch": "Delhi",
        "txn_id": "T602"
      }
    ]
  },
  {
    "id": "A1005",
    "name": "A1005",
    "type": "Business",
    "age": 19,
    "risk": "fraud",
    "riskScore": 99,
    "riskLevel": "High",
    "income": "\u20b95L",
    "inflow": "\u20b9647,533",
    "outflow": "\u20b9547,694",
    "connections": 22,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1005",
        "A1078",
        "A1195",
        "A1005"
      ],
      [
        "A1005",
        "A1183",
        "A1021",
        "A1005"
      ]
    ],
    "openDate": "2015-05-14",
    "lastTxn": "2015-08-28",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1195",
        "amt": 96226,
        "ch": "UPI",
        "time": "07:40",
        "branch": "Mumbai",
        "txn_id": "T944"
      },
      {
        "dir": "in",
        "other": "A1021",
        "amt": 93326,
        "ch": "ATM",
        "time": "16:08",
        "branch": "Mumbai",
        "txn_id": "T1008"
      },
      {
        "dir": "in",
        "other": "A1047",
        "amt": 91136,
        "ch": "RTGS",
        "time": "12:38",
        "branch": "Bangalore",
        "txn_id": "T1828"
      },
      {
        "dir": "in",
        "other": "A1171",
        "amt": 85239,
        "ch": "RTGS",
        "time": "08:12",
        "branch": "Chennai",
        "txn_id": "T1757"
      },
      {
        "dir": "out",
        "other": "A1144",
        "amt": 82482,
        "ch": "RTGS",
        "time": "17:59",
        "branch": "Bangalore",
        "txn_id": "T1307"
      },
      {
        "dir": "out",
        "other": "A1026",
        "amt": 80566,
        "ch": "UPI",
        "time": "11:16",
        "branch": "Mumbai",
        "txn_id": "T1283"
      },
      {
        "dir": "out",
        "other": "A1077",
        "amt": 78969,
        "ch": "UPI",
        "time": "13:30",
        "branch": "Delhi",
        "txn_id": "T1836"
      },
      {
        "dir": "out",
        "other": "A1053",
        "amt": 69624,
        "ch": "ATM",
        "time": "20:35",
        "branch": "Bangalore",
        "txn_id": "T1572"
      }
    ]
  },
  {
    "id": "A1006",
    "name": "A1006",
    "type": "Engineer",
    "age": 32,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9529,508",
    "outflow": "\u20b9445,990",
    "connections": 20,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1006",
        "A1020",
        "A1151",
        "A1006"
      ],
      [
        "A1006",
        "A1148",
        "A1076",
        "A1006"
      ],
      [
        "A1006",
        "A1118",
        "A1006"
      ]
    ],
    "openDate": "2015-07-06",
    "lastTxn": "2016-01-18",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1063",
        "amt": 99900,
        "ch": "UPI",
        "time": "15:38",
        "branch": "Chennai",
        "txn_id": "T1850"
      },
      {
        "dir": "in",
        "other": "A1057",
        "amt": 93528,
        "ch": "NEFT",
        "time": "19:49",
        "branch": "Chennai",
        "txn_id": "T610"
      },
      {
        "dir": "in",
        "other": "A1089",
        "amt": 84078,
        "ch": "ATM",
        "time": "19:37",
        "branch": "Delhi",
        "txn_id": "T1159"
      },
      {
        "dir": "in",
        "other": "A1199",
        "amt": 70356,
        "ch": "IMPS",
        "time": "04:59",
        "branch": "Kolkata",
        "txn_id": "T471"
      },
      {
        "dir": "out",
        "other": "A1118",
        "amt": 61496,
        "ch": "RTGS",
        "time": "20:29",
        "branch": "Chennai",
        "txn_id": "T908"
      },
      {
        "dir": "out",
        "other": "A1136",
        "amt": 59568,
        "ch": "IMPS",
        "time": "17:52",
        "branch": "Delhi",
        "txn_id": "T1568"
      },
      {
        "dir": "in",
        "other": "A1151",
        "amt": 51436,
        "ch": "RTGS",
        "time": "04:42",
        "branch": "Kolkata",
        "txn_id": "T767"
      },
      {
        "dir": "out",
        "other": "A1038",
        "amt": 49382,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T2007"
      }
    ]
  },
  {
    "id": "A1007",
    "name": "A1007",
    "type": "Engineer",
    "age": 55,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9373,885",
    "outflow": "\u20b9686,180",
    "connections": 17,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1007",
        "A1037",
        "A1113",
        "A1007"
      ],
      [
        "A1007",
        "A1033",
        "A1121",
        "A1007"
      ],
      [
        "A1007",
        "A1008",
        "A1113",
        "A1007"
      ]
    ],
    "openDate": "2016-04-02",
    "lastTxn": "2017-11-21",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1107",
        "amt": 99288,
        "ch": "ATM",
        "time": "13:58",
        "branch": "Kolkata",
        "txn_id": "T1087"
      },
      {
        "dir": "out",
        "other": "A1050",
        "amt": 94349,
        "ch": "RTGS",
        "time": "15:26",
        "branch": "Chennai",
        "txn_id": "T682"
      },
      {
        "dir": "in",
        "other": "A1159",
        "amt": 93654,
        "ch": "NEFT",
        "time": "12:31",
        "branch": "Chennai",
        "txn_id": "T1207"
      },
      {
        "dir": "out",
        "other": "A1008",
        "amt": 92039,
        "ch": "NEFT",
        "time": "22:02",
        "branch": "Chennai",
        "txn_id": "T1852"
      },
      {
        "dir": "in",
        "other": "A1024",
        "amt": 91364,
        "ch": "ATM",
        "time": "20:36",
        "branch": "Kolkata",
        "txn_id": "T1488"
      },
      {
        "dir": "out",
        "other": "A1132",
        "amt": 90506,
        "ch": "UPI",
        "time": "15:14",
        "branch": "Kolkata",
        "txn_id": "T642"
      },
      {
        "dir": "out",
        "other": "A1033",
        "amt": 85111,
        "ch": "UPI",
        "time": "11:40",
        "branch": "Delhi",
        "txn_id": "T874"
      },
      {
        "dir": "in",
        "other": "A1121",
        "amt": 83161,
        "ch": "IMPS",
        "time": "10:03",
        "branch": "Bangalore",
        "txn_id": "T736"
      }
    ]
  },
  {
    "id": "A1008",
    "name": "A1008",
    "type": "Freelancer",
    "age": 57,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b91,575,463",
    "outflow": "\u20b9802,640",
    "connections": 27,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1008",
        "A1015",
        "A1064",
        "A1008"
      ],
      [
        "A1008",
        "A1015",
        "A1131",
        "A1008"
      ],
      [
        "A1008",
        "A1113",
        "A1007",
        "A1008"
      ]
    ],
    "openDate": "2024-07-31",
    "lastTxn": "2027-02-11",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1198",
        "amt": 880639,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2028"
      },
      {
        "dir": "out",
        "other": "A1082",
        "amt": 223748,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1919"
      },
      {
        "dir": "in",
        "other": "A1131",
        "amt": 222632,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1918"
      },
      {
        "dir": "out",
        "other": "A1127",
        "amt": 99117,
        "ch": "RTGS",
        "time": "07:53",
        "branch": "Kolkata",
        "txn_id": "T428"
      },
      {
        "dir": "in",
        "other": "A1039",
        "amt": 97043,
        "ch": "ATM",
        "time": "22:18",
        "branch": "Kolkata",
        "txn_id": "T853"
      },
      {
        "dir": "in",
        "other": "A1065",
        "amt": 92530,
        "ch": "UPI",
        "time": "03:45",
        "branch": "Mumbai",
        "txn_id": "T1547"
      },
      {
        "dir": "in",
        "other": "A1007",
        "amt": 92039,
        "ch": "NEFT",
        "time": "22:02",
        "branch": "Chennai",
        "txn_id": "T1852"
      },
      {
        "dir": "out",
        "other": "A1160",
        "amt": 88289,
        "ch": "RTGS",
        "time": "10:53",
        "branch": "Mumbai",
        "txn_id": "T425"
      }
    ]
  },
  {
    "id": "A1009",
    "name": "A1009",
    "type": "Doctor",
    "age": 48,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9504,089",
    "outflow": "\u20b9359,467",
    "connections": 14,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1009",
        "A1192",
        "A1143",
        "A1009"
      ]
    ],
    "openDate": "2022-04-17",
    "lastTxn": "2022-12-28",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1096",
        "amt": 92235,
        "ch": "UPI",
        "time": "02:30",
        "branch": "Chennai",
        "txn_id": "T645"
      },
      {
        "dir": "out",
        "other": "A1004",
        "amt": 81734,
        "ch": "RTGS",
        "time": "23:47",
        "branch": "Bangalore",
        "txn_id": "T1169"
      },
      {
        "dir": "in",
        "other": "A1054",
        "amt": 75747,
        "ch": "IMPS",
        "time": "22:47",
        "branch": "Delhi",
        "txn_id": "T1579"
      },
      {
        "dir": "in",
        "other": "A1062",
        "amt": 74667,
        "ch": "UPI",
        "time": "07:39",
        "branch": "Delhi",
        "txn_id": "T606"
      },
      {
        "dir": "out",
        "other": "A1177",
        "amt": 72712,
        "ch": "RTGS",
        "time": "20:00",
        "branch": "Bangalore",
        "txn_id": "T1233"
      },
      {
        "dir": "out",
        "other": "A1101",
        "amt": 71929,
        "ch": "NEFT",
        "time": "08:30",
        "branch": "Kolkata",
        "txn_id": "T1650"
      },
      {
        "dir": "in",
        "other": "A1143",
        "amt": 61181,
        "ch": "ATM",
        "time": "21:41",
        "branch": "Chennai",
        "txn_id": "T1403"
      },
      {
        "dir": "in",
        "other": "A1189",
        "amt": 60414,
        "ch": "NEFT",
        "time": "02:09",
        "branch": "Mumbai",
        "txn_id": "T671"
      }
    ]
  },
  {
    "id": "A1010",
    "name": "A1010",
    "type": "Freelancer",
    "age": 61,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9344,292",
    "outflow": "\u20b9247,266",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1010",
        "A1145",
        "A1010"
      ],
      [
        "A1010",
        "A1123",
        "A1108",
        "A1010"
      ],
      [
        "A1010",
        "A1123",
        "A1090",
        "A1010"
      ]
    ],
    "openDate": "2015-03-22",
    "lastTxn": "2017-05-13",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1011",
        "amt": 86573,
        "ch": "NEFT",
        "time": "08:23",
        "branch": "Bangalore",
        "txn_id": "T1680"
      },
      {
        "dir": "in",
        "other": "A1145",
        "amt": 82384,
        "ch": "UPI",
        "time": "20:04",
        "branch": "Kolkata",
        "txn_id": "T1780"
      },
      {
        "dir": "out",
        "other": "A1123",
        "amt": 62237,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1947"
      },
      {
        "dir": "in",
        "other": "A1090",
        "amt": 62237,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1949"
      },
      {
        "dir": "out",
        "other": "A1111",
        "amt": 52248,
        "ch": "UPI",
        "time": "18:01",
        "branch": "Chennai",
        "txn_id": "T1713"
      },
      {
        "dir": "in",
        "other": "A1062",
        "amt": 48028,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1986"
      },
      {
        "dir": "in",
        "other": "A1055",
        "amt": 44439,
        "ch": "RTGS",
        "time": "02:32",
        "branch": "Delhi",
        "txn_id": "T1658"
      },
      {
        "dir": "in",
        "other": "A1184",
        "amt": 40042,
        "ch": "UPI",
        "time": "09:32",
        "branch": "Chennai",
        "txn_id": "T1341"
      }
    ]
  },
  {
    "id": "A1011",
    "name": "A1011",
    "type": "Business",
    "age": 48,
    "risk": "suspicious",
    "riskScore": 60,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9400,656",
    "outflow": "\u20b9556,713",
    "connections": 19,
    "dormant": false,
    "structuring": 3,
    "circles": [
      [
        "A1011",
        "A1155",
        "A1045",
        "A1011"
      ],
      [
        "A1011",
        "A1037",
        "A1109",
        "A1011"
      ],
      [
        "A1011",
        "A1029",
        "A1109",
        "A1011"
      ]
    ],
    "openDate": "2017-06-22",
    "lastTxn": "2019-05-14",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1075",
        "amt": 99932,
        "ch": "UPI",
        "time": "07:04",
        "branch": "Bangalore",
        "txn_id": "T1512"
      },
      {
        "dir": "in",
        "other": "A1099",
        "amt": 92182,
        "ch": "IMPS",
        "time": "19:40",
        "branch": "Mumbai",
        "txn_id": "T1672"
      },
      {
        "dir": "in",
        "other": "A1010",
        "amt": 86573,
        "ch": "NEFT",
        "time": "08:23",
        "branch": "Bangalore",
        "txn_id": "T1680"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 71178,
        "ch": "IMPS",
        "time": "07:39",
        "branch": "Bangalore",
        "txn_id": "T625"
      },
      {
        "dir": "out",
        "other": "A1050",
        "amt": 64718,
        "ch": "UPI",
        "time": "13:54",
        "branch": "Mumbai",
        "txn_id": "T153"
      },
      {
        "dir": "in",
        "other": "A1019",
        "amt": 59710,
        "ch": "ATM",
        "time": "01:02",
        "branch": "Delhi",
        "txn_id": "T234"
      },
      {
        "dir": "in",
        "other": "A1045",
        "amt": 58203,
        "ch": "NEFT",
        "time": "13:07",
        "branch": "Mumbai",
        "txn_id": "T570"
      },
      {
        "dir": "out",
        "other": "A1198",
        "amt": 49927,
        "ch": "ATM",
        "time": "14:08",
        "branch": "Delhi",
        "txn_id": "T1670"
      }
    ]
  },
  {
    "id": "A1012",
    "name": "A1012",
    "type": "Student",
    "age": 22,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9205,608",
    "outflow": "\u20b9321,876",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1012",
        "A1095",
        "A1034",
        "A1012"
      ]
    ],
    "openDate": "2015-04-08",
    "lastTxn": "2015-08-25",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1126",
        "amt": 89673,
        "ch": "IMPS",
        "time": "21:57",
        "branch": "Bangalore",
        "txn_id": "T1225"
      },
      {
        "dir": "out",
        "other": "A1094",
        "amt": 88089,
        "ch": "UPI",
        "time": "22:40",
        "branch": "Chennai",
        "txn_id": "T1489"
      },
      {
        "dir": "out",
        "other": "A1095",
        "amt": 61847,
        "ch": "ATM",
        "time": "18:55",
        "branch": "Mumbai",
        "txn_id": "T1738"
      },
      {
        "dir": "out",
        "other": "A1068",
        "amt": 57967,
        "ch": "IMPS",
        "time": "17:13",
        "branch": "Chennai",
        "txn_id": "T1105"
      },
      {
        "dir": "out",
        "other": "A1071",
        "amt": 57781,
        "ch": "NEFT",
        "time": "20:27",
        "branch": "Chennai",
        "txn_id": "T294"
      },
      {
        "dir": "in",
        "other": "A1034",
        "amt": 56217,
        "ch": "ATM",
        "time": "11:41",
        "branch": "Delhi",
        "txn_id": "T971"
      },
      {
        "dir": "in",
        "other": "A1005",
        "amt": 36173,
        "ch": "UPI",
        "time": "02:44",
        "branch": "Delhi",
        "txn_id": "T481"
      },
      {
        "dir": "out",
        "other": "A1035",
        "amt": 34380,
        "ch": "NEFT",
        "time": "22:33",
        "branch": "Bangalore",
        "txn_id": "T677"
      }
    ]
  },
  {
    "id": "A1013",
    "name": "A1013",
    "type": "Teacher",
    "age": 64,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9634,535",
    "outflow": "\u20b9691,496",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1013",
        "A1004",
        "A1113",
        "A1013"
      ],
      [
        "A1013",
        "A1172",
        "A1086",
        "A1013"
      ]
    ],
    "openDate": "2018-10-31",
    "lastTxn": "2020-08-19",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1175",
        "amt": 361821,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1924"
      },
      {
        "dir": "in",
        "other": "A1193",
        "amt": 361710,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1923"
      },
      {
        "dir": "out",
        "other": "A1082",
        "amt": 89590,
        "ch": "ATM",
        "time": "22:19",
        "branch": "Kolkata",
        "txn_id": "T1218"
      },
      {
        "dir": "out",
        "other": "A1160",
        "amt": 87014,
        "ch": "IMPS",
        "time": "06:03",
        "branch": "Kolkata",
        "txn_id": "T385"
      },
      {
        "dir": "in",
        "other": "A1017",
        "amt": 79344,
        "ch": "RTGS",
        "time": "10:45",
        "branch": "Mumbai",
        "txn_id": "T1133"
      },
      {
        "dir": "out",
        "other": "A1172",
        "amt": 65119,
        "ch": "RTGS",
        "time": "08:47",
        "branch": "Bangalore",
        "txn_id": "T1263"
      },
      {
        "dir": "in",
        "other": "A1106",
        "amt": 58218,
        "ch": "IMPS",
        "time": "02:24",
        "branch": "Bangalore",
        "txn_id": "T704"
      },
      {
        "dir": "out",
        "other": "A1028",
        "amt": 48378,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1978"
      }
    ]
  },
  {
    "id": "A1014",
    "name": "A1014",
    "type": "Govt Employee",
    "age": 31,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9685,139",
    "outflow": "\u20b9492,853",
    "connections": 22,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1014",
        "A1029",
        "A1018",
        "A1014"
      ],
      [
        "A1014",
        "A1018",
        "A1014"
      ],
      [
        "A1014",
        "A1193",
        "A1123",
        "A1014"
      ]
    ],
    "openDate": "2022-12-12",
    "lastTxn": "2023-05-12",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1127",
        "amt": 98354,
        "ch": "IMPS",
        "time": "18:26",
        "branch": "Delhi",
        "txn_id": "T1445"
      },
      {
        "dir": "in",
        "other": "A1162",
        "amt": 89987,
        "ch": "IMPS",
        "time": "00:04",
        "branch": "Mumbai",
        "txn_id": "T1783"
      },
      {
        "dir": "out",
        "other": "A1029",
        "amt": 88517,
        "ch": "IMPS",
        "time": "16:22",
        "branch": "Delhi",
        "txn_id": "T1864"
      },
      {
        "dir": "in",
        "other": "A1123",
        "amt": 83694,
        "ch": "RTGS",
        "time": "06:08",
        "branch": "Delhi",
        "txn_id": "T792"
      },
      {
        "dir": "in",
        "other": "A1018",
        "amt": 83126,
        "ch": "UPI",
        "time": "06:13",
        "branch": "Kolkata",
        "txn_id": "T1605"
      },
      {
        "dir": "out",
        "other": "A1078",
        "amt": 79267,
        "ch": "IMPS",
        "time": "11:57",
        "branch": "Kolkata",
        "txn_id": "T1675"
      },
      {
        "dir": "in",
        "other": "A1096",
        "amt": 76373,
        "ch": "UPI",
        "time": "12:36",
        "branch": "Kolkata",
        "txn_id": "T1754"
      },
      {
        "dir": "out",
        "other": "A1190",
        "amt": 73931,
        "ch": "UPI",
        "time": "07:33",
        "branch": "Chennai",
        "txn_id": "T1554"
      }
    ]
  },
  {
    "id": "A1015",
    "name": "A1015",
    "type": "Freelancer",
    "age": 40,
    "risk": "fraud",
    "riskScore": 95,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9608,704",
    "outflow": "\u20b9737,557",
    "connections": 24,
    "dormant": false,
    "structuring": 3,
    "circles": [
      [
        "A1015",
        "A1072",
        "A1060",
        "A1015"
      ],
      [
        "A1015",
        "A1072",
        "A1189",
        "A1015"
      ],
      [
        "A1015",
        "A1190",
        "A1060",
        "A1015"
      ]
    ],
    "openDate": "2020-02-03",
    "lastTxn": "2020-11-10",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1155",
        "amt": 92964,
        "ch": "NEFT",
        "time": "00:53",
        "branch": "Bangalore",
        "txn_id": "T1365"
      },
      {
        "dir": "out",
        "other": "A1062",
        "amt": 90780,
        "ch": "IMPS",
        "time": "13:52",
        "branch": "Bangalore",
        "txn_id": "T919"
      },
      {
        "dir": "out",
        "other": "A1177",
        "amt": 90473,
        "ch": "RTGS",
        "time": "05:13",
        "branch": "Bangalore",
        "txn_id": "T1756"
      },
      {
        "dir": "in",
        "other": "A1089",
        "amt": 89154,
        "ch": "NEFT",
        "time": "16:52",
        "branch": "Chennai",
        "txn_id": "T759"
      },
      {
        "dir": "in",
        "other": "A1036",
        "amt": 77542,
        "ch": "NEFT",
        "time": "07:27",
        "branch": "Chennai",
        "txn_id": "T1282"
      },
      {
        "dir": "out",
        "other": "A1064",
        "amt": 71420,
        "ch": "UPI",
        "time": "05:27",
        "branch": "Bangalore",
        "txn_id": "T539"
      },
      {
        "dir": "in",
        "other": "A1145",
        "amt": 71418,
        "ch": "ATM",
        "time": "07:55",
        "branch": "Mumbai",
        "txn_id": "T513"
      },
      {
        "dir": "in",
        "other": "A1152",
        "amt": 64439,
        "ch": "RTGS",
        "time": "17:42",
        "branch": "Bangalore",
        "txn_id": "T271"
      }
    ]
  },
  {
    "id": "A1016",
    "name": "A1016",
    "type": "Teacher",
    "age": 46,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9843,354",
    "outflow": "\u20b9798,063",
    "connections": 26,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1016",
        "A1024",
        "A1036",
        "A1016"
      ],
      [
        "A1016",
        "A1024",
        "A1093",
        "A1016"
      ],
      [
        "A1016",
        "A1004",
        "A1178",
        "A1016"
      ]
    ],
    "openDate": "2023-12-08",
    "lastTxn": "2026-07-20",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1150",
        "amt": 209725,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1940"
      },
      {
        "dir": "out",
        "other": "A1157",
        "amt": 98605,
        "ch": "IMPS",
        "time": "11:52",
        "branch": "Bangalore",
        "txn_id": "T864"
      },
      {
        "dir": "in",
        "other": "A1018",
        "amt": 98407,
        "ch": "IMPS",
        "time": "06:56",
        "branch": "Chennai",
        "txn_id": "T1823"
      },
      {
        "dir": "in",
        "other": "A1049",
        "amt": 93105,
        "ch": "UPI",
        "time": "04:59",
        "branch": "Kolkata",
        "txn_id": "T511"
      },
      {
        "dir": "out",
        "other": "A1159",
        "amt": 93021,
        "ch": "IMPS",
        "time": "03:39",
        "branch": "Delhi",
        "txn_id": "T1746"
      },
      {
        "dir": "in",
        "other": "A1170",
        "amt": 92543,
        "ch": "IMPS",
        "time": "10:22",
        "branch": "Mumbai",
        "txn_id": "T882"
      },
      {
        "dir": "out",
        "other": "A1064",
        "amt": 91730,
        "ch": "NEFT",
        "time": "09:37",
        "branch": "Delhi",
        "txn_id": "T1534"
      },
      {
        "dir": "out",
        "other": "A1076",
        "amt": 90286,
        "ch": "ATM",
        "time": "08:37",
        "branch": "Mumbai",
        "txn_id": "T264"
      }
    ]
  },
  {
    "id": "A1017",
    "name": "A1017",
    "type": "Teacher",
    "age": 53,
    "risk": "clean",
    "riskScore": 40,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9238,620",
    "outflow": "\u20b9699,437",
    "connections": 18,
    "dormant": false,
    "structuring": 1,
    "circles": [],
    "openDate": "2024-04-23",
    "lastTxn": "2024-06-01",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1079",
        "amt": 96380,
        "ch": "NEFT",
        "time": "09:41",
        "branch": "Kolkata",
        "txn_id": "T529"
      },
      {
        "dir": "out",
        "other": "A1053",
        "amt": 96026,
        "ch": "RTGS",
        "time": "19:35",
        "branch": "Mumbai",
        "txn_id": "T1465"
      },
      {
        "dir": "out",
        "other": "A1060",
        "amt": 94652,
        "ch": "NEFT",
        "time": "11:18",
        "branch": "Kolkata",
        "txn_id": "T1736"
      },
      {
        "dir": "out",
        "other": "A1019",
        "amt": 87667,
        "ch": "ATM",
        "time": "12:43",
        "branch": "Mumbai",
        "txn_id": "T1577"
      },
      {
        "dir": "out",
        "other": "A1013",
        "amt": 79344,
        "ch": "RTGS",
        "time": "10:45",
        "branch": "Mumbai",
        "txn_id": "T1133"
      },
      {
        "dir": "in",
        "other": "A1196",
        "amt": 58875,
        "ch": "RTGS",
        "time": "21:11",
        "branch": "Mumbai",
        "txn_id": "T1344"
      },
      {
        "dir": "out",
        "other": "A1122",
        "amt": 56620,
        "ch": "RTGS",
        "time": "06:13",
        "branch": "Delhi",
        "txn_id": "T889"
      },
      {
        "dir": "out",
        "other": "A1033",
        "amt": 56370,
        "ch": "ATM",
        "time": "17:49",
        "branch": "Kolkata",
        "txn_id": "T1202"
      }
    ]
  },
  {
    "id": "A1018",
    "name": "A1018",
    "type": "Govt Employee",
    "age": 63,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9710,406",
    "outflow": "\u20b9470,118",
    "connections": 18,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1018",
        "A1134",
        "A1075",
        "A1018"
      ],
      [
        "A1018",
        "A1180",
        "A1153",
        "A1018"
      ],
      [
        "A1018",
        "A1014",
        "A1018"
      ]
    ],
    "openDate": "2020-05-07",
    "lastTxn": "2021-12-26",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1075",
        "amt": 98769,
        "ch": "UPI",
        "time": "12:08",
        "branch": "Chennai",
        "txn_id": "T283"
      },
      {
        "dir": "out",
        "other": "A1016",
        "amt": 98407,
        "ch": "IMPS",
        "time": "06:56",
        "branch": "Chennai",
        "txn_id": "T1823"
      },
      {
        "dir": "in",
        "other": "A1029",
        "amt": 89579,
        "ch": "UPI",
        "time": "05:10",
        "branch": "Chennai",
        "txn_id": "T1639"
      },
      {
        "dir": "in",
        "other": "A1102",
        "amt": 89052,
        "ch": "NEFT",
        "time": "18:51",
        "branch": "Mumbai",
        "txn_id": "T396"
      },
      {
        "dir": "in",
        "other": "A1075",
        "amt": 88475,
        "ch": "ATM",
        "time": "16:20",
        "branch": "Chennai",
        "txn_id": "T1846"
      },
      {
        "dir": "out",
        "other": "A1180",
        "amt": 83633,
        "ch": "RTGS",
        "time": "11:44",
        "branch": "Mumbai",
        "txn_id": "T1007"
      },
      {
        "dir": "out",
        "other": "A1014",
        "amt": 83126,
        "ch": "UPI",
        "time": "06:13",
        "branch": "Kolkata",
        "txn_id": "T1605"
      },
      {
        "dir": "in",
        "other": "A1177",
        "amt": 79104,
        "ch": "ATM",
        "time": "04:00",
        "branch": "Mumbai",
        "txn_id": "T1734"
      }
    ]
  },
  {
    "id": "A1019",
    "name": "A1019",
    "type": "Business",
    "age": 25,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b91,128,893",
    "outflow": "\u20b9349,929",
    "connections": 22,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1019",
        "A1024",
        "A1140",
        "A1019"
      ],
      [
        "A1019",
        "A1165",
        "A1081",
        "A1019"
      ],
      [
        "A1019",
        "A1165",
        "A1008",
        "A1019"
      ]
    ],
    "openDate": "2022-08-27",
    "lastTxn": "2023-05-19",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1081",
        "amt": 501275,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2030"
      },
      {
        "dir": "out",
        "other": "A1078",
        "amt": 99845,
        "ch": "ATM",
        "time": "21:41",
        "branch": "Mumbai",
        "txn_id": "T172"
      },
      {
        "dir": "in",
        "other": "A1031",
        "amt": 95615,
        "ch": "IMPS",
        "time": "11:24",
        "branch": "Delhi",
        "txn_id": "T1174"
      },
      {
        "dir": "in",
        "other": "A1017",
        "amt": 87667,
        "ch": "ATM",
        "time": "12:43",
        "branch": "Mumbai",
        "txn_id": "T1577"
      },
      {
        "dir": "in",
        "other": "A1056",
        "amt": 76129,
        "ch": "UPI",
        "time": "22:34",
        "branch": "Mumbai",
        "txn_id": "T892"
      },
      {
        "dir": "in",
        "other": "A1147",
        "amt": 71251,
        "ch": "NEFT",
        "time": "21:34",
        "branch": "Chennai",
        "txn_id": "T1623"
      },
      {
        "dir": "out",
        "other": "A1094",
        "amt": 67682,
        "ch": "IMPS",
        "time": "18:33",
        "branch": "Kolkata",
        "txn_id": "T1726"
      },
      {
        "dir": "out",
        "other": "A1011",
        "amt": 59710,
        "ch": "ATM",
        "time": "01:02",
        "branch": "Delhi",
        "txn_id": "T234"
      }
    ]
  },
  {
    "id": "A1020",
    "name": "A1020",
    "type": "Engineer",
    "age": 20,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9492,013",
    "outflow": "\u20b9528,617",
    "connections": 22,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1020",
        "A1127",
        "A1160",
        "A1020"
      ],
      [
        "A1020",
        "A1151",
        "A1006",
        "A1020"
      ],
      [
        "A1020",
        "A1138",
        "A1186",
        "A1020"
      ]
    ],
    "openDate": "2016-10-30",
    "lastTxn": "2018-02-05",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1091",
        "amt": 97505,
        "ch": "NEFT",
        "time": "09:51",
        "branch": "Chennai",
        "txn_id": "T1801"
      },
      {
        "dir": "in",
        "other": "A1040",
        "amt": 94234,
        "ch": "UPI",
        "time": "11:53",
        "branch": "Chennai",
        "txn_id": "T410"
      },
      {
        "dir": "out",
        "other": "A1164",
        "amt": 85603,
        "ch": "RTGS",
        "time": "02:30",
        "branch": "Delhi",
        "txn_id": "T279"
      },
      {
        "dir": "out",
        "other": "A1151",
        "amt": 79597,
        "ch": "ATM",
        "time": "17:53",
        "branch": "Delhi",
        "txn_id": "T1620"
      },
      {
        "dir": "in",
        "other": "A1001",
        "amt": 70597,
        "ch": "ATM",
        "time": "13:27",
        "branch": "Bangalore",
        "txn_id": "T1693"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 65245,
        "ch": "IMPS",
        "time": "01:59",
        "branch": "Kolkata",
        "txn_id": "T1256"
      },
      {
        "dir": "in",
        "other": "A1160",
        "amt": 58594,
        "ch": "ATM",
        "time": "07:51",
        "branch": "Delhi",
        "txn_id": "T709"
      },
      {
        "dir": "in",
        "other": "A1186",
        "amt": 51866,
        "ch": "RTGS",
        "time": "02:48",
        "branch": "Delhi",
        "txn_id": "T1002"
      }
    ]
  },
  {
    "id": "A1021",
    "name": "A1021",
    "type": "Business",
    "age": 46,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9467,746",
    "outflow": "\u20b9651,964",
    "connections": 20,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1021",
        "A1015",
        "A1021"
      ],
      [
        "A1021",
        "A1015",
        "A1108",
        "A1021"
      ],
      [
        "A1021",
        "A1042",
        "A1074",
        "A1021"
      ]
    ],
    "openDate": "2017-12-24",
    "lastTxn": "2020-09-19",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1090",
        "amt": 94299,
        "ch": "ATM",
        "time": "21:53",
        "branch": "Delhi",
        "txn_id": "T483"
      },
      {
        "dir": "out",
        "other": "A1005",
        "amt": 93326,
        "ch": "ATM",
        "time": "16:08",
        "branch": "Mumbai",
        "txn_id": "T1008"
      },
      {
        "dir": "in",
        "other": "A1080",
        "amt": 90390,
        "ch": "ATM",
        "time": "16:13",
        "branch": "Kolkata",
        "txn_id": "T1668"
      },
      {
        "dir": "out",
        "other": "A1167",
        "amt": 78250,
        "ch": "IMPS",
        "time": "08:06",
        "branch": "Mumbai",
        "txn_id": "T861"
      },
      {
        "dir": "out",
        "other": "A1185",
        "amt": 74570,
        "ch": "NEFT",
        "time": "08:59",
        "branch": "Mumbai",
        "txn_id": "T1458"
      },
      {
        "dir": "in",
        "other": "A1014",
        "amt": 63883,
        "ch": "NEFT",
        "time": "17:36",
        "branch": "Mumbai",
        "txn_id": "T1188"
      },
      {
        "dir": "out",
        "other": "A1170",
        "amt": 63240,
        "ch": "RTGS",
        "time": "04:56",
        "branch": "Chennai",
        "txn_id": "T1477"
      },
      {
        "dir": "out",
        "other": "A1171",
        "amt": 62200,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1941"
      }
    ]
  },
  {
    "id": "A1022",
    "name": "A1022",
    "type": "Doctor",
    "age": 34,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9975,461",
    "outflow": "\u20b9541,543",
    "connections": 22,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1022",
        "A1159",
        "A1187",
        "A1022"
      ],
      [
        "A1022",
        "A1198",
        "A1057",
        "A1022"
      ],
      [
        "A1022",
        "A1065",
        "A1022"
      ]
    ],
    "openDate": "2016-07-30",
    "lastTxn": "2017-11-22",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1097",
        "amt": 320379,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1904"
      },
      {
        "dir": "in",
        "other": "A1148",
        "amt": 94782,
        "ch": "IMPS",
        "time": "00:37",
        "branch": "Bangalore",
        "txn_id": "T1652"
      },
      {
        "dir": "in",
        "other": "A1024",
        "amt": 86871,
        "ch": "UPI",
        "time": "21:17",
        "branch": "Chennai",
        "txn_id": "T1392"
      },
      {
        "dir": "in",
        "other": "A1057",
        "amt": 84815,
        "ch": "UPI",
        "time": "00:51",
        "branch": "Kolkata",
        "txn_id": "T277"
      },
      {
        "dir": "in",
        "other": "A1125",
        "amt": 80874,
        "ch": "NEFT",
        "time": "09:37",
        "branch": "Kolkata",
        "txn_id": "T251"
      },
      {
        "dir": "out",
        "other": "A1159",
        "amt": 77533,
        "ch": "ATM",
        "time": "13:09",
        "branch": "Mumbai",
        "txn_id": "T1058"
      },
      {
        "dir": "out",
        "other": "A1065",
        "amt": 74068,
        "ch": "UPI",
        "time": "14:53",
        "branch": "Chennai",
        "txn_id": "T698"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 66530,
        "ch": "UPI",
        "time": "23:02",
        "branch": "Bangalore",
        "txn_id": "T1703"
      }
    ]
  },
  {
    "id": "A1023",
    "name": "A1023",
    "type": "Freelancer",
    "age": 49,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9482,029",
    "outflow": "\u20b9101,900",
    "connections": 13,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1023",
        "A1066",
        "A1192",
        "A1023"
      ]
    ],
    "openDate": "2015-02-18",
    "lastTxn": "2017-07-01",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1077",
        "amt": 93820,
        "ch": "IMPS",
        "time": "19:49",
        "branch": "Delhi",
        "txn_id": "T296"
      },
      {
        "dir": "in",
        "other": "A1148",
        "amt": 82709,
        "ch": "IMPS",
        "time": "12:26",
        "branch": "Bangalore",
        "txn_id": "T1097"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 73740,
        "ch": "NEFT",
        "time": "18:48",
        "branch": "Mumbai",
        "txn_id": "T1807"
      },
      {
        "dir": "in",
        "other": "A1195",
        "amt": 64346,
        "ch": "UPI",
        "time": "04:14",
        "branch": "Chennai",
        "txn_id": "T1238"
      },
      {
        "dir": "in",
        "other": "A1197",
        "amt": 47887,
        "ch": "RTGS",
        "time": "15:12",
        "branch": "Bangalore",
        "txn_id": "T1208"
      },
      {
        "dir": "out",
        "other": "A1173",
        "amt": 45645,
        "ch": "UPI",
        "time": "21:23",
        "branch": "Kolkata",
        "txn_id": "T891"
      },
      {
        "dir": "in",
        "other": "A1192",
        "amt": 42246,
        "ch": "RTGS",
        "time": "21:47",
        "branch": "Bangalore",
        "txn_id": "T225"
      },
      {
        "dir": "out",
        "other": "A1066",
        "amt": 42157,
        "ch": "IMPS",
        "time": "15:55",
        "branch": "Mumbai",
        "txn_id": "T480"
      }
    ]
  },
  {
    "id": "A1024",
    "name": "A1024",
    "type": "Teacher",
    "age": 50,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9535,632",
    "outflow": "\u20b9944,105",
    "connections": 27,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1024",
        "A1130",
        "A1024"
      ],
      [
        "A1024",
        "A1112",
        "A1102",
        "A1024"
      ],
      [
        "A1024",
        "A1036",
        "A1016",
        "A1024"
      ]
    ],
    "openDate": "2023-10-16",
    "lastTxn": "2026-01-02",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1187",
        "amt": 98461,
        "ch": "ATM",
        "time": "13:25",
        "branch": "Mumbai",
        "txn_id": "T598"
      },
      {
        "dir": "out",
        "other": "A1007",
        "amt": 91364,
        "ch": "ATM",
        "time": "20:36",
        "branch": "Kolkata",
        "txn_id": "T1488"
      },
      {
        "dir": "out",
        "other": "A1000",
        "amt": 90431,
        "ch": "ATM",
        "time": "18:30",
        "branch": "Delhi",
        "txn_id": "T638"
      },
      {
        "dir": "in",
        "other": "A1102",
        "amt": 88675,
        "ch": "IMPS",
        "time": "12:14",
        "branch": "Chennai",
        "txn_id": "T1860"
      },
      {
        "dir": "out",
        "other": "A1022",
        "amt": 86871,
        "ch": "UPI",
        "time": "21:17",
        "branch": "Chennai",
        "txn_id": "T1392"
      },
      {
        "dir": "out",
        "other": "A1058",
        "amt": 81616,
        "ch": "UPI",
        "time": "01:53",
        "branch": "Mumbai",
        "txn_id": "T747"
      },
      {
        "dir": "out",
        "other": "A1136",
        "amt": 78835,
        "ch": "UPI",
        "time": "21:19",
        "branch": "Bangalore",
        "txn_id": "T1849"
      },
      {
        "dir": "out",
        "other": "A1036",
        "amt": 77566,
        "ch": "ATM",
        "time": "13:51",
        "branch": "Kolkata",
        "txn_id": "T302"
      }
    ]
  },
  {
    "id": "A1025",
    "name": "A1025",
    "type": "Engineer",
    "age": 32,
    "risk": "fraud",
    "riskScore": 98,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b91,019,185",
    "outflow": "\u20b91,448,656",
    "connections": 25,
    "dormant": true,
    "structuring": 2,
    "circles": [
      [
        "A1025",
        "A1048",
        "A1025"
      ],
      [
        "A1025",
        "A1048",
        "A1003",
        "A1025"
      ],
      [
        "A1025",
        "A1127",
        "A1106",
        "A1025"
      ]
    ],
    "openDate": "2017-01-20",
    "lastTxn": "2017-02-18",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1043",
        "amt": 860304,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2026"
      },
      {
        "dir": "out",
        "other": "A1138",
        "amt": 280226,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1929"
      },
      {
        "dir": "in",
        "other": "A1090",
        "amt": 97787,
        "ch": "RTGS",
        "time": "03:57",
        "branch": "Chennai",
        "txn_id": "T926"
      },
      {
        "dir": "in",
        "other": "A1118",
        "amt": 94604,
        "ch": "NEFT",
        "time": "10:31",
        "branch": "Kolkata",
        "txn_id": "T1136"
      },
      {
        "dir": "in",
        "other": "A1158",
        "amt": 92917,
        "ch": "NEFT",
        "time": "23:00",
        "branch": "Chennai",
        "txn_id": "T505"
      },
      {
        "dir": "in",
        "other": "A1073",
        "amt": 90415,
        "ch": "UPI",
        "time": "23:26",
        "branch": "Mumbai",
        "txn_id": "T898"
      },
      {
        "dir": "in",
        "other": "A1130",
        "amt": 89990,
        "ch": "IMPS",
        "time": "02:11",
        "branch": "Kolkata",
        "txn_id": "T1347"
      },
      {
        "dir": "in",
        "other": "A1146",
        "amt": 85885,
        "ch": "IMPS",
        "time": "18:03",
        "branch": "Bangalore",
        "txn_id": "T342"
      }
    ]
  },
  {
    "id": "A1026",
    "name": "A1026",
    "type": "Freelancer",
    "age": 21,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9488,848",
    "outflow": "\u20b9348,928",
    "connections": 15,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1026",
        "A1118",
        "A1025",
        "A1026"
      ],
      [
        "A1026",
        "A1152",
        "A1129",
        "A1026"
      ],
      [
        "A1026",
        "A1140",
        "A1085",
        "A1026"
      ]
    ],
    "openDate": "2015-08-08",
    "lastTxn": "2017-08-02",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1140",
        "amt": 97294,
        "ch": "UPI",
        "time": "19:03",
        "branch": "Chennai",
        "txn_id": "T447"
      },
      {
        "dir": "out",
        "other": "A1152",
        "amt": 91476,
        "ch": "RTGS",
        "time": "20:06",
        "branch": "Kolkata",
        "txn_id": "T1189"
      },
      {
        "dir": "in",
        "other": "A1123",
        "amt": 88784,
        "ch": "RTGS",
        "time": "10:23",
        "branch": "Mumbai",
        "txn_id": "T977"
      },
      {
        "dir": "in",
        "other": "A1025",
        "amt": 85302,
        "ch": "UPI",
        "time": "18:45",
        "branch": "Chennai",
        "txn_id": "T1357"
      },
      {
        "dir": "in",
        "other": "A1005",
        "amt": 80566,
        "ch": "UPI",
        "time": "11:16",
        "branch": "Mumbai",
        "txn_id": "T1283"
      },
      {
        "dir": "out",
        "other": "A1113",
        "amt": 72852,
        "ch": "IMPS",
        "time": "01:02",
        "branch": "Kolkata",
        "txn_id": "T1728"
      },
      {
        "dir": "in",
        "other": "A1060",
        "amt": 64998,
        "ch": "NEFT",
        "time": "00:51",
        "branch": "Kolkata",
        "txn_id": "T466"
      },
      {
        "dir": "in",
        "other": "A1047",
        "amt": 59824,
        "ch": "RTGS",
        "time": "01:27",
        "branch": "Bangalore",
        "txn_id": "T477"
      }
    ]
  },
  {
    "id": "A1027",
    "name": "A1027",
    "type": "Teacher",
    "age": 35,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b920L",
    "inflow": "\u20b9491,575",
    "outflow": "\u20b9714,078",
    "connections": 20,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1027",
        "A1134",
        "A1027"
      ],
      [
        "A1027",
        "A1111",
        "A1072",
        "A1027"
      ],
      [
        "A1027",
        "A1079",
        "A1044",
        "A1027"
      ]
    ],
    "openDate": "2018-02-13",
    "lastTxn": "2018-09-16",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1029",
        "amt": 95976,
        "ch": "ATM",
        "time": "00:21",
        "branch": "Bangalore",
        "txn_id": "T694"
      },
      {
        "dir": "out",
        "other": "A1046",
        "amt": 84852,
        "ch": "UPI",
        "time": "04:53",
        "branch": "Mumbai",
        "txn_id": "T115"
      },
      {
        "dir": "in",
        "other": "A1070",
        "amt": 84502,
        "ch": "IMPS",
        "time": "01:11",
        "branch": "Kolkata",
        "txn_id": "T259"
      },
      {
        "dir": "in",
        "other": "A1076",
        "amt": 79705,
        "ch": "ATM",
        "time": "03:05",
        "branch": "Mumbai",
        "txn_id": "T894"
      },
      {
        "dir": "in",
        "other": "A1177",
        "amt": 73280,
        "ch": "RTGS",
        "time": "23:34",
        "branch": "Chennai",
        "txn_id": "T175"
      },
      {
        "dir": "out",
        "other": "A1149",
        "amt": 72685,
        "ch": "UPI",
        "time": "18:13",
        "branch": "Kolkata",
        "txn_id": "T1069"
      },
      {
        "dir": "out",
        "other": "A1136",
        "amt": 69988,
        "ch": "IMPS",
        "time": "02:09",
        "branch": "Bangalore",
        "txn_id": "T565"
      },
      {
        "dir": "in",
        "other": "A1044",
        "amt": 64546,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1963"
      }
    ]
  },
  {
    "id": "A1028",
    "name": "A1028",
    "type": "Engineer",
    "age": 54,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9209,266",
    "outflow": "\u20b9644,684",
    "connections": 16,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1028",
        "A1054",
        "A1001",
        "A1028"
      ],
      [
        "A1028",
        "A1122",
        "A1028"
      ],
      [
        "A1028",
        "A1079",
        "A1091",
        "A1028"
      ]
    ],
    "openDate": "2019-08-24",
    "lastTxn": "2021-10-20",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1124",
        "amt": 99153,
        "ch": "RTGS",
        "time": "15:48",
        "branch": "Kolkata",
        "txn_id": "T843"
      },
      {
        "dir": "out",
        "other": "A1079",
        "amt": 86659,
        "ch": "NEFT",
        "time": "23:33",
        "branch": "Delhi",
        "txn_id": "T435"
      },
      {
        "dir": "out",
        "other": "A1122",
        "amt": 82002,
        "ch": "ATM",
        "time": "21:41",
        "branch": "Chennai",
        "txn_id": "T1384"
      },
      {
        "dir": "out",
        "other": "A1112",
        "amt": 65556,
        "ch": "IMPS",
        "time": "20:36",
        "branch": "Delhi",
        "txn_id": "T445"
      },
      {
        "dir": "in",
        "other": "A1036",
        "amt": 63607,
        "ch": "ATM",
        "time": "16:33",
        "branch": "Mumbai",
        "txn_id": "T394"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 55910,
        "ch": "NEFT",
        "time": "05:48",
        "branch": "Bangalore",
        "txn_id": "T457"
      },
      {
        "dir": "out",
        "other": "A1075",
        "amt": 53584,
        "ch": "UPI",
        "time": "00:36",
        "branch": "Bangalore",
        "txn_id": "T263"
      },
      {
        "dir": "in",
        "other": "A1127",
        "amt": 48595,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1989"
      }
    ]
  },
  {
    "id": "A1029",
    "name": "A1029",
    "type": "Business",
    "age": 63,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b91,008,474",
    "outflow": "\u20b9290,537",
    "connections": 21,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1029",
        "A1109",
        "A1011",
        "A1029"
      ],
      [
        "A1029",
        "A1018",
        "A1014",
        "A1029"
      ]
    ],
    "openDate": "2017-08-07",
    "lastTxn": "2019-07-08",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1027",
        "amt": 95976,
        "ch": "ATM",
        "time": "00:21",
        "branch": "Bangalore",
        "txn_id": "T694"
      },
      {
        "dir": "out",
        "other": "A1018",
        "amt": 89579,
        "ch": "UPI",
        "time": "05:10",
        "branch": "Chennai",
        "txn_id": "T1639"
      },
      {
        "dir": "in",
        "other": "A1110",
        "amt": 89138,
        "ch": "NEFT",
        "time": "10:55",
        "branch": "Chennai",
        "txn_id": "T1509"
      },
      {
        "dir": "in",
        "other": "A1014",
        "amt": 88517,
        "ch": "IMPS",
        "time": "16:22",
        "branch": "Delhi",
        "txn_id": "T1864"
      },
      {
        "dir": "out",
        "other": "A1109",
        "amt": 88436,
        "ch": "IMPS",
        "time": "05:16",
        "branch": "Chennai",
        "txn_id": "T1506"
      },
      {
        "dir": "in",
        "other": "A1053",
        "amt": 87692,
        "ch": "NEFT",
        "time": "20:25",
        "branch": "Kolkata",
        "txn_id": "T1199"
      },
      {
        "dir": "in",
        "other": "A1096",
        "amt": 82103,
        "ch": "NEFT",
        "time": "19:30",
        "branch": "Mumbai",
        "txn_id": "T641"
      },
      {
        "dir": "in",
        "other": "A1067",
        "amt": 81577,
        "ch": "RTGS",
        "time": "11:23",
        "branch": "Chennai",
        "txn_id": "T954"
      }
    ]
  },
  {
    "id": "A1030",
    "name": "A1030",
    "type": "Business",
    "age": 27,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9530,918",
    "outflow": "\u20b9208,663",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1030",
        "A1064",
        "A1095",
        "A1030"
      ],
      [
        "A1030",
        "A1123",
        "A1090",
        "A1030"
      ]
    ],
    "openDate": "2021-11-15",
    "lastTxn": "2022-09-14",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1109",
        "amt": 91914,
        "ch": "RTGS",
        "time": "03:18",
        "branch": "Kolkata",
        "txn_id": "T227"
      },
      {
        "dir": "in",
        "other": "A1039",
        "amt": 89211,
        "ch": "NEFT",
        "time": "09:32",
        "branch": "Kolkata",
        "txn_id": "T910"
      },
      {
        "dir": "in",
        "other": "A1161",
        "amt": 85253,
        "ch": "IMPS",
        "time": "13:10",
        "branch": "Bangalore",
        "txn_id": "T1180"
      },
      {
        "dir": "in",
        "other": "A1153",
        "amt": 78579,
        "ch": "UPI",
        "time": "23:51",
        "branch": "Delhi",
        "txn_id": "T1044"
      },
      {
        "dir": "in",
        "other": "A1095",
        "amt": 69347,
        "ch": "NEFT",
        "time": "18:23",
        "branch": "Bangalore",
        "txn_id": "T793"
      },
      {
        "dir": "in",
        "other": "A1182",
        "amt": 57539,
        "ch": "ATM",
        "time": "20:20",
        "branch": "Mumbai",
        "txn_id": "T573"
      },
      {
        "dir": "out",
        "other": "A1109",
        "amt": 54752,
        "ch": "IMPS",
        "time": "18:12",
        "branch": "Mumbai",
        "txn_id": "T648"
      },
      {
        "dir": "in",
        "other": "A1006",
        "amt": 49322,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1972"
      }
    ]
  },
  {
    "id": "A1031",
    "name": "A1031",
    "type": "Student",
    "age": 27,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9671,297",
    "outflow": "\u20b9426,398",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1031",
        "A1042",
        "A1031"
      ],
      [
        "A1031",
        "A1130",
        "A1056",
        "A1031"
      ],
      [
        "A1031",
        "A1019",
        "A1011",
        "A1031"
      ]
    ],
    "openDate": "2020-11-25",
    "lastTxn": "2022-05-22",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1075",
        "amt": 98113,
        "ch": "IMPS",
        "time": "04:08",
        "branch": "Mumbai",
        "txn_id": "T1593"
      },
      {
        "dir": "out",
        "other": "A1019",
        "amt": 95615,
        "ch": "IMPS",
        "time": "11:24",
        "branch": "Delhi",
        "txn_id": "T1174"
      },
      {
        "dir": "in",
        "other": "A1090",
        "amt": 90938,
        "ch": "ATM",
        "time": "17:33",
        "branch": "Mumbai",
        "txn_id": "T1449"
      },
      {
        "dir": "in",
        "other": "A1004",
        "amt": 88689,
        "ch": "RTGS",
        "time": "00:13",
        "branch": "Mumbai",
        "txn_id": "T549"
      },
      {
        "dir": "out",
        "other": "A1061",
        "amt": 88252,
        "ch": "IMPS",
        "time": "08:34",
        "branch": "Mumbai",
        "txn_id": "T1443"
      },
      {
        "dir": "in",
        "other": "A1191",
        "amt": 87455,
        "ch": "NEFT",
        "time": "19:04",
        "branch": "Chennai",
        "txn_id": "T1582"
      },
      {
        "dir": "in",
        "other": "A1056",
        "amt": 78257,
        "ch": "IMPS",
        "time": "06:25",
        "branch": "Delhi",
        "txn_id": "T1100"
      },
      {
        "dir": "out",
        "other": "A1130",
        "amt": 76124,
        "ch": "UPI",
        "time": "02:51",
        "branch": "Chennai",
        "txn_id": "T978"
      }
    ]
  },
  {
    "id": "A1032",
    "name": "A1032",
    "type": "Govt Employee",
    "age": 21,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9390,951",
    "outflow": "\u20b9308,333",
    "connections": 15,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1032",
        "A1081",
        "A1105",
        "A1032"
      ],
      [
        "A1032",
        "A1059",
        "A1061",
        "A1032"
      ],
      [
        "A1032",
        "A1082",
        "A1100",
        "A1032"
      ]
    ],
    "openDate": "2016-09-03",
    "lastTxn": "2017-09-14",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1046",
        "amt": 89757,
        "ch": "IMPS",
        "time": "04:37",
        "branch": "Kolkata",
        "txn_id": "T1797"
      },
      {
        "dir": "in",
        "other": "A1105",
        "amt": 86070,
        "ch": "NEFT",
        "time": "21:41",
        "branch": "Bangalore",
        "txn_id": "T1464"
      },
      {
        "dir": "out",
        "other": "A1059",
        "amt": 79325,
        "ch": "NEFT",
        "time": "14:24",
        "branch": "Bangalore",
        "txn_id": "T388"
      },
      {
        "dir": "out",
        "other": "A1082",
        "amt": 65046,
        "ch": "RTGS",
        "time": "01:35",
        "branch": "Bangalore",
        "txn_id": "T868"
      },
      {
        "dir": "in",
        "other": "A1000",
        "amt": 61347,
        "ch": "RTGS",
        "time": "19:15",
        "branch": "Delhi",
        "txn_id": "T1667"
      },
      {
        "dir": "in",
        "other": "A1137",
        "amt": 52793,
        "ch": "IMPS",
        "time": "21:32",
        "branch": "Mumbai",
        "txn_id": "T235"
      },
      {
        "dir": "in",
        "other": "A1054",
        "amt": 46438,
        "ch": "NEFT",
        "time": "10:36",
        "branch": "Bangalore",
        "txn_id": "T1409"
      },
      {
        "dir": "in",
        "other": "A1006",
        "amt": 44387,
        "ch": "NEFT",
        "time": "08:31",
        "branch": "Bangalore",
        "txn_id": "T976"
      }
    ]
  },
  {
    "id": "A1033",
    "name": "A1033",
    "type": "Student",
    "age": 44,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b91,002,492",
    "outflow": "\u20b9249,718",
    "connections": 23,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1033",
        "A1003",
        "A1173",
        "A1033"
      ],
      [
        "A1033",
        "A1094",
        "A1173",
        "A1033"
      ],
      [
        "A1033",
        "A1088",
        "A1162",
        "A1033"
      ]
    ],
    "openDate": "2024-03-26",
    "lastTxn": "2026-04-02",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1054",
        "amt": 96233,
        "ch": "NEFT",
        "time": "04:50",
        "branch": "Mumbai",
        "txn_id": "T1790"
      },
      {
        "dir": "in",
        "other": "A1171",
        "amt": 90148,
        "ch": "ATM",
        "time": "07:32",
        "branch": "Bangalore",
        "txn_id": "T1463"
      },
      {
        "dir": "in",
        "other": "A1007",
        "amt": 85111,
        "ch": "UPI",
        "time": "11:40",
        "branch": "Delhi",
        "txn_id": "T874"
      },
      {
        "dir": "in",
        "other": "A1071",
        "amt": 79076,
        "ch": "IMPS",
        "time": "07:20",
        "branch": "Kolkata",
        "txn_id": "T333"
      },
      {
        "dir": "out",
        "other": "A1003",
        "amt": 77843,
        "ch": "NEFT",
        "time": "21:36",
        "branch": "Chennai",
        "txn_id": "T1501"
      },
      {
        "dir": "in",
        "other": "A1155",
        "amt": 74734,
        "ch": "ATM",
        "time": "14:08",
        "branch": "Kolkata",
        "txn_id": "T920"
      },
      {
        "dir": "in",
        "other": "A1162",
        "amt": 73583,
        "ch": "NEFT",
        "time": "07:35",
        "branch": "Mumbai",
        "txn_id": "T652"
      },
      {
        "dir": "in",
        "other": "A1138",
        "amt": 72970,
        "ch": "IMPS",
        "time": "21:53",
        "branch": "Mumbai",
        "txn_id": "T1730"
      }
    ]
  },
  {
    "id": "A1034",
    "name": "A1034",
    "type": "Engineer",
    "age": 26,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9339,973",
    "outflow": "\u20b9361,302",
    "connections": 15,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1034",
        "A1012",
        "A1095",
        "A1034"
      ],
      [
        "A1034",
        "A1103",
        "A1095",
        "A1034"
      ]
    ],
    "openDate": "2022-01-24",
    "lastTxn": "2023-10-18",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1056",
        "amt": 82421,
        "ch": "UPI",
        "time": "23:59",
        "branch": "Delhi",
        "txn_id": "T469"
      },
      {
        "dir": "out",
        "other": "A1046",
        "amt": 80778,
        "ch": "NEFT",
        "time": "13:01",
        "branch": "Bangalore",
        "txn_id": "T1865"
      },
      {
        "dir": "in",
        "other": "A1091",
        "amt": 79617,
        "ch": "UPI",
        "time": "09:42",
        "branch": "Kolkata",
        "txn_id": "T171"
      },
      {
        "dir": "out",
        "other": "A1103",
        "amt": 69182,
        "ch": "UPI",
        "time": "19:19",
        "branch": "Chennai",
        "txn_id": "T1625"
      },
      {
        "dir": "in",
        "other": "A1077",
        "amt": 65276,
        "ch": "NEFT",
        "time": "04:55",
        "branch": "Bangalore",
        "txn_id": "T473"
      },
      {
        "dir": "in",
        "other": "A1164",
        "amt": 62945,
        "ch": "ATM",
        "time": "03:03",
        "branch": "Mumbai",
        "txn_id": "T1461"
      },
      {
        "dir": "in",
        "other": "A1064",
        "amt": 60955,
        "ch": "NEFT",
        "time": "22:33",
        "branch": "Mumbai",
        "txn_id": "T455"
      },
      {
        "dir": "out",
        "other": "A1012",
        "amt": 56217,
        "ch": "ATM",
        "time": "11:41",
        "branch": "Delhi",
        "txn_id": "T971"
      }
    ]
  },
  {
    "id": "A1035",
    "name": "A1035",
    "type": "Govt Employee",
    "age": 32,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9355,934",
    "outflow": "\u20b9296,168",
    "connections": 16,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1035",
        "A1074",
        "A1144",
        "A1035"
      ],
      [
        "A1035",
        "A1074",
        "A1038",
        "A1035"
      ],
      [
        "A1035",
        "A1143",
        "A1038",
        "A1035"
      ]
    ],
    "openDate": "2022-03-30",
    "lastTxn": "2022-09-26",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1000",
        "amt": 79255,
        "ch": "UPI",
        "time": "18:50",
        "branch": "Kolkata",
        "txn_id": "T1796"
      },
      {
        "dir": "out",
        "other": "A1091",
        "amt": 78308,
        "ch": "RTGS",
        "time": "02:34",
        "branch": "Bangalore",
        "txn_id": "T1253"
      },
      {
        "dir": "in",
        "other": "A1149",
        "amt": 71805,
        "ch": "IMPS",
        "time": "16:51",
        "branch": "Chennai",
        "txn_id": "T1311"
      },
      {
        "dir": "in",
        "other": "A1055",
        "amt": 69417,
        "ch": "ATM",
        "time": "21:30",
        "branch": "Delhi",
        "txn_id": "T1242"
      },
      {
        "dir": "out",
        "other": "A1148",
        "amt": 67331,
        "ch": "RTGS",
        "time": "07:04",
        "branch": "Bangalore",
        "txn_id": "T203"
      },
      {
        "dir": "in",
        "other": "A1017",
        "amt": 56331,
        "ch": "ATM",
        "time": "08:29",
        "branch": "Delhi",
        "txn_id": "T1083"
      },
      {
        "dir": "in",
        "other": "A1126",
        "amt": 52603,
        "ch": "RTGS",
        "time": "11:29",
        "branch": "Chennai",
        "txn_id": "T387"
      },
      {
        "dir": "out",
        "other": "A1143",
        "amt": 41193,
        "ch": "ATM",
        "time": "21:59",
        "branch": "Chennai",
        "txn_id": "T1351"
      }
    ]
  },
  {
    "id": "A1036",
    "name": "A1036",
    "type": "Engineer",
    "age": 48,
    "risk": "fraud",
    "riskScore": 70,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9498,667",
    "outflow": "\u20b9975,557",
    "connections": 22,
    "dormant": false,
    "structuring": 3,
    "circles": [
      [
        "A1036",
        "A1125",
        "A1036"
      ],
      [
        "A1036",
        "A1074",
        "A1036"
      ],
      [
        "A1036",
        "A1074",
        "A1125",
        "A1036"
      ]
    ],
    "openDate": "2021-09-21",
    "lastTxn": "2022-06-01",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1083",
        "amt": 250843,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1905"
      },
      {
        "dir": "in",
        "other": "A1074",
        "amt": 97848,
        "ch": "IMPS",
        "time": "22:51",
        "branch": "Kolkata",
        "txn_id": "T857"
      },
      {
        "dir": "out",
        "other": "A1120",
        "amt": 79252,
        "ch": "RTGS",
        "time": "05:09",
        "branch": "Mumbai",
        "txn_id": "T1641"
      },
      {
        "dir": "out",
        "other": "A1084",
        "amt": 77815,
        "ch": "IMPS",
        "time": "02:13",
        "branch": "Bangalore",
        "txn_id": "T433"
      },
      {
        "dir": "in",
        "other": "A1024",
        "amt": 77566,
        "ch": "ATM",
        "time": "13:51",
        "branch": "Kolkata",
        "txn_id": "T302"
      },
      {
        "dir": "out",
        "other": "A1015",
        "amt": 77542,
        "ch": "NEFT",
        "time": "07:27",
        "branch": "Chennai",
        "txn_id": "T1282"
      },
      {
        "dir": "out",
        "other": "A1156",
        "amt": 68733,
        "ch": "RTGS",
        "time": "00:21",
        "branch": "Bangalore",
        "txn_id": "T521"
      },
      {
        "dir": "out",
        "other": "A1125",
        "amt": 65214,
        "ch": "IMPS",
        "time": "22:31",
        "branch": "Delhi",
        "txn_id": "T1339"
      }
    ]
  },
  {
    "id": "A1037",
    "name": "A1037",
    "type": "Business",
    "age": 34,
    "risk": "fraud",
    "riskScore": 93,
    "riskLevel": "High",
    "income": "\u20b95L",
    "inflow": "\u20b9343,378",
    "outflow": "\u20b9614,212",
    "connections": 19,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1037",
        "A1113",
        "A1007",
        "A1037"
      ],
      [
        "A1037",
        "A1109",
        "A1011",
        "A1037"
      ],
      [
        "A1037",
        "A1101",
        "A1046",
        "A1037"
      ]
    ],
    "openDate": "2021-06-02",
    "lastTxn": "2021-11-07",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1048",
        "amt": 87210,
        "ch": "ATM",
        "time": "13:56",
        "branch": "Bangalore",
        "txn_id": "T1664"
      },
      {
        "dir": "out",
        "other": "A1188",
        "amt": 81699,
        "ch": "ATM",
        "time": "04:13",
        "branch": "Chennai",
        "txn_id": "T368"
      },
      {
        "dir": "in",
        "other": "A1096",
        "amt": 78237,
        "ch": "NEFT",
        "time": "14:53",
        "branch": "Chennai",
        "txn_id": "T595"
      },
      {
        "dir": "in",
        "other": "A1071",
        "amt": 71231,
        "ch": "NEFT",
        "time": "20:28",
        "branch": "Chennai",
        "txn_id": "T1413"
      },
      {
        "dir": "out",
        "other": "A1120",
        "amt": 64067,
        "ch": "IMPS",
        "time": "02:58",
        "branch": "Kolkata",
        "txn_id": "T1609"
      },
      {
        "dir": "out",
        "other": "A1144",
        "amt": 59173,
        "ch": "ATM",
        "time": "22:42",
        "branch": "Bangalore",
        "txn_id": "T796"
      },
      {
        "dir": "out",
        "other": "A1101",
        "amt": 58056,
        "ch": "UPI",
        "time": "07:39",
        "branch": "Bangalore",
        "txn_id": "T507"
      },
      {
        "dir": "in",
        "other": "A1007",
        "amt": 57151,
        "ch": "RTGS",
        "time": "21:00",
        "branch": "Kolkata",
        "txn_id": "T991"
      }
    ]
  },
  {
    "id": "A1038",
    "name": "A1038",
    "type": "Teacher",
    "age": 38,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b91,003,626",
    "outflow": "\u20b9607,023",
    "connections": 19,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1038",
        "A1035",
        "A1074",
        "A1038"
      ],
      [
        "A1038",
        "A1035",
        "A1143",
        "A1038"
      ],
      [
        "A1038",
        "A1035",
        "A1170",
        "A1038"
      ]
    ],
    "openDate": "2023-07-24",
    "lastTxn": "2025-08-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1124",
        "amt": 360700,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1926"
      },
      {
        "dir": "out",
        "other": "A1084",
        "amt": 357743,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1927"
      },
      {
        "dir": "in",
        "other": "A1046",
        "amt": 98907,
        "ch": "RTGS",
        "time": "15:04",
        "branch": "Chennai",
        "txn_id": "T703"
      },
      {
        "dir": "in",
        "other": "A1016",
        "amt": 79400,
        "ch": "RTGS",
        "time": "15:21",
        "branch": "Bangalore",
        "txn_id": "T1190"
      },
      {
        "dir": "in",
        "other": "A1096",
        "amt": 72185,
        "ch": "IMPS",
        "time": "00:57",
        "branch": "Bangalore",
        "txn_id": "T901"
      },
      {
        "dir": "out",
        "other": "A1148",
        "amt": 70850,
        "ch": "NEFT",
        "time": "14:03",
        "branch": "Kolkata",
        "txn_id": "T1646"
      },
      {
        "dir": "out",
        "other": "A1135",
        "amt": 69111,
        "ch": "ATM",
        "time": "13:37",
        "branch": "Bangalore",
        "txn_id": "T975"
      },
      {
        "dir": "in",
        "other": "A1054",
        "amt": 68734,
        "ch": "NEFT",
        "time": "14:57",
        "branch": "Chennai",
        "txn_id": "T1900"
      }
    ]
  },
  {
    "id": "A1039",
    "name": "A1039",
    "type": "Business",
    "age": 40,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9165,053",
    "outflow": "\u20b9499,386",
    "connections": 13,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1039",
        "A1127",
        "A1135",
        "A1039"
      ],
      [
        "A1039",
        "A1008",
        "A1039"
      ],
      [
        "A1039",
        "A1008",
        "A1085",
        "A1039"
      ]
    ],
    "openDate": "2018-07-15",
    "lastTxn": "2018-09-21",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1063",
        "amt": 99578,
        "ch": "IMPS",
        "time": "07:12",
        "branch": "Bangalore",
        "txn_id": "T537"
      },
      {
        "dir": "out",
        "other": "A1008",
        "amt": 97043,
        "ch": "ATM",
        "time": "22:18",
        "branch": "Kolkata",
        "txn_id": "T853"
      },
      {
        "dir": "out",
        "other": "A1030",
        "amt": 89211,
        "ch": "NEFT",
        "time": "09:32",
        "branch": "Kolkata",
        "txn_id": "T910"
      },
      {
        "dir": "out",
        "other": "A1127",
        "amt": 78115,
        "ch": "IMPS",
        "time": "07:57",
        "branch": "Delhi",
        "txn_id": "T1010"
      },
      {
        "dir": "in",
        "other": "A1173",
        "amt": 61374,
        "ch": "UPI",
        "time": "14:31",
        "branch": "Bangalore",
        "txn_id": "T348"
      },
      {
        "dir": "in",
        "other": "A1021",
        "amt": 49330,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1994"
      },
      {
        "dir": "out",
        "other": "A1097",
        "amt": 45280,
        "ch": "RTGS",
        "time": "15:26",
        "branch": "Mumbai",
        "txn_id": "T1699"
      },
      {
        "dir": "out",
        "other": "A1187",
        "amt": 41551,
        "ch": "UPI",
        "time": "19:57",
        "branch": "Kolkata",
        "txn_id": "T1265"
      }
    ]
  },
  {
    "id": "A1040",
    "name": "A1040",
    "type": "Business",
    "age": 46,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9595,472",
    "outflow": "\u20b9431,727",
    "connections": 16,
    "dormant": false,
    "structuring": 4,
    "circles": [
      [
        "A1040",
        "A1157",
        "A1040"
      ],
      [
        "A1040",
        "A1157",
        "A1116",
        "A1040"
      ],
      [
        "A1040",
        "A1095",
        "A1116",
        "A1040"
      ]
    ],
    "openDate": "2015-10-30",
    "lastTxn": "2018-03-02",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1020",
        "amt": 94234,
        "ch": "UPI",
        "time": "11:53",
        "branch": "Chennai",
        "txn_id": "T410"
      },
      {
        "dir": "in",
        "other": "A1190",
        "amt": 94155,
        "ch": "IMPS",
        "time": "02:35",
        "branch": "Kolkata",
        "txn_id": "T210"
      },
      {
        "dir": "in",
        "other": "A1133",
        "amt": 89180,
        "ch": "IMPS",
        "time": "13:34",
        "branch": "Kolkata",
        "txn_id": "T1645"
      },
      {
        "dir": "out",
        "other": "A1177",
        "amt": 88478,
        "ch": "ATM",
        "time": "09:15",
        "branch": "Mumbai",
        "txn_id": "T222"
      },
      {
        "dir": "in",
        "other": "A1110",
        "amt": 79086,
        "ch": "NEFT",
        "time": "23:37",
        "branch": "Bangalore",
        "txn_id": "T904"
      },
      {
        "dir": "in",
        "other": "A1187",
        "amt": 66225,
        "ch": "RTGS",
        "time": "02:03",
        "branch": "Chennai",
        "txn_id": "T1589"
      },
      {
        "dir": "in",
        "other": "A1065",
        "amt": 59526,
        "ch": "ATM",
        "time": "16:59",
        "branch": "Delhi",
        "txn_id": "T823"
      },
      {
        "dir": "in",
        "other": "A1116",
        "amt": 56338,
        "ch": "ATM",
        "time": "17:19",
        "branch": "Kolkata",
        "txn_id": "T450"
      }
    ]
  },
  {
    "id": "A1041",
    "name": "A1041",
    "type": "Freelancer",
    "age": 49,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b91,411,841",
    "outflow": "\u20b9247,196",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1041",
        "A1088",
        "A1135",
        "A1041"
      ],
      [
        "A1041",
        "A1188",
        "A1140",
        "A1041"
      ]
    ],
    "openDate": "2022-04-21",
    "lastTxn": "2024-12-30",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1166",
        "amt": 687486,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2025"
      },
      {
        "dir": "in",
        "other": "A1176",
        "amt": 278529,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1932"
      },
      {
        "dir": "out",
        "other": "A1188",
        "amt": 98746,
        "ch": "IMPS",
        "time": "00:39",
        "branch": "Bangalore",
        "txn_id": "T1748"
      },
      {
        "dir": "in",
        "other": "A1089",
        "amt": 79933,
        "ch": "IMPS",
        "time": "07:32",
        "branch": "Kolkata",
        "txn_id": "T772"
      },
      {
        "dir": "out",
        "other": "A1086",
        "amt": 77672,
        "ch": "UPI",
        "time": "02:45",
        "branch": "Mumbai",
        "txn_id": "T322"
      },
      {
        "dir": "in",
        "other": "A1117",
        "amt": 55787,
        "ch": "NEFT",
        "time": "19:19",
        "branch": "Delhi",
        "txn_id": "T1631"
      },
      {
        "dir": "in",
        "other": "A1167",
        "amt": 48704,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1984"
      },
      {
        "dir": "in",
        "other": "A1047",
        "amt": 48528,
        "ch": "NEFT",
        "time": "22:22",
        "branch": "Kolkata",
        "txn_id": "T314"
      }
    ]
  },
  {
    "id": "A1042",
    "name": "A1042",
    "type": "Engineer",
    "age": 41,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9519,562",
    "outflow": "\u20b9220,922",
    "connections": 14,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1042",
        "A1074",
        "A1021",
        "A1042"
      ],
      [
        "A1042",
        "A1031",
        "A1042"
      ]
    ],
    "openDate": "2018-06-16",
    "lastTxn": "2020-12-14",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1197",
        "amt": 98118,
        "ch": "UPI",
        "time": "12:11",
        "branch": "Bangalore",
        "txn_id": "T1383"
      },
      {
        "dir": "in",
        "other": "A1128",
        "amt": 88166,
        "ch": "IMPS",
        "time": "00:56",
        "branch": "Kolkata",
        "txn_id": "T1814"
      },
      {
        "dir": "out",
        "other": "A1129",
        "amt": 69580,
        "ch": "UPI",
        "time": "03:50",
        "branch": "Kolkata",
        "txn_id": "T764"
      },
      {
        "dir": "in",
        "other": "A1184",
        "amt": 67494,
        "ch": "RTGS",
        "time": "18:31",
        "branch": "Mumbai",
        "txn_id": "T1035"
      },
      {
        "dir": "in",
        "other": "A1021",
        "amt": 59576,
        "ch": "RTGS",
        "time": "11:27",
        "branch": "Bangalore",
        "txn_id": "T1274"
      },
      {
        "dir": "in",
        "other": "A1160",
        "amt": 57336,
        "ch": "RTGS",
        "time": "07:22",
        "branch": "Kolkata",
        "txn_id": "T219"
      },
      {
        "dir": "in",
        "other": "A1098",
        "amt": 51487,
        "ch": "NEFT",
        "time": "14:39",
        "branch": "Kolkata",
        "txn_id": "T1212"
      },
      {
        "dir": "in",
        "other": "A1097",
        "amt": 44726,
        "ch": "UPI",
        "time": "00:18",
        "branch": "Delhi",
        "txn_id": "T349"
      }
    ]
  },
  {
    "id": "A1043",
    "name": "A1043",
    "type": "Business",
    "age": 43,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b915L",
    "inflow": "\u20b91,095,032",
    "outflow": "\u20b9199,720",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1043",
        "A1050",
        "A1130",
        "A1043"
      ]
    ],
    "openDate": "2020-05-25",
    "lastTxn": "2020-09-04",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1025",
        "amt": 860304,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2026"
      },
      {
        "dir": "in",
        "other": "A1130",
        "amt": 79625,
        "ch": "RTGS",
        "time": "20:20",
        "branch": "Kolkata",
        "txn_id": "T1085"
      },
      {
        "dir": "out",
        "other": "A1044",
        "amt": 71316,
        "ch": "NEFT",
        "time": "12:21",
        "branch": "Mumbai",
        "txn_id": "T1884"
      },
      {
        "dir": "in",
        "other": "A1176",
        "amt": 66304,
        "ch": "ATM",
        "time": "10:40",
        "branch": "Delhi",
        "txn_id": "T144"
      },
      {
        "dir": "in",
        "other": "A1067",
        "amt": 49281,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T2002"
      },
      {
        "dir": "out",
        "other": "A1006",
        "amt": 44571,
        "ch": "ATM",
        "time": "22:23",
        "branch": "Delhi",
        "txn_id": "T464"
      },
      {
        "dir": "out",
        "other": "A1060",
        "amt": 28048,
        "ch": "ATM",
        "time": "19:25",
        "branch": "Kolkata",
        "txn_id": "T837"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 27649,
        "ch": "ATM",
        "time": "16:42",
        "branch": "Chennai",
        "txn_id": "T604"
      }
    ]
  },
  {
    "id": "A1044",
    "name": "A1044",
    "type": "Freelancer",
    "age": 31,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9518,456",
    "outflow": "\u20b9208,254",
    "connections": 16,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1044",
        "A1027",
        "A1079",
        "A1044"
      ],
      [
        "A1044",
        "A1143",
        "A1156",
        "A1044"
      ]
    ],
    "openDate": "2019-07-22",
    "lastTxn": "2019-08-25",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1052",
        "amt": 89384,
        "ch": "IMPS",
        "time": "09:19",
        "branch": "Kolkata",
        "txn_id": "T569"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 83019,
        "ch": "UPI",
        "time": "12:40",
        "branch": "Mumbai",
        "txn_id": "T179"
      },
      {
        "dir": "in",
        "other": "A1043",
        "amt": 71316,
        "ch": "NEFT",
        "time": "12:21",
        "branch": "Mumbai",
        "txn_id": "T1884"
      },
      {
        "dir": "in",
        "other": "A1079",
        "amt": 64546,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1962"
      },
      {
        "dir": "out",
        "other": "A1027",
        "amt": 64546,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1963"
      },
      {
        "dir": "in",
        "other": "A1060",
        "amt": 62376,
        "ch": "IMPS",
        "time": "04:54",
        "branch": "Bangalore",
        "txn_id": "T177"
      },
      {
        "dir": "in",
        "other": "A1066",
        "amt": 52854,
        "ch": "ATM",
        "time": "11:29",
        "branch": "Delhi",
        "txn_id": "T261"
      },
      {
        "dir": "in",
        "other": "A1169",
        "amt": 47865,
        "ch": "RTGS",
        "time": "15:15",
        "branch": "Kolkata",
        "txn_id": "T373"
      }
    ]
  },
  {
    "id": "A1045",
    "name": "A1045",
    "type": "Govt Employee",
    "age": 32,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9624,352",
    "outflow": "\u20b9610,050",
    "connections": 18,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1045",
        "A1165",
        "A1045"
      ],
      [
        "A1045",
        "A1165",
        "A1134",
        "A1045"
      ],
      [
        "A1045",
        "A1011",
        "A1155",
        "A1045"
      ]
    ],
    "openDate": "2022-03-17",
    "lastTxn": "2022-05-28",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1181",
        "amt": 93555,
        "ch": "NEFT",
        "time": "13:35",
        "branch": "Chennai",
        "txn_id": "T1565"
      },
      {
        "dir": "in",
        "other": "A1165",
        "amt": 93002,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1945"
      },
      {
        "dir": "out",
        "other": "A1102",
        "amt": 93002,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1946"
      },
      {
        "dir": "in",
        "other": "A1047",
        "amt": 88384,
        "ch": "RTGS",
        "time": "04:05",
        "branch": "Bangalore",
        "txn_id": "T967"
      },
      {
        "dir": "out",
        "other": "A1176",
        "amt": 88207,
        "ch": "ATM",
        "time": "03:27",
        "branch": "Chennai",
        "txn_id": "T722"
      },
      {
        "dir": "in",
        "other": "A1147",
        "amt": 88137,
        "ch": "UPI",
        "time": "07:05",
        "branch": "Delhi",
        "txn_id": "T1584"
      },
      {
        "dir": "in",
        "other": "A1155",
        "amt": 81078,
        "ch": "UPI",
        "time": "14:30",
        "branch": "Bangalore",
        "txn_id": "T1544"
      },
      {
        "dir": "in",
        "other": "A1007",
        "amt": 76160,
        "ch": "RTGS",
        "time": "05:40",
        "branch": "Bangalore",
        "txn_id": "T1763"
      }
    ]
  },
  {
    "id": "A1046",
    "name": "A1046",
    "type": "Doctor",
    "age": 41,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9793,083",
    "outflow": "\u20b9519,238",
    "connections": 17,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1046",
        "A1037",
        "A1101",
        "A1046"
      ],
      [
        "A1046",
        "A1037",
        "A1122",
        "A1046"
      ],
      [
        "A1046",
        "A1036",
        "A1074",
        "A1046"
      ]
    ],
    "openDate": "2016-12-11",
    "lastTxn": "2018-12-11",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1038",
        "amt": 98907,
        "ch": "RTGS",
        "time": "15:04",
        "branch": "Chennai",
        "txn_id": "T703"
      },
      {
        "dir": "out",
        "other": "A1181",
        "amt": 96685,
        "ch": "UPI",
        "time": "00:56",
        "branch": "Delhi",
        "txn_id": "T1585"
      },
      {
        "dir": "in",
        "other": "A1105",
        "amt": 90647,
        "ch": "RTGS",
        "time": "17:36",
        "branch": "Chennai",
        "txn_id": "T1437"
      },
      {
        "dir": "in",
        "other": "A1032",
        "amt": 89757,
        "ch": "IMPS",
        "time": "04:37",
        "branch": "Kolkata",
        "txn_id": "T1797"
      },
      {
        "dir": "in",
        "other": "A1166",
        "amt": 86065,
        "ch": "RTGS",
        "time": "20:30",
        "branch": "Mumbai",
        "txn_id": "T1455"
      },
      {
        "dir": "in",
        "other": "A1027",
        "amt": 84852,
        "ch": "UPI",
        "time": "04:53",
        "branch": "Mumbai",
        "txn_id": "T115"
      },
      {
        "dir": "in",
        "other": "A1000",
        "amt": 83203,
        "ch": "NEFT",
        "time": "02:51",
        "branch": "Mumbai",
        "txn_id": "T1303"
      },
      {
        "dir": "in",
        "other": "A1034",
        "amt": 80778,
        "ch": "NEFT",
        "time": "13:01",
        "branch": "Bangalore",
        "txn_id": "T1865"
      }
    ]
  },
  {
    "id": "A1047",
    "name": "A1047",
    "type": "Student",
    "age": 40,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9233,878",
    "outflow": "\u20b9914,893",
    "connections": 24,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1047",
        "A1045",
        "A1174",
        "A1047"
      ],
      [
        "A1047",
        "A1126",
        "A1059",
        "A1047"
      ],
      [
        "A1047",
        "A1133",
        "A1180",
        "A1047"
      ]
    ],
    "openDate": "2015-06-17",
    "lastTxn": "2015-07-28",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1127",
        "amt": 92063,
        "ch": "ATM",
        "time": "16:27",
        "branch": "Mumbai",
        "txn_id": "T870"
      },
      {
        "dir": "out",
        "other": "A1005",
        "amt": 91136,
        "ch": "RTGS",
        "time": "12:38",
        "branch": "Bangalore",
        "txn_id": "T1828"
      },
      {
        "dir": "out",
        "other": "A1045",
        "amt": 88384,
        "ch": "RTGS",
        "time": "04:05",
        "branch": "Bangalore",
        "txn_id": "T967"
      },
      {
        "dir": "out",
        "other": "A1126",
        "amt": 88057,
        "ch": "ATM",
        "time": "12:45",
        "branch": "Delhi",
        "txn_id": "T1404"
      },
      {
        "dir": "in",
        "other": "A1174",
        "amt": 86628,
        "ch": "RTGS",
        "time": "03:30",
        "branch": "Chennai",
        "txn_id": "T1375"
      },
      {
        "dir": "out",
        "other": "A1155",
        "amt": 65490,
        "ch": "IMPS",
        "time": "17:26",
        "branch": "Kolkata",
        "txn_id": "T1072"
      },
      {
        "dir": "out",
        "other": "A1158",
        "amt": 62881,
        "ch": "UPI",
        "time": "11:50",
        "branch": "Delhi",
        "txn_id": "T1781"
      },
      {
        "dir": "out",
        "other": "A1026",
        "amt": 59824,
        "ch": "RTGS",
        "time": "01:27",
        "branch": "Bangalore",
        "txn_id": "T477"
      }
    ]
  },
  {
    "id": "A1048",
    "name": "A1048",
    "type": "Student",
    "age": 46,
    "risk": "fraud",
    "riskScore": 70,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9682,680",
    "outflow": "\u20b9281,404",
    "connections": 17,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1048",
        "A1003",
        "A1048"
      ],
      [
        "A1048",
        "A1003",
        "A1173",
        "A1048"
      ],
      [
        "A1048",
        "A1003",
        "A1025",
        "A1048"
      ]
    ],
    "openDate": "2022-02-16",
    "lastTxn": "2024-03-27",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1037",
        "amt": 87210,
        "ch": "ATM",
        "time": "13:56",
        "branch": "Bangalore",
        "txn_id": "T1664"
      },
      {
        "dir": "out",
        "other": "A1122",
        "amt": 85000,
        "ch": "RTGS",
        "time": "10:56",
        "branch": "Kolkata",
        "txn_id": "T1227"
      },
      {
        "dir": "out",
        "other": "A1179",
        "amt": 74439,
        "ch": "UPI",
        "time": "11:09",
        "branch": "Mumbai",
        "txn_id": "T1538"
      },
      {
        "dir": "in",
        "other": "A1152",
        "amt": 67249,
        "ch": "IMPS",
        "time": "05:18",
        "branch": "Mumbai",
        "txn_id": "T284"
      },
      {
        "dir": "in",
        "other": "A1173",
        "amt": 65472,
        "ch": "RTGS",
        "time": "09:10",
        "branch": "Mumbai",
        "txn_id": "T1881"
      },
      {
        "dir": "in",
        "other": "A1157",
        "amt": 59068,
        "ch": "ATM",
        "time": "20:40",
        "branch": "Bangalore",
        "txn_id": "T1065"
      },
      {
        "dir": "in",
        "other": "A1056",
        "amt": 56061,
        "ch": "NEFT",
        "time": "10:29",
        "branch": "Delhi",
        "txn_id": "T307"
      },
      {
        "dir": "in",
        "other": "A1163",
        "amt": 55405,
        "ch": "NEFT",
        "time": "14:20",
        "branch": "Bangalore",
        "txn_id": "T830"
      }
    ]
  },
  {
    "id": "A1049",
    "name": "A1049",
    "type": "Teacher",
    "age": 23,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9588,194",
    "outflow": "\u20b9701,481",
    "connections": 21,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1049",
        "A1081",
        "A1154",
        "A1049"
      ],
      [
        "A1049",
        "A1165",
        "A1191",
        "A1049"
      ],
      [
        "A1049",
        "A1085",
        "A1199",
        "A1049"
      ]
    ],
    "openDate": "2022-11-09",
    "lastTxn": "2025-05-05",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1081",
        "amt": 108907,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1953"
      },
      {
        "dir": "in",
        "other": "A1154",
        "amt": 108907,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1955"
      },
      {
        "dir": "out",
        "other": "A1128",
        "amt": 94844,
        "ch": "RTGS",
        "time": "17:27",
        "branch": "Mumbai",
        "txn_id": "T1640"
      },
      {
        "dir": "out",
        "other": "A1016",
        "amt": 93105,
        "ch": "UPI",
        "time": "04:59",
        "branch": "Kolkata",
        "txn_id": "T511"
      },
      {
        "dir": "out",
        "other": "A1165",
        "amt": 83200,
        "ch": "UPI",
        "time": "22:40",
        "branch": "Chennai",
        "txn_id": "T1519"
      },
      {
        "dir": "in",
        "other": "A1120",
        "amt": 79109,
        "ch": "RTGS",
        "time": "22:34",
        "branch": "Bangalore",
        "txn_id": "T1288"
      },
      {
        "dir": "out",
        "other": "A1156",
        "amt": 78012,
        "ch": "NEFT",
        "time": "00:57",
        "branch": "Chennai",
        "txn_id": "T299"
      },
      {
        "dir": "in",
        "other": "A1000",
        "amt": 76144,
        "ch": "UPI",
        "time": "14:58",
        "branch": "Kolkata",
        "txn_id": "T1415"
      }
    ]
  },
  {
    "id": "A1050",
    "name": "A1050",
    "type": "Govt Employee",
    "age": 31,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9716,272",
    "outflow": "\u20b9807,952",
    "connections": 26,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1050",
        "A1130",
        "A1024",
        "A1050"
      ],
      [
        "A1050",
        "A1130",
        "A1043",
        "A1050"
      ],
      [
        "A1050",
        "A1003",
        "A1050"
      ]
    ],
    "openDate": "2018-08-30",
    "lastTxn": "2019-04-29",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1054",
        "amt": 99419,
        "ch": "IMPS",
        "time": "12:25",
        "branch": "Bangalore",
        "txn_id": "T420"
      },
      {
        "dir": "in",
        "other": "A1007",
        "amt": 94349,
        "ch": "RTGS",
        "time": "15:26",
        "branch": "Chennai",
        "txn_id": "T682"
      },
      {
        "dir": "in",
        "other": "A1136",
        "amt": 93197,
        "ch": "UPI",
        "time": "18:20",
        "branch": "Mumbai",
        "txn_id": "T1666"
      },
      {
        "dir": "out",
        "other": "A1192",
        "amt": 87403,
        "ch": "RTGS",
        "time": "00:05",
        "branch": "Bangalore",
        "txn_id": "T1296"
      },
      {
        "dir": "in",
        "other": "A1110",
        "amt": 87292,
        "ch": "RTGS",
        "time": "14:33",
        "branch": "Bangalore",
        "txn_id": "T1482"
      },
      {
        "dir": "out",
        "other": "A1066",
        "amt": 82867,
        "ch": "RTGS",
        "time": "04:49",
        "branch": "Mumbai",
        "txn_id": "T708"
      },
      {
        "dir": "out",
        "other": "A1000",
        "amt": 81975,
        "ch": "IMPS",
        "time": "02:41",
        "branch": "Mumbai",
        "txn_id": "T675"
      },
      {
        "dir": "out",
        "other": "A1064",
        "amt": 79444,
        "ch": "UPI",
        "time": "05:07",
        "branch": "Mumbai",
        "txn_id": "T685"
      }
    ]
  },
  {
    "id": "A1051",
    "name": "A1051",
    "type": "Govt Employee",
    "age": 37,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9867,169",
    "outflow": "\u20b9363,478",
    "connections": 23,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1051",
        "A1070",
        "A1125",
        "A1051"
      ],
      [
        "A1051",
        "A1070",
        "A1169",
        "A1051"
      ],
      [
        "A1051",
        "A1161",
        "A1114",
        "A1051"
      ]
    ],
    "openDate": "2015-01-23",
    "lastTxn": "2015-05-03",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1103",
        "amt": 96202,
        "ch": "ATM",
        "time": "03:13",
        "branch": "Mumbai",
        "txn_id": "T811"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 93536,
        "ch": "NEFT",
        "time": "21:32",
        "branch": "Bangalore",
        "txn_id": "T732"
      },
      {
        "dir": "in",
        "other": "A1123",
        "amt": 89114,
        "ch": "UPI",
        "time": "18:39",
        "branch": "Mumbai",
        "txn_id": "T168"
      },
      {
        "dir": "in",
        "other": "A1097",
        "amt": 88122,
        "ch": "IMPS",
        "time": "18:51",
        "branch": "Bangalore",
        "txn_id": "T140"
      },
      {
        "dir": "in",
        "other": "A1077",
        "amt": 82401,
        "ch": "ATM",
        "time": "22:13",
        "branch": "Chennai",
        "txn_id": "T252"
      },
      {
        "dir": "in",
        "other": "A1135",
        "amt": 79327,
        "ch": "UPI",
        "time": "09:59",
        "branch": "Delhi",
        "txn_id": "T128"
      },
      {
        "dir": "in",
        "other": "A1080",
        "amt": 67797,
        "ch": "UPI",
        "time": "01:47",
        "branch": "Bangalore",
        "txn_id": "T1692"
      },
      {
        "dir": "in",
        "other": "A1169",
        "amt": 67779,
        "ch": "ATM",
        "time": "14:40",
        "branch": "Delhi",
        "txn_id": "T484"
      }
    ]
  },
  {
    "id": "A1052",
    "name": "A1052",
    "type": "Student",
    "age": 64,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9389,879",
    "outflow": "\u20b9361,975",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1052",
        "A1088",
        "A1052"
      ],
      [
        "A1052",
        "A1088",
        "A1072",
        "A1052"
      ],
      [
        "A1052",
        "A1088",
        "A1137",
        "A1052"
      ]
    ],
    "openDate": "2018-12-06",
    "lastTxn": "2020-07-23",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1145",
        "amt": 99672,
        "ch": "NEFT",
        "time": "23:48",
        "branch": "Bangalore",
        "txn_id": "T267"
      },
      {
        "dir": "out",
        "other": "A1093",
        "amt": 92357,
        "ch": "UPI",
        "time": "12:50",
        "branch": "Bangalore",
        "txn_id": "T1839"
      },
      {
        "dir": "out",
        "other": "A1044",
        "amt": 89384,
        "ch": "IMPS",
        "time": "09:19",
        "branch": "Kolkata",
        "txn_id": "T569"
      },
      {
        "dir": "out",
        "other": "A1088",
        "amt": 72471,
        "ch": "ATM",
        "time": "16:50",
        "branch": "Delhi",
        "txn_id": "T135"
      },
      {
        "dir": "out",
        "other": "A1031",
        "amt": 71535,
        "ch": "ATM",
        "time": "19:47",
        "branch": "Bangalore",
        "txn_id": "T335"
      },
      {
        "dir": "in",
        "other": "A1064",
        "amt": 69182,
        "ch": "ATM",
        "time": "23:55",
        "branch": "Mumbai",
        "txn_id": "T810"
      },
      {
        "dir": "in",
        "other": "A1059",
        "amt": 65658,
        "ch": "NEFT",
        "time": "17:49",
        "branch": "Mumbai",
        "txn_id": "T937"
      },
      {
        "dir": "in",
        "other": "A1137",
        "amt": 55722,
        "ch": "RTGS",
        "time": "18:25",
        "branch": "Delhi",
        "txn_id": "T807"
      }
    ]
  },
  {
    "id": "A1053",
    "name": "A1053",
    "type": "Govt Employee",
    "age": 21,
    "risk": "fraud",
    "riskScore": 78,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9431,498",
    "outflow": "\u20b9662,143",
    "connections": 20,
    "dormant": false,
    "structuring": 3,
    "circles": [
      [
        "A1053",
        "A1072",
        "A1141",
        "A1053"
      ],
      [
        "A1053",
        "A1067",
        "A1141",
        "A1053"
      ],
      [
        "A1053",
        "A1141",
        "A1053"
      ]
    ],
    "openDate": "2020-10-31",
    "lastTxn": "2023-02-01",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1100",
        "amt": 145490,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1956"
      },
      {
        "dir": "in",
        "other": "A1186",
        "amt": 145490,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1958"
      },
      {
        "dir": "out",
        "other": "A1000",
        "amt": 96344,
        "ch": "UPI",
        "time": "10:36",
        "branch": "Delhi",
        "txn_id": "T419"
      },
      {
        "dir": "in",
        "other": "A1017",
        "amt": 96026,
        "ch": "RTGS",
        "time": "19:35",
        "branch": "Mumbai",
        "txn_id": "T1465"
      },
      {
        "dir": "out",
        "other": "A1029",
        "amt": 87692,
        "ch": "NEFT",
        "time": "20:25",
        "branch": "Kolkata",
        "txn_id": "T1199"
      },
      {
        "dir": "in",
        "other": "A1005",
        "amt": 69624,
        "ch": "ATM",
        "time": "20:35",
        "branch": "Bangalore",
        "txn_id": "T1572"
      },
      {
        "dir": "in",
        "other": "A1136",
        "amt": 68023,
        "ch": "UPI",
        "time": "03:47",
        "branch": "Mumbai",
        "txn_id": "T1567"
      },
      {
        "dir": "out",
        "other": "A1151",
        "amt": 57509,
        "ch": "ATM",
        "time": "12:49",
        "branch": "Mumbai",
        "txn_id": "T221"
      }
    ]
  },
  {
    "id": "A1054",
    "name": "A1054",
    "type": "Business",
    "age": 45,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9375,300",
    "outflow": "\u20b9722,609",
    "connections": 19,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1054",
        "A1088",
        "A1051",
        "A1054"
      ],
      [
        "A1054",
        "A1001",
        "A1028",
        "A1054"
      ],
      [
        "A1054",
        "A1001",
        "A1170",
        "A1054"
      ]
    ],
    "openDate": "2019-08-28",
    "lastTxn": "2020-06-02",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1170",
        "amt": 99725,
        "ch": "NEFT",
        "time": "11:08",
        "branch": "Bangalore",
        "txn_id": "T195"
      },
      {
        "dir": "out",
        "other": "A1050",
        "amt": 99419,
        "ch": "IMPS",
        "time": "12:25",
        "branch": "Bangalore",
        "txn_id": "T420"
      },
      {
        "dir": "out",
        "other": "A1033",
        "amt": 96233,
        "ch": "NEFT",
        "time": "04:50",
        "branch": "Mumbai",
        "txn_id": "T1790"
      },
      {
        "dir": "out",
        "other": "A1088",
        "amt": 96115,
        "ch": "UPI",
        "time": "22:59",
        "branch": "Mumbai",
        "txn_id": "T1103"
      },
      {
        "dir": "out",
        "other": "A1001",
        "amt": 90248,
        "ch": "IMPS",
        "time": "09:33",
        "branch": "Bangalore",
        "txn_id": "T1561"
      },
      {
        "dir": "out",
        "other": "A1009",
        "amt": 75747,
        "ch": "IMPS",
        "time": "22:47",
        "branch": "Delhi",
        "txn_id": "T1579"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 69344,
        "ch": "ATM",
        "time": "22:15",
        "branch": "Kolkata",
        "txn_id": "T670"
      },
      {
        "dir": "out",
        "other": "A1038",
        "amt": 68734,
        "ch": "NEFT",
        "time": "14:57",
        "branch": "Chennai",
        "txn_id": "T1900"
      }
    ]
  },
  {
    "id": "A1055",
    "name": "A1055",
    "type": "Student",
    "age": 23,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9373,885",
    "outflow": "\u20b9774,109",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1055",
        "A1172",
        "A1112",
        "A1055"
      ],
      [
        "A1055",
        "A1172",
        "A1166",
        "A1055"
      ],
      [
        "A1055",
        "A1181",
        "A1166",
        "A1055"
      ]
    ],
    "openDate": "2023-11-18",
    "lastTxn": "2024-12-21",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1184",
        "amt": 99348,
        "ch": "RTGS",
        "time": "20:36",
        "branch": "Delhi",
        "txn_id": "T940"
      },
      {
        "dir": "in",
        "other": "A1112",
        "amt": 94621,
        "ch": "IMPS",
        "time": "11:44",
        "branch": "Kolkata",
        "txn_id": "T1453"
      },
      {
        "dir": "in",
        "other": "A1166",
        "amt": 92510,
        "ch": "RTGS",
        "time": "08:31",
        "branch": "Bangalore",
        "txn_id": "T947"
      },
      {
        "dir": "out",
        "other": "A1160",
        "amt": 89808,
        "ch": "UPI",
        "time": "12:51",
        "branch": "Bangalore",
        "txn_id": "T1562"
      },
      {
        "dir": "out",
        "other": "A1167",
        "amt": 88244,
        "ch": "UPI",
        "time": "15:36",
        "branch": "Chennai",
        "txn_id": "T1429"
      },
      {
        "dir": "in",
        "other": "A1124",
        "amt": 81522,
        "ch": "RTGS",
        "time": "08:09",
        "branch": "Delhi",
        "txn_id": "T454"
      },
      {
        "dir": "out",
        "other": "A1176",
        "amt": 80792,
        "ch": "IMPS",
        "time": "17:12",
        "branch": "Delhi",
        "txn_id": "T133"
      },
      {
        "dir": "out",
        "other": "A1046",
        "amt": 75980,
        "ch": "RTGS",
        "time": "14:09",
        "branch": "Delhi",
        "txn_id": "T1732"
      }
    ]
  },
  {
    "id": "A1056",
    "name": "A1056",
    "type": "Govt Employee",
    "age": 59,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9598,274",
    "outflow": "\u20b9767,843",
    "connections": 27,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1056",
        "A1105",
        "A1056"
      ],
      [
        "A1056",
        "A1105",
        "A1130",
        "A1056"
      ],
      [
        "A1056",
        "A1120",
        "A1049",
        "A1056"
      ]
    ],
    "openDate": "2021-12-13",
    "lastTxn": "2022-11-13",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1123",
        "amt": 92583,
        "ch": "ATM",
        "time": "07:17",
        "branch": "Bangalore",
        "txn_id": "T503"
      },
      {
        "dir": "out",
        "other": "A1105",
        "amt": 83806,
        "ch": "IMPS",
        "time": "19:56",
        "branch": "Bangalore",
        "txn_id": "T1406"
      },
      {
        "dir": "in",
        "other": "A1034",
        "amt": 82421,
        "ch": "UPI",
        "time": "23:59",
        "branch": "Delhi",
        "txn_id": "T469"
      },
      {
        "dir": "out",
        "other": "A1123",
        "amt": 80271,
        "ch": "UPI",
        "time": "03:56",
        "branch": "Chennai",
        "txn_id": "T775"
      },
      {
        "dir": "in",
        "other": "A1198",
        "amt": 79920,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1966"
      },
      {
        "dir": "out",
        "other": "A1122",
        "amt": 79920,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1967"
      },
      {
        "dir": "out",
        "other": "A1031",
        "amt": 78257,
        "ch": "IMPS",
        "time": "06:25",
        "branch": "Delhi",
        "txn_id": "T1100"
      },
      {
        "dir": "out",
        "other": "A1019",
        "amt": 76129,
        "ch": "UPI",
        "time": "22:34",
        "branch": "Mumbai",
        "txn_id": "T892"
      }
    ]
  },
  {
    "id": "A1057",
    "name": "A1057",
    "type": "Business",
    "age": 28,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9346,476",
    "outflow": "\u20b9584,806",
    "connections": 14,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1057",
        "A1022",
        "A1198",
        "A1057"
      ],
      [
        "A1057",
        "A1091",
        "A1057"
      ]
    ],
    "openDate": "2018-11-04",
    "lastTxn": "2020-02-07",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1006",
        "amt": 93528,
        "ch": "NEFT",
        "time": "19:49",
        "branch": "Chennai",
        "txn_id": "T610"
      },
      {
        "dir": "out",
        "other": "A1163",
        "amt": 88727,
        "ch": "UPI",
        "time": "10:15",
        "branch": "Bangalore",
        "txn_id": "T897"
      },
      {
        "dir": "in",
        "other": "A1091",
        "amt": 88503,
        "ch": "IMPS",
        "time": "05:10",
        "branch": "Chennai",
        "txn_id": "T186"
      },
      {
        "dir": "in",
        "other": "A1171",
        "amt": 87914,
        "ch": "RTGS",
        "time": "05:22",
        "branch": "Chennai",
        "txn_id": "T771"
      },
      {
        "dir": "out",
        "other": "A1022",
        "amt": 84815,
        "ch": "UPI",
        "time": "00:51",
        "branch": "Kolkata",
        "txn_id": "T277"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 79691,
        "ch": "NEFT",
        "time": "01:07",
        "branch": "Chennai",
        "txn_id": "T1115"
      },
      {
        "dir": "out",
        "other": "A1082",
        "amt": 74994,
        "ch": "UPI",
        "time": "02:34",
        "branch": "Kolkata",
        "txn_id": "T953"
      },
      {
        "dir": "out",
        "other": "A1187",
        "amt": 74560,
        "ch": "ATM",
        "time": "07:17",
        "branch": "Bangalore",
        "txn_id": "T198"
      }
    ]
  },
  {
    "id": "A1058",
    "name": "A1058",
    "type": "Student",
    "age": 38,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9272,091",
    "outflow": "\u20b9329,703",
    "connections": 12,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1058",
        "A1140",
        "A1085",
        "A1058"
      ]
    ],
    "openDate": "2016-10-25",
    "lastTxn": "2017-11-22",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1142",
        "amt": 91526,
        "ch": "IMPS",
        "time": "15:35",
        "branch": "Mumbai",
        "txn_id": "T1092"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 83100,
        "ch": "IMPS",
        "time": "01:34",
        "branch": "Kolkata",
        "txn_id": "T1017"
      },
      {
        "dir": "in",
        "other": "A1024",
        "amt": 81616,
        "ch": "UPI",
        "time": "01:53",
        "branch": "Mumbai",
        "txn_id": "T747"
      },
      {
        "dir": "in",
        "other": "A1085",
        "amt": 80717,
        "ch": "UPI",
        "time": "01:40",
        "branch": "Delhi",
        "txn_id": "T980"
      },
      {
        "dir": "in",
        "other": "A1071",
        "amt": 57157,
        "ch": "UPI",
        "time": "07:07",
        "branch": "Delhi",
        "txn_id": "T1381"
      },
      {
        "dir": "out",
        "other": "A1124",
        "amt": 49065,
        "ch": "RTGS",
        "time": "09:47",
        "branch": "Kolkata",
        "txn_id": "T718"
      },
      {
        "dir": "out",
        "other": "A1029",
        "amt": 46767,
        "ch": "UPI",
        "time": "19:32",
        "branch": "Bangalore",
        "txn_id": "T1712"
      },
      {
        "dir": "out",
        "other": "A1056",
        "amt": 41937,
        "ch": "IMPS",
        "time": "01:57",
        "branch": "Bangalore",
        "txn_id": "T632"
      }
    ]
  },
  {
    "id": "A1059",
    "name": "A1059",
    "type": "Freelancer",
    "age": 62,
    "risk": "fraud",
    "riskScore": 88,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9444,684",
    "outflow": "\u20b9638,409",
    "connections": 20,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1059",
        "A1047",
        "A1126",
        "A1059"
      ],
      [
        "A1059",
        "A1061",
        "A1084",
        "A1059"
      ],
      [
        "A1059",
        "A1061",
        "A1032",
        "A1059"
      ]
    ],
    "openDate": "2020-03-09",
    "lastTxn": "2020-10-05",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1177",
        "amt": 98754,
        "ch": "RTGS",
        "time": "07:18",
        "branch": "Bangalore",
        "txn_id": "T292"
      },
      {
        "dir": "in",
        "other": "A1123",
        "amt": 95587,
        "ch": "NEFT",
        "time": "02:33",
        "branch": "Kolkata",
        "txn_id": "T1508"
      },
      {
        "dir": "out",
        "other": "A1171",
        "amt": 94492,
        "ch": "RTGS",
        "time": "01:02",
        "branch": "Bangalore",
        "txn_id": "T337"
      },
      {
        "dir": "in",
        "other": "A1032",
        "amt": 79325,
        "ch": "NEFT",
        "time": "14:24",
        "branch": "Bangalore",
        "txn_id": "T388"
      },
      {
        "dir": "in",
        "other": "A1084",
        "amt": 76677,
        "ch": "NEFT",
        "time": "20:41",
        "branch": "Mumbai",
        "txn_id": "T268"
      },
      {
        "dir": "out",
        "other": "A1052",
        "amt": 65658,
        "ch": "NEFT",
        "time": "17:49",
        "branch": "Mumbai",
        "txn_id": "T937"
      },
      {
        "dir": "out",
        "other": "A1031",
        "amt": 57179,
        "ch": "IMPS",
        "time": "06:25",
        "branch": "Kolkata",
        "txn_id": "T1390"
      },
      {
        "dir": "out",
        "other": "A1061",
        "amt": 56779,
        "ch": "UPI",
        "time": "01:54",
        "branch": "Kolkata",
        "txn_id": "T1497"
      }
    ]
  },
  {
    "id": "A1060",
    "name": "A1060",
    "type": "Freelancer",
    "age": 59,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9676,709",
    "outflow": "\u20b9351,975",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1060",
        "A1015",
        "A1072",
        "A1060"
      ],
      [
        "A1060",
        "A1015",
        "A1190",
        "A1060"
      ],
      [
        "A1060",
        "A1015",
        "A1171",
        "A1060"
      ]
    ],
    "openDate": "2022-04-19",
    "lastTxn": "2024-07-18",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1083",
        "amt": 95579,
        "ch": "UPI",
        "time": "10:54",
        "branch": "Bangalore",
        "txn_id": "T1038"
      },
      {
        "dir": "in",
        "other": "A1017",
        "amt": 94652,
        "ch": "NEFT",
        "time": "11:18",
        "branch": "Kolkata",
        "txn_id": "T1736"
      },
      {
        "dir": "in",
        "other": "A1171",
        "amt": 94035,
        "ch": "ATM",
        "time": "04:10",
        "branch": "Kolkata",
        "txn_id": "T1016"
      },
      {
        "dir": "in",
        "other": "A1115",
        "amt": 93616,
        "ch": "IMPS",
        "time": "02:15",
        "branch": "Bangalore",
        "txn_id": "T536"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 75145,
        "ch": "ATM",
        "time": "12:58",
        "branch": "Delhi",
        "txn_id": "T1220"
      },
      {
        "dir": "in",
        "other": "A1109",
        "amt": 65796,
        "ch": "NEFT",
        "time": "08:37",
        "branch": "Mumbai",
        "txn_id": "T1610"
      },
      {
        "dir": "out",
        "other": "A1026",
        "amt": 64998,
        "ch": "NEFT",
        "time": "00:51",
        "branch": "Kolkata",
        "txn_id": "T466"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 62461,
        "ch": "RTGS",
        "time": "22:05",
        "branch": "Chennai",
        "txn_id": "T931"
      }
    ]
  },
  {
    "id": "A1061",
    "name": "A1061",
    "type": "Freelancer",
    "age": 26,
    "risk": "fraud",
    "riskScore": 99,
    "riskLevel": "High",
    "income": "\u20b92L",
    "inflow": "\u20b9467,938",
    "outflow": "\u20b9407,728",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1061",
        "A1114",
        "A1061"
      ],
      [
        "A1061",
        "A1161",
        "A1114",
        "A1061"
      ],
      [
        "A1061",
        "A1169",
        "A1162",
        "A1061"
      ]
    ],
    "openDate": "2023-10-27",
    "lastTxn": "2024-03-05",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1162",
        "amt": 95442,
        "ch": "IMPS",
        "time": "17:48",
        "branch": "Mumbai",
        "txn_id": "T676"
      },
      {
        "dir": "in",
        "other": "A1122",
        "amt": 88997,
        "ch": "ATM",
        "time": "23:23",
        "branch": "Chennai",
        "txn_id": "T269"
      },
      {
        "dir": "in",
        "other": "A1031",
        "amt": 88252,
        "ch": "IMPS",
        "time": "08:34",
        "branch": "Mumbai",
        "txn_id": "T1443"
      },
      {
        "dir": "out",
        "other": "A1114",
        "amt": 87442,
        "ch": "ATM",
        "time": "02:18",
        "branch": "Kolkata",
        "txn_id": "T665"
      },
      {
        "dir": "in",
        "other": "A1186",
        "amt": 74764,
        "ch": "NEFT",
        "time": "06:55",
        "branch": "Bangalore",
        "txn_id": "T643"
      },
      {
        "dir": "out",
        "other": "A1162",
        "amt": 71540,
        "ch": "ATM",
        "time": "09:34",
        "branch": "Kolkata",
        "txn_id": "T325"
      },
      {
        "dir": "out",
        "other": "A1084",
        "amt": 64210,
        "ch": "NEFT",
        "time": "13:08",
        "branch": "Kolkata",
        "txn_id": "T1877"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 64170,
        "ch": "ATM",
        "time": "20:52",
        "branch": "Delhi",
        "txn_id": "T817"
      }
    ]
  },
  {
    "id": "A1062",
    "name": "A1062",
    "type": "Business",
    "age": 34,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9608,046",
    "outflow": "\u20b9674,296",
    "connections": 22,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1062",
        "A1095",
        "A1127",
        "A1062"
      ],
      [
        "A1062",
        "A1184",
        "A1066",
        "A1062"
      ],
      [
        "A1062",
        "A1099",
        "A1062"
      ]
    ],
    "openDate": "2018-09-02",
    "lastTxn": "2019-04-01",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1066",
        "amt": 96273,
        "ch": "ATM",
        "time": "20:17",
        "branch": "Mumbai",
        "txn_id": "T800"
      },
      {
        "dir": "out",
        "other": "A1099",
        "amt": 93314,
        "ch": "UPI",
        "time": "04:20",
        "branch": "Bangalore",
        "txn_id": "T1772"
      },
      {
        "dir": "in",
        "other": "A1015",
        "amt": 90780,
        "ch": "IMPS",
        "time": "13:52",
        "branch": "Bangalore",
        "txn_id": "T919"
      },
      {
        "dir": "out",
        "other": "A1079",
        "amt": 90209,
        "ch": "NEFT",
        "time": "21:52",
        "branch": "Chennai",
        "txn_id": "T1574"
      },
      {
        "dir": "in",
        "other": "A1099",
        "amt": 88343,
        "ch": "RTGS",
        "time": "00:16",
        "branch": "Kolkata",
        "txn_id": "T932"
      },
      {
        "dir": "out",
        "other": "A1137",
        "amt": 84913,
        "ch": "UPI",
        "time": "12:04",
        "branch": "Mumbai",
        "txn_id": "T1622"
      },
      {
        "dir": "out",
        "other": "A1095",
        "amt": 81191,
        "ch": "ATM",
        "time": "22:38",
        "branch": "Bangalore",
        "txn_id": "T504"
      },
      {
        "dir": "out",
        "other": "A1160",
        "amt": 76208,
        "ch": "ATM",
        "time": "08:07",
        "branch": "Chennai",
        "txn_id": "T1005"
      }
    ]
  },
  {
    "id": "A1063",
    "name": "A1063",
    "type": "Teacher",
    "age": 54,
    "risk": "fraud",
    "riskScore": 70,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9394,823",
    "outflow": "\u20b9472,867",
    "connections": 17,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1063",
        "A1168",
        "A1087",
        "A1063"
      ]
    ],
    "openDate": "2021-10-11",
    "lastTxn": "2024-01-27",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1077",
        "amt": 201917,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1913"
      },
      {
        "dir": "in",
        "other": "A1006",
        "amt": 99900,
        "ch": "UPI",
        "time": "15:38",
        "branch": "Chennai",
        "txn_id": "T1850"
      },
      {
        "dir": "in",
        "other": "A1039",
        "amt": 99578,
        "ch": "IMPS",
        "time": "07:12",
        "branch": "Bangalore",
        "txn_id": "T537"
      },
      {
        "dir": "out",
        "other": "A1160",
        "amt": 96771,
        "ch": "ATM",
        "time": "16:59",
        "branch": "Chennai",
        "txn_id": "T1603"
      },
      {
        "dir": "in",
        "other": "A1118",
        "amt": 89445,
        "ch": "RTGS",
        "time": "21:17",
        "branch": "Bangalore",
        "txn_id": "T253"
      },
      {
        "dir": "out",
        "other": "A1168",
        "amt": 58156,
        "ch": "ATM",
        "time": "15:25",
        "branch": "Bangalore",
        "txn_id": "T1627"
      },
      {
        "dir": "in",
        "other": "A1100",
        "amt": 53751,
        "ch": "UPI",
        "time": "18:44",
        "branch": "Delhi",
        "txn_id": "T1681"
      },
      {
        "dir": "out",
        "other": "A1197",
        "amt": 48703,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1971"
      }
    ]
  },
  {
    "id": "A1064",
    "name": "A1064",
    "type": "Engineer",
    "age": 44,
    "risk": "fraud",
    "riskScore": 99,
    "riskLevel": "High",
    "income": "\u20b95L",
    "inflow": "\u20b9520,132",
    "outflow": "\u20b91,008,609",
    "connections": 26,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1064",
        "A1059",
        "A1166",
        "A1064"
      ],
      [
        "A1064",
        "A1069",
        "A1104",
        "A1064"
      ],
      [
        "A1064",
        "A1089",
        "A1015",
        "A1064"
      ]
    ],
    "openDate": "2016-04-15",
    "lastTxn": "2016-10-15",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1016",
        "amt": 91730,
        "ch": "NEFT",
        "time": "09:37",
        "branch": "Delhi",
        "txn_id": "T1534"
      },
      {
        "dir": "out",
        "other": "A1142",
        "amt": 90489,
        "ch": "NEFT",
        "time": "03:04",
        "branch": "Kolkata",
        "txn_id": "T755"
      },
      {
        "dir": "out",
        "other": "A1137",
        "amt": 84308,
        "ch": "IMPS",
        "time": "07:52",
        "branch": "Mumbai",
        "txn_id": "T550"
      },
      {
        "dir": "out",
        "other": "A1131",
        "amt": 81624,
        "ch": "ATM",
        "time": "19:13",
        "branch": "Kolkata",
        "txn_id": "T282"
      },
      {
        "dir": "in",
        "other": "A1050",
        "amt": 79444,
        "ch": "UPI",
        "time": "05:07",
        "branch": "Mumbai",
        "txn_id": "T685"
      },
      {
        "dir": "in",
        "other": "A1015",
        "amt": 71420,
        "ch": "UPI",
        "time": "05:27",
        "branch": "Bangalore",
        "txn_id": "T539"
      },
      {
        "dir": "out",
        "other": "A1052",
        "amt": 69182,
        "ch": "ATM",
        "time": "23:55",
        "branch": "Mumbai",
        "txn_id": "T810"
      },
      {
        "dir": "out",
        "other": "A1112",
        "amt": 68867,
        "ch": "ATM",
        "time": "00:04",
        "branch": "Bangalore",
        "txn_id": "T1704"
      }
    ]
  },
  {
    "id": "A1065",
    "name": "A1065",
    "type": "Engineer",
    "age": 56,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9432,128",
    "outflow": "\u20b9830,701",
    "connections": 21,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1065",
        "A1022",
        "A1065"
      ],
      [
        "A1065",
        "A1008",
        "A1113",
        "A1065"
      ],
      [
        "A1065",
        "A1001",
        "A1136",
        "A1065"
      ]
    ],
    "openDate": "2024-06-27",
    "lastTxn": "2026-05-13",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1190",
        "amt": 345748,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1909"
      },
      {
        "dir": "out",
        "other": "A1008",
        "amt": 92530,
        "ch": "UPI",
        "time": "03:45",
        "branch": "Mumbai",
        "txn_id": "T1547"
      },
      {
        "dir": "in",
        "other": "A1121",
        "amt": 84552,
        "ch": "IMPS",
        "time": "05:42",
        "branch": "Kolkata",
        "txn_id": "T132"
      },
      {
        "dir": "out",
        "other": "A1127",
        "amt": 81441,
        "ch": "UPI",
        "time": "03:44",
        "branch": "Mumbai",
        "txn_id": "T281"
      },
      {
        "dir": "in",
        "other": "A1136",
        "amt": 77960,
        "ch": "NEFT",
        "time": "12:35",
        "branch": "Mumbai",
        "txn_id": "T303"
      },
      {
        "dir": "out",
        "other": "A1121",
        "amt": 75509,
        "ch": "UPI",
        "time": "13:59",
        "branch": "Bangalore",
        "txn_id": "T1811"
      },
      {
        "dir": "in",
        "other": "A1022",
        "amt": 74068,
        "ch": "UPI",
        "time": "14:53",
        "branch": "Chennai",
        "txn_id": "T698"
      },
      {
        "dir": "in",
        "other": "A1180",
        "amt": 74003,
        "ch": "UPI",
        "time": "07:49",
        "branch": "Bangalore",
        "txn_id": "T601"
      }
    ]
  },
  {
    "id": "A1066",
    "name": "A1066",
    "type": "Business",
    "age": 53,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9611,445",
    "outflow": "\u20b9871,673",
    "connections": 22,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1066",
        "A1067",
        "A1141",
        "A1066"
      ],
      [
        "A1066",
        "A1194",
        "A1050",
        "A1066"
      ],
      [
        "A1066",
        "A1062",
        "A1184",
        "A1066"
      ]
    ],
    "openDate": "2021-07-06",
    "lastTxn": "2023-08-12",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1174",
        "amt": 210359,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1938"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 208245,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1937"
      },
      {
        "dir": "out",
        "other": "A1194",
        "amt": 97525,
        "ch": "ATM",
        "time": "19:46",
        "branch": "Mumbai",
        "txn_id": "T1677"
      },
      {
        "dir": "out",
        "other": "A1062",
        "amt": 96273,
        "ch": "ATM",
        "time": "20:17",
        "branch": "Mumbai",
        "txn_id": "T800"
      },
      {
        "dir": "out",
        "other": "A1191",
        "amt": 92856,
        "ch": "ATM",
        "time": "19:32",
        "branch": "Chennai",
        "txn_id": "T192"
      },
      {
        "dir": "out",
        "other": "A1153",
        "amt": 85994,
        "ch": "RTGS",
        "time": "11:15",
        "branch": "Kolkata",
        "txn_id": "T1819"
      },
      {
        "dir": "in",
        "other": "A1050",
        "amt": 82867,
        "ch": "RTGS",
        "time": "04:49",
        "branch": "Mumbai",
        "txn_id": "T708"
      },
      {
        "dir": "in",
        "other": "A1184",
        "amt": 65574,
        "ch": "ATM",
        "time": "21:08",
        "branch": "Bangalore",
        "txn_id": "T866"
      }
    ]
  },
  {
    "id": "A1067",
    "name": "A1067",
    "type": "Govt Employee",
    "age": 34,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9544,230",
    "outflow": "\u20b9627,463",
    "connections": 28,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1067",
        "A1165",
        "A1099",
        "A1067"
      ],
      [
        "A1067",
        "A1141",
        "A1053",
        "A1067"
      ],
      [
        "A1067",
        "A1141",
        "A1099",
        "A1067"
      ]
    ],
    "openDate": "2023-12-11",
    "lastTxn": "2025-02-07",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1029",
        "amt": 81577,
        "ch": "RTGS",
        "time": "11:23",
        "branch": "Chennai",
        "txn_id": "T954"
      },
      {
        "dir": "out",
        "other": "A1141",
        "amt": 80893,
        "ch": "NEFT",
        "time": "02:14",
        "branch": "Bangalore",
        "txn_id": "T945"
      },
      {
        "dir": "in",
        "other": "A1046",
        "amt": 77757,
        "ch": "IMPS",
        "time": "10:32",
        "branch": "Mumbai",
        "txn_id": "T1042"
      },
      {
        "dir": "in",
        "other": "A1083",
        "amt": 71877,
        "ch": "RTGS",
        "time": "19:24",
        "branch": "Kolkata",
        "txn_id": "T1332"
      },
      {
        "dir": "in",
        "other": "A1169",
        "amt": 68833,
        "ch": "NEFT",
        "time": "01:42",
        "branch": "Mumbai",
        "txn_id": "T1842"
      },
      {
        "dir": "in",
        "other": "A1120",
        "amt": 64530,
        "ch": "RTGS",
        "time": "10:25",
        "branch": "Bangalore",
        "txn_id": "T805"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 63798,
        "ch": "IMPS",
        "time": "07:50",
        "branch": "Bangalore",
        "txn_id": "T176"
      },
      {
        "dir": "out",
        "other": "A1198",
        "amt": 62921,
        "ch": "NEFT",
        "time": "23:05",
        "branch": "Mumbai",
        "txn_id": "T191"
      }
    ]
  },
  {
    "id": "A1068",
    "name": "A1068",
    "type": "Student",
    "age": 62,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9563,695",
    "outflow": "\u20b9430,461",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1068",
        "A1116",
        "A1147",
        "A1068"
      ]
    ],
    "openDate": "2021-06-09",
    "lastTxn": "2023-04-24",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1100",
        "amt": 285016,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1935"
      },
      {
        "dir": "in",
        "other": "A1102",
        "amt": 284771,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1934"
      },
      {
        "dir": "out",
        "other": "A1076",
        "amt": 67970,
        "ch": "IMPS",
        "time": "06:44",
        "branch": "Delhi",
        "txn_id": "T1360"
      },
      {
        "dir": "in",
        "other": "A1025",
        "amt": 66418,
        "ch": "RTGS",
        "time": "12:54",
        "branch": "Delhi",
        "txn_id": "T180"
      },
      {
        "dir": "in",
        "other": "A1012",
        "amt": 57967,
        "ch": "IMPS",
        "time": "17:13",
        "branch": "Chennai",
        "txn_id": "T1105"
      },
      {
        "dir": "in",
        "other": "A1078",
        "amt": 54950,
        "ch": "RTGS",
        "time": "12:30",
        "branch": "Delhi",
        "txn_id": "T255"
      },
      {
        "dir": "out",
        "other": "A1024",
        "amt": 45792,
        "ch": "RTGS",
        "time": "15:57",
        "branch": "Chennai",
        "txn_id": "T518"
      },
      {
        "dir": "in",
        "other": "A1045",
        "amt": 45497,
        "ch": "UPI",
        "time": "14:45",
        "branch": "Kolkata",
        "txn_id": "T156"
      }
    ]
  },
  {
    "id": "A1069",
    "name": "A1069",
    "type": "Teacher",
    "age": 34,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9793,758",
    "outflow": "\u20b9439,597",
    "connections": 23,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1069",
        "A1161",
        "A1087",
        "A1069"
      ],
      [
        "A1069",
        "A1192",
        "A1108",
        "A1069"
      ],
      [
        "A1069",
        "A1160",
        "A1168",
        "A1069"
      ]
    ],
    "openDate": "2016-09-30",
    "lastTxn": "2016-11-06",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1168",
        "amt": 122515,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1950"
      },
      {
        "dir": "out",
        "other": "A1160",
        "amt": 122515,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1951"
      },
      {
        "dir": "out",
        "other": "A1162",
        "amt": 73015,
        "ch": "UPI",
        "time": "17:31",
        "branch": "Delhi",
        "txn_id": "T159"
      },
      {
        "dir": "in",
        "other": "A1011",
        "amt": 71178,
        "ch": "IMPS",
        "time": "07:39",
        "branch": "Bangalore",
        "txn_id": "T625"
      },
      {
        "dir": "in",
        "other": "A1176",
        "amt": 69838,
        "ch": "RTGS",
        "time": "07:14",
        "branch": "Kolkata",
        "txn_id": "T1710"
      },
      {
        "dir": "in",
        "other": "A1054",
        "amt": 69344,
        "ch": "ATM",
        "time": "22:15",
        "branch": "Kolkata",
        "txn_id": "T670"
      },
      {
        "dir": "in",
        "other": "A1130",
        "amt": 65703,
        "ch": "ATM",
        "time": "06:08",
        "branch": "Mumbai",
        "txn_id": "T406"
      },
      {
        "dir": "in",
        "other": "A1115",
        "amt": 64646,
        "ch": "UPI",
        "time": "21:06",
        "branch": "Kolkata",
        "txn_id": "T327"
      }
    ]
  },
  {
    "id": "A1070",
    "name": "A1070",
    "type": "Teacher",
    "age": 35,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9369,090",
    "outflow": "\u20b9308,601",
    "connections": 15,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1070",
        "A1037",
        "A1071",
        "A1070"
      ],
      [
        "A1070",
        "A1125",
        "A1051",
        "A1070"
      ],
      [
        "A1070",
        "A1169",
        "A1162",
        "A1070"
      ]
    ],
    "openDate": "2020-09-12",
    "lastTxn": "2021-04-30",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1132",
        "amt": 94126,
        "ch": "NEFT",
        "time": "08:20",
        "branch": "Kolkata",
        "txn_id": "T461"
      },
      {
        "dir": "out",
        "other": "A1027",
        "amt": 84502,
        "ch": "IMPS",
        "time": "01:11",
        "branch": "Kolkata",
        "txn_id": "T259"
      },
      {
        "dir": "out",
        "other": "A1169",
        "amt": 77450,
        "ch": "ATM",
        "time": "16:33",
        "branch": "Kolkata",
        "txn_id": "T341"
      },
      {
        "dir": "in",
        "other": "A1139",
        "amt": 71952,
        "ch": "ATM",
        "time": "22:36",
        "branch": "Kolkata",
        "txn_id": "T257"
      },
      {
        "dir": "in",
        "other": "A1162",
        "amt": 57475,
        "ch": "ATM",
        "time": "07:29",
        "branch": "Chennai",
        "txn_id": "T1845"
      },
      {
        "dir": "in",
        "other": "A1051",
        "amt": 54569,
        "ch": "NEFT",
        "time": "16:39",
        "branch": "Delhi",
        "txn_id": "T930"
      },
      {
        "dir": "in",
        "other": "A1132",
        "amt": 49930,
        "ch": "ATM",
        "time": "04:07",
        "branch": "Bangalore",
        "txn_id": "T1057"
      },
      {
        "dir": "out",
        "other": "A1037",
        "amt": 33071,
        "ch": "NEFT",
        "time": "01:58",
        "branch": "Kolkata",
        "txn_id": "T879"
      }
    ]
  },
  {
    "id": "A1071",
    "name": "A1071",
    "type": "Student",
    "age": 61,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9431,075",
    "outflow": "\u20b9539,162",
    "connections": 17,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1071",
        "A1070",
        "A1037",
        "A1071"
      ],
      [
        "A1071",
        "A1002",
        "A1130",
        "A1071"
      ],
      [
        "A1071",
        "A1037",
        "A1071"
      ]
    ],
    "openDate": "2018-09-11",
    "lastTxn": "2021-01-05",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1118",
        "amt": 99028,
        "ch": "IMPS",
        "time": "08:25",
        "branch": "Delhi",
        "txn_id": "T197"
      },
      {
        "dir": "in",
        "other": "A1130",
        "amt": 88229,
        "ch": "RTGS",
        "time": "20:26",
        "branch": "Delhi",
        "txn_id": "T1340"
      },
      {
        "dir": "out",
        "other": "A1157",
        "amt": 84916,
        "ch": "ATM",
        "time": "14:25",
        "branch": "Chennai",
        "txn_id": "T1400"
      },
      {
        "dir": "out",
        "other": "A1033",
        "amt": 79076,
        "ch": "IMPS",
        "time": "07:20",
        "branch": "Kolkata",
        "txn_id": "T333"
      },
      {
        "dir": "in",
        "other": "A1196",
        "amt": 74149,
        "ch": "UPI",
        "time": "01:40",
        "branch": "Chennai",
        "txn_id": "T149"
      },
      {
        "dir": "out",
        "other": "A1037",
        "amt": 71231,
        "ch": "NEFT",
        "time": "20:28",
        "branch": "Chennai",
        "txn_id": "T1413"
      },
      {
        "dir": "out",
        "other": "A1002",
        "amt": 58251,
        "ch": "RTGS",
        "time": "20:57",
        "branch": "Delhi",
        "txn_id": "T707"
      },
      {
        "dir": "in",
        "other": "A1012",
        "amt": 57781,
        "ch": "NEFT",
        "time": "20:27",
        "branch": "Chennai",
        "txn_id": "T294"
      }
    ]
  },
  {
    "id": "A1072",
    "name": "A1072",
    "type": "Business",
    "age": 61,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9474,878",
    "outflow": "\u20b91,348,846",
    "connections": 32,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1072",
        "A1001",
        "A1148",
        "A1072"
      ],
      [
        "A1072",
        "A1060",
        "A1015",
        "A1072"
      ],
      [
        "A1072",
        "A1141",
        "A1053",
        "A1072"
      ]
    ],
    "openDate": "2019-09-01",
    "lastTxn": "2021-06-10",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1066",
        "amt": 208245,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1937"
      },
      {
        "dir": "in",
        "other": "A1188",
        "amt": 94610,
        "ch": "NEFT",
        "time": "12:57",
        "branch": "Bangalore",
        "txn_id": "T746"
      },
      {
        "dir": "out",
        "other": "A1109",
        "amt": 92247,
        "ch": "NEFT",
        "time": "09:32",
        "branch": "Kolkata",
        "txn_id": "T1353"
      },
      {
        "dir": "out",
        "other": "A1141",
        "amt": 91444,
        "ch": "IMPS",
        "time": "05:25",
        "branch": "Delhi",
        "txn_id": "T1857"
      },
      {
        "dir": "in",
        "other": "A1097",
        "amt": 90643,
        "ch": "RTGS",
        "time": "13:16",
        "branch": "Bangalore",
        "txn_id": "T651"
      },
      {
        "dir": "in",
        "other": "A1148",
        "amt": 87366,
        "ch": "IMPS",
        "time": "18:42",
        "branch": "Kolkata",
        "txn_id": "T769"
      },
      {
        "dir": "out",
        "other": "A1079",
        "amt": 83738,
        "ch": "ATM",
        "time": "18:59",
        "branch": "Mumbai",
        "txn_id": "T599"
      },
      {
        "dir": "out",
        "other": "A1082",
        "amt": 81802,
        "ch": "RTGS",
        "time": "07:12",
        "branch": "Kolkata",
        "txn_id": "T878"
      }
    ]
  },
  {
    "id": "A1073",
    "name": "A1073",
    "type": "Govt Employee",
    "age": 51,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9313,330",
    "outflow": "\u20b9445,264",
    "connections": 14,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1073",
        "A1194",
        "A1073"
      ],
      [
        "A1073",
        "A1142",
        "A1101",
        "A1073"
      ]
    ],
    "openDate": "2019-10-23",
    "lastTxn": "2021-02-02",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1025",
        "amt": 90415,
        "ch": "UPI",
        "time": "23:26",
        "branch": "Mumbai",
        "txn_id": "T898"
      },
      {
        "dir": "out",
        "other": "A1194",
        "amt": 90323,
        "ch": "IMPS",
        "time": "00:42",
        "branch": "Chennai",
        "txn_id": "T1548"
      },
      {
        "dir": "in",
        "other": "A1194",
        "amt": 71982,
        "ch": "ATM",
        "time": "00:10",
        "branch": "Chennai",
        "txn_id": "T1442"
      },
      {
        "dir": "in",
        "other": "A1146",
        "amt": 71651,
        "ch": "IMPS",
        "time": "21:04",
        "branch": "Bangalore",
        "txn_id": "T1316"
      },
      {
        "dir": "in",
        "other": "A1184",
        "amt": 68753,
        "ch": "RTGS",
        "time": "17:24",
        "branch": "Mumbai",
        "txn_id": "T1653"
      },
      {
        "dir": "out",
        "other": "A1142",
        "amt": 54124,
        "ch": "ATM",
        "time": "16:04",
        "branch": "Delhi",
        "txn_id": "T139"
      },
      {
        "dir": "out",
        "other": "A1024",
        "amt": 53433,
        "ch": "IMPS",
        "time": "08:00",
        "branch": "Delhi",
        "txn_id": "T1286"
      },
      {
        "dir": "out",
        "other": "A1177",
        "amt": 51665,
        "ch": "UPI",
        "time": "17:33",
        "branch": "Chennai",
        "txn_id": "T1749"
      }
    ]
  },
  {
    "id": "A1074",
    "name": "A1074",
    "type": "Engineer",
    "age": 23,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9309,394",
    "outflow": "\u20b9584,098",
    "connections": 15,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1074",
        "A1125",
        "A1036",
        "A1074"
      ],
      [
        "A1074",
        "A1036",
        "A1074"
      ],
      [
        "A1074",
        "A1036",
        "A1016",
        "A1074"
      ]
    ],
    "openDate": "2017-03-24",
    "lastTxn": "2018-11-21",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1131",
        "amt": 222202,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1917"
      },
      {
        "dir": "out",
        "other": "A1036",
        "amt": 97848,
        "ch": "IMPS",
        "time": "22:51",
        "branch": "Kolkata",
        "txn_id": "T857"
      },
      {
        "dir": "out",
        "other": "A1125",
        "amt": 93422,
        "ch": "UPI",
        "time": "13:36",
        "branch": "Kolkata",
        "txn_id": "T714"
      },
      {
        "dir": "in",
        "other": "A1082",
        "amt": 88662,
        "ch": "UPI",
        "time": "15:50",
        "branch": "Bangalore",
        "txn_id": "T1014"
      },
      {
        "dir": "in",
        "other": "A1199",
        "amt": 74186,
        "ch": "ATM",
        "time": "12:01",
        "branch": "Delhi",
        "txn_id": "T1168"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 67317,
        "ch": "RTGS",
        "time": "11:21",
        "branch": "Delhi",
        "txn_id": "T1825"
      },
      {
        "dir": "out",
        "other": "A1046",
        "amt": 58466,
        "ch": "ATM",
        "time": "00:51",
        "branch": "Mumbai",
        "txn_id": "T1531"
      },
      {
        "dir": "in",
        "other": "A1042",
        "amt": 44724,
        "ch": "IMPS",
        "time": "03:07",
        "branch": "Delhi",
        "txn_id": "T237"
      }
    ]
  },
  {
    "id": "A1075",
    "name": "A1075",
    "type": "Student",
    "age": 48,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9579,640",
    "outflow": "\u20b9465,717",
    "connections": 14,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1075",
        "A1018",
        "A1134",
        "A1075"
      ],
      [
        "A1075",
        "A1056",
        "A1031",
        "A1075"
      ]
    ],
    "openDate": "2018-01-27",
    "lastTxn": "2019-08-25",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1011",
        "amt": 99932,
        "ch": "UPI",
        "time": "07:04",
        "branch": "Bangalore",
        "txn_id": "T1512"
      },
      {
        "dir": "out",
        "other": "A1018",
        "amt": 98769,
        "ch": "UPI",
        "time": "12:08",
        "branch": "Chennai",
        "txn_id": "T283"
      },
      {
        "dir": "in",
        "other": "A1031",
        "amt": 98113,
        "ch": "IMPS",
        "time": "04:08",
        "branch": "Mumbai",
        "txn_id": "T1593"
      },
      {
        "dir": "out",
        "other": "A1018",
        "amt": 88475,
        "ch": "ATM",
        "time": "16:20",
        "branch": "Chennai",
        "txn_id": "T1846"
      },
      {
        "dir": "in",
        "other": "A1144",
        "amt": 86654,
        "ch": "ATM",
        "time": "11:26",
        "branch": "Chennai",
        "txn_id": "T865"
      },
      {
        "dir": "in",
        "other": "A1024",
        "amt": 72147,
        "ch": "RTGS",
        "time": "02:43",
        "branch": "Bangalore",
        "txn_id": "T790"
      },
      {
        "dir": "out",
        "other": "A1089",
        "amt": 70877,
        "ch": "RTGS",
        "time": "12:09",
        "branch": "Kolkata",
        "txn_id": "T1608"
      },
      {
        "dir": "out",
        "other": "A1113",
        "amt": 62567,
        "ch": "RTGS",
        "time": "11:38",
        "branch": "Bangalore",
        "txn_id": "T906"
      }
    ]
  },
  {
    "id": "A1076",
    "name": "A1076",
    "type": "Govt Employee",
    "age": 26,
    "risk": "fraud",
    "riskScore": 75,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9608,716",
    "outflow": "\u20b9423,155",
    "connections": 16,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1076",
        "A1113",
        "A1076"
      ],
      [
        "A1076",
        "A1006",
        "A1148",
        "A1076"
      ],
      [
        "A1076",
        "A1123",
        "A1146",
        "A1076"
      ]
    ],
    "openDate": "2015-10-28",
    "lastTxn": "2017-09-03",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1146",
        "amt": 95919,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1969"
      },
      {
        "dir": "out",
        "other": "A1123",
        "amt": 95919,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1970"
      },
      {
        "dir": "out",
        "other": "A1139",
        "amt": 92943,
        "ch": "IMPS",
        "time": "22:11",
        "branch": "Mumbai",
        "txn_id": "T1702"
      },
      {
        "dir": "in",
        "other": "A1016",
        "amt": 90286,
        "ch": "ATM",
        "time": "08:37",
        "branch": "Mumbai",
        "txn_id": "T264"
      },
      {
        "dir": "in",
        "other": "A1082",
        "amt": 87844,
        "ch": "NEFT",
        "time": "15:57",
        "branch": "Chennai",
        "txn_id": "T609"
      },
      {
        "dir": "out",
        "other": "A1027",
        "amt": 79705,
        "ch": "ATM",
        "time": "03:05",
        "branch": "Mumbai",
        "txn_id": "T894"
      },
      {
        "dir": "in",
        "other": "A1113",
        "amt": 68065,
        "ch": "NEFT",
        "time": "18:43",
        "branch": "Delhi",
        "txn_id": "T356"
      },
      {
        "dir": "in",
        "other": "A1068",
        "amt": 67970,
        "ch": "IMPS",
        "time": "06:44",
        "branch": "Delhi",
        "txn_id": "T1360"
      }
    ]
  },
  {
    "id": "A1077",
    "name": "A1077",
    "type": "Business",
    "age": 31,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9619,419",
    "outflow": "\u20b9835,802",
    "connections": 16,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1077",
        "A1112",
        "A1105",
        "A1077"
      ]
    ],
    "openDate": "2017-10-10",
    "lastTxn": "2019-10-29",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1147",
        "amt": 203604,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1914"
      },
      {
        "dir": "in",
        "other": "A1063",
        "amt": 201917,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1913"
      },
      {
        "dir": "in",
        "other": "A1153",
        "amt": 98146,
        "ch": "UPI",
        "time": "01:46",
        "branch": "Kolkata",
        "txn_id": "T531"
      },
      {
        "dir": "out",
        "other": "A1023",
        "amt": 93820,
        "ch": "IMPS",
        "time": "19:49",
        "branch": "Delhi",
        "txn_id": "T296"
      },
      {
        "dir": "out",
        "other": "A1078",
        "amt": 91859,
        "ch": "NEFT",
        "time": "04:48",
        "branch": "Delhi",
        "txn_id": "T324"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 91223,
        "ch": "IMPS",
        "time": "13:11",
        "branch": "Mumbai",
        "txn_id": "T1626"
      },
      {
        "dir": "out",
        "other": "A1051",
        "amt": 82401,
        "ch": "ATM",
        "time": "22:13",
        "branch": "Chennai",
        "txn_id": "T252"
      },
      {
        "dir": "in",
        "other": "A1105",
        "amt": 79222,
        "ch": "IMPS",
        "time": "14:35",
        "branch": "Chennai",
        "txn_id": "T1511"
      }
    ]
  },
  {
    "id": "A1078",
    "name": "A1078",
    "type": "Business",
    "age": 65,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9702,322",
    "outflow": "\u20b9288,586",
    "connections": 16,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1078",
        "A1195",
        "A1005",
        "A1078"
      ],
      [
        "A1078",
        "A1166",
        "A1154",
        "A1078"
      ]
    ],
    "openDate": "2020-05-22",
    "lastTxn": "2020-06-06",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1019",
        "amt": 99845,
        "ch": "ATM",
        "time": "21:41",
        "branch": "Mumbai",
        "txn_id": "T172"
      },
      {
        "dir": "in",
        "other": "A1187",
        "amt": 95476,
        "ch": "IMPS",
        "time": "06:11",
        "branch": "Chennai",
        "txn_id": "T896"
      },
      {
        "dir": "in",
        "other": "A1077",
        "amt": 91859,
        "ch": "NEFT",
        "time": "04:48",
        "branch": "Delhi",
        "txn_id": "T324"
      },
      {
        "dir": "out",
        "other": "A1164",
        "amt": 82965,
        "ch": "UPI",
        "time": "21:48",
        "branch": "Bangalore",
        "txn_id": "T1491"
      },
      {
        "dir": "in",
        "other": "A1177",
        "amt": 81199,
        "ch": "UPI",
        "time": "06:02",
        "branch": "Chennai",
        "txn_id": "T1131"
      },
      {
        "dir": "in",
        "other": "A1014",
        "amt": 79267,
        "ch": "IMPS",
        "time": "11:57",
        "branch": "Kolkata",
        "txn_id": "T1675"
      },
      {
        "dir": "in",
        "other": "A1139",
        "amt": 78319,
        "ch": "UPI",
        "time": "10:37",
        "branch": "Kolkata",
        "txn_id": "T199"
      },
      {
        "dir": "out",
        "other": "A1195",
        "amt": 70808,
        "ch": "RTGS",
        "time": "09:12",
        "branch": "Kolkata",
        "txn_id": "T352"
      }
    ]
  },
  {
    "id": "A1079",
    "name": "A1079",
    "type": "Student",
    "age": 21,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9731,189",
    "outflow": "\u20b9586,055",
    "connections": 20,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1079",
        "A1044",
        "A1027",
        "A1079"
      ],
      [
        "A1079",
        "A1091",
        "A1161",
        "A1079"
      ],
      [
        "A1079",
        "A1091",
        "A1028",
        "A1079"
      ]
    ],
    "openDate": "2017-02-15",
    "lastTxn": "2018-02-03",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1120",
        "amt": 99457,
        "ch": "RTGS",
        "time": "05:41",
        "branch": "Chennai",
        "txn_id": "T918"
      },
      {
        "dir": "out",
        "other": "A1017",
        "amt": 96380,
        "ch": "NEFT",
        "time": "09:41",
        "branch": "Kolkata",
        "txn_id": "T529"
      },
      {
        "dir": "in",
        "other": "A1062",
        "amt": 90209,
        "ch": "NEFT",
        "time": "21:52",
        "branch": "Chennai",
        "txn_id": "T1574"
      },
      {
        "dir": "in",
        "other": "A1119",
        "amt": 90168,
        "ch": "UPI",
        "time": "23:51",
        "branch": "Mumbai",
        "txn_id": "T869"
      },
      {
        "dir": "in",
        "other": "A1161",
        "amt": 86698,
        "ch": "NEFT",
        "time": "02:38",
        "branch": "Chennai",
        "txn_id": "T129"
      },
      {
        "dir": "in",
        "other": "A1028",
        "amt": 86659,
        "ch": "NEFT",
        "time": "23:33",
        "branch": "Delhi",
        "txn_id": "T435"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 83738,
        "ch": "ATM",
        "time": "18:59",
        "branch": "Mumbai",
        "txn_id": "T599"
      },
      {
        "dir": "in",
        "other": "A1082",
        "amt": 79198,
        "ch": "ATM",
        "time": "18:36",
        "branch": "Kolkata",
        "txn_id": "T832"
      }
    ]
  },
  {
    "id": "A1080",
    "name": "A1080",
    "type": "Student",
    "age": 21,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9276,368",
    "outflow": "\u20b9361,928",
    "connections": 13,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1080",
        "A1163",
        "A1111",
        "A1080"
      ]
    ],
    "openDate": "2022-01-28",
    "lastTxn": "2024-04-17",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1118",
        "amt": 96930,
        "ch": "IMPS",
        "time": "10:46",
        "branch": "Delhi",
        "txn_id": "T498"
      },
      {
        "dir": "out",
        "other": "A1021",
        "amt": 90390,
        "ch": "ATM",
        "time": "16:13",
        "branch": "Kolkata",
        "txn_id": "T1668"
      },
      {
        "dir": "out",
        "other": "A1163",
        "amt": 79906,
        "ch": "RTGS",
        "time": "21:19",
        "branch": "Mumbai",
        "txn_id": "T116"
      },
      {
        "dir": "in",
        "other": "A1137",
        "amt": 75792,
        "ch": "UPI",
        "time": "12:45",
        "branch": "Chennai",
        "txn_id": "T1596"
      },
      {
        "dir": "out",
        "other": "A1051",
        "amt": 67797,
        "ch": "UPI",
        "time": "01:47",
        "branch": "Bangalore",
        "txn_id": "T1692"
      },
      {
        "dir": "in",
        "other": "A1111",
        "amt": 56536,
        "ch": "NEFT",
        "time": "12:36",
        "branch": "Mumbai",
        "txn_id": "T1784"
      },
      {
        "dir": "out",
        "other": "A1022",
        "amt": 48853,
        "ch": "RTGS",
        "time": "11:56",
        "branch": "Kolkata",
        "txn_id": "T730"
      },
      {
        "dir": "out",
        "other": "A1189",
        "amt": 33465,
        "ch": "ATM",
        "time": "19:24",
        "branch": "Bangalore",
        "txn_id": "T1170"
      }
    ]
  },
  {
    "id": "A1081",
    "name": "A1081",
    "type": "Student",
    "age": 22,
    "risk": "fraud",
    "riskScore": 75,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9472,055",
    "outflow": "\u20b9801,758",
    "connections": 16,
    "dormant": true,
    "structuring": 0,
    "circles": [
      [
        "A1081",
        "A1105",
        "A1032",
        "A1081"
      ],
      [
        "A1081",
        "A1105",
        "A1056",
        "A1081"
      ],
      [
        "A1081",
        "A1019",
        "A1165",
        "A1081"
      ]
    ],
    "openDate": "2023-05-25",
    "lastTxn": "2025-07-30",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1019",
        "amt": 501275,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2030"
      },
      {
        "dir": "in",
        "other": "A1049",
        "amt": 108907,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1953"
      },
      {
        "dir": "out",
        "other": "A1154",
        "amt": 108907,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1954"
      },
      {
        "dir": "out",
        "other": "A1105",
        "amt": 97871,
        "ch": "NEFT",
        "time": "17:29",
        "branch": "Chennai",
        "txn_id": "T616"
      },
      {
        "dir": "out",
        "other": "A1182",
        "amt": 91873,
        "ch": "ATM",
        "time": "00:17",
        "branch": "Kolkata",
        "txn_id": "T1110"
      },
      {
        "dir": "in",
        "other": "A1079",
        "amt": 75091,
        "ch": "NEFT",
        "time": "13:06",
        "branch": "Delhi",
        "txn_id": "T1742"
      },
      {
        "dir": "in",
        "other": "A1165",
        "amt": 58359,
        "ch": "ATM",
        "time": "14:03",
        "branch": "Delhi",
        "txn_id": "T1280"
      },
      {
        "dir": "in",
        "other": "A1085",
        "amt": 48168,
        "ch": "IMPS",
        "time": "02:53",
        "branch": "Mumbai",
        "txn_id": "T1462"
      }
    ]
  },
  {
    "id": "A1082",
    "name": "A1082",
    "type": "Business",
    "age": 57,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9806,411",
    "outflow": "\u20b9970,349",
    "connections": 27,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1082",
        "A1134",
        "A1022",
        "A1082"
      ],
      [
        "A1082",
        "A1135",
        "A1051",
        "A1082"
      ],
      [
        "A1082",
        "A1154",
        "A1180",
        "A1082"
      ]
    ],
    "openDate": "2019-10-22",
    "lastTxn": "2020-05-13",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1008",
        "amt": 223748,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1919"
      },
      {
        "dir": "out",
        "other": "A1185",
        "amt": 222134,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1920"
      },
      {
        "dir": "out",
        "other": "A1135",
        "amt": 96206,
        "ch": "UPI",
        "time": "01:18",
        "branch": "Kolkata",
        "txn_id": "T680"
      },
      {
        "dir": "out",
        "other": "A1163",
        "amt": 91682,
        "ch": "UPI",
        "time": "01:28",
        "branch": "Delhi",
        "txn_id": "T583"
      },
      {
        "dir": "in",
        "other": "A1013",
        "amt": 89590,
        "ch": "ATM",
        "time": "22:19",
        "branch": "Kolkata",
        "txn_id": "T1218"
      },
      {
        "dir": "out",
        "other": "A1074",
        "amt": 88662,
        "ch": "UPI",
        "time": "15:50",
        "branch": "Bangalore",
        "txn_id": "T1014"
      },
      {
        "dir": "out",
        "other": "A1076",
        "amt": 87844,
        "ch": "NEFT",
        "time": "15:57",
        "branch": "Chennai",
        "txn_id": "T609"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 81802,
        "ch": "RTGS",
        "time": "07:12",
        "branch": "Kolkata",
        "txn_id": "T878"
      }
    ]
  },
  {
    "id": "A1083",
    "name": "A1083",
    "type": "Student",
    "age": 19,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9646,034",
    "outflow": "\u20b9528,856",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1083",
        "A1183",
        "A1083"
      ]
    ],
    "openDate": "2015-12-13",
    "lastTxn": "2018-06-24",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1036",
        "amt": 250843,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1905"
      },
      {
        "dir": "out",
        "other": "A1002",
        "amt": 250276,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1906"
      },
      {
        "dir": "in",
        "other": "A1188",
        "amt": 99069,
        "ch": "UPI",
        "time": "08:49",
        "branch": "Bangalore",
        "txn_id": "T757"
      },
      {
        "dir": "in",
        "other": "A1060",
        "amt": 95579,
        "ch": "UPI",
        "time": "10:54",
        "branch": "Bangalore",
        "txn_id": "T1038"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 84642,
        "ch": "IMPS",
        "time": "12:59",
        "branch": "Mumbai",
        "txn_id": "T591"
      },
      {
        "dir": "in",
        "other": "A1183",
        "amt": 74807,
        "ch": "UPI",
        "time": "13:14",
        "branch": "Mumbai",
        "txn_id": "T974"
      },
      {
        "dir": "out",
        "other": "A1067",
        "amt": 71877,
        "ch": "RTGS",
        "time": "19:24",
        "branch": "Kolkata",
        "txn_id": "T1332"
      },
      {
        "dir": "out",
        "other": "A1126",
        "amt": 54013,
        "ch": "UPI",
        "time": "20:41",
        "branch": "Bangalore",
        "txn_id": "T530"
      }
    ]
  },
  {
    "id": "A1084",
    "name": "A1084",
    "type": "Govt Employee",
    "age": 36,
    "risk": "suspicious",
    "riskScore": 50,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b91,698,510",
    "outflow": "\u20b9724,881",
    "connections": 16,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1084",
        "A1059",
        "A1084"
      ],
      [
        "A1084",
        "A1059",
        "A1061",
        "A1084"
      ],
      [
        "A1084",
        "A1154",
        "A1150",
        "A1084"
      ]
    ],
    "openDate": "2016-12-15",
    "lastTxn": "2018-05-12",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1183",
        "amt": 786617,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2023"
      },
      {
        "dir": "out",
        "other": "A1154",
        "amt": 357773,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1928"
      },
      {
        "dir": "in",
        "other": "A1038",
        "amt": 357743,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1927"
      },
      {
        "dir": "out",
        "other": "A1181",
        "amt": 95080,
        "ch": "IMPS",
        "time": "00:09",
        "branch": "Kolkata",
        "txn_id": "T1894"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 79455,
        "ch": "NEFT",
        "time": "23:02",
        "branch": "Kolkata",
        "txn_id": "T1047"
      },
      {
        "dir": "in",
        "other": "A1169",
        "amt": 78350,
        "ch": "IMPS",
        "time": "12:58",
        "branch": "Mumbai",
        "txn_id": "T689"
      },
      {
        "dir": "in",
        "other": "A1036",
        "amt": 77815,
        "ch": "IMPS",
        "time": "02:13",
        "branch": "Bangalore",
        "txn_id": "T433"
      },
      {
        "dir": "out",
        "other": "A1059",
        "amt": 76677,
        "ch": "NEFT",
        "time": "20:41",
        "branch": "Mumbai",
        "txn_id": "T268"
      }
    ]
  },
  {
    "id": "A1085",
    "name": "A1085",
    "type": "Engineer",
    "age": 41,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9162,702",
    "outflow": "\u20b9557,543",
    "connections": 17,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1085",
        "A1039",
        "A1008",
        "A1085"
      ],
      [
        "A1085",
        "A1199",
        "A1049",
        "A1085"
      ],
      [
        "A1085",
        "A1058",
        "A1140",
        "A1085"
      ]
    ],
    "openDate": "2017-08-07",
    "lastTxn": "2020-01-31",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1199",
        "amt": 96918,
        "ch": "RTGS",
        "time": "23:16",
        "branch": "Kolkata",
        "txn_id": "T880"
      },
      {
        "dir": "out",
        "other": "A1058",
        "amt": 80717,
        "ch": "UPI",
        "time": "01:40",
        "branch": "Delhi",
        "txn_id": "T980"
      },
      {
        "dir": "in",
        "other": "A1008",
        "amt": 75813,
        "ch": "UPI",
        "time": "10:39",
        "branch": "Bangalore",
        "txn_id": "T424"
      },
      {
        "dir": "out",
        "other": "A1124",
        "amt": 73347,
        "ch": "RTGS",
        "time": "15:47",
        "branch": "Delhi",
        "txn_id": "T686"
      },
      {
        "dir": "out",
        "other": "A1139",
        "amt": 60311,
        "ch": "ATM",
        "time": "19:48",
        "branch": "Kolkata",
        "txn_id": "T735"
      },
      {
        "dir": "out",
        "other": "A1029",
        "amt": 58190,
        "ch": "NEFT",
        "time": "18:15",
        "branch": "Bangalore",
        "txn_id": "T370"
      },
      {
        "dir": "out",
        "other": "A1081",
        "amt": 48168,
        "ch": "IMPS",
        "time": "02:53",
        "branch": "Mumbai",
        "txn_id": "T1462"
      },
      {
        "dir": "in",
        "other": "A1049",
        "amt": 46587,
        "ch": "RTGS",
        "time": "08:49",
        "branch": "Chennai",
        "txn_id": "T1314"
      }
    ]
  },
  {
    "id": "A1086",
    "name": "A1086",
    "type": "Govt Employee",
    "age": 36,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9366,350",
    "outflow": "\u20b9315,899",
    "connections": 20,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1086",
        "A1013",
        "A1172",
        "A1086"
      ],
      [
        "A1086",
        "A1103",
        "A1086"
      ],
      [
        "A1086",
        "A1103",
        "A1111",
        "A1086"
      ]
    ],
    "openDate": "2022-10-18",
    "lastTxn": "2025-04-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1041",
        "amt": 77672,
        "ch": "UPI",
        "time": "02:45",
        "branch": "Mumbai",
        "txn_id": "T322"
      },
      {
        "dir": "in",
        "other": "A1111",
        "amt": 75299,
        "ch": "RTGS",
        "time": "19:01",
        "branch": "Mumbai",
        "txn_id": "T659"
      },
      {
        "dir": "out",
        "other": "A1152",
        "amt": 74144,
        "ch": "IMPS",
        "time": "12:05",
        "branch": "Mumbai",
        "txn_id": "T1046"
      },
      {
        "dir": "in",
        "other": "A1103",
        "amt": 68282,
        "ch": "RTGS",
        "time": "19:07",
        "branch": "Delhi",
        "txn_id": "T1373"
      },
      {
        "dir": "out",
        "other": "A1014",
        "amt": 48969,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1979"
      },
      {
        "dir": "in",
        "other": "A1135",
        "amt": 48390,
        "ch": "RTGS",
        "time": "04:31",
        "branch": "Chennai",
        "txn_id": "T683"
      },
      {
        "dir": "in",
        "other": "A1150",
        "amt": 46178,
        "ch": "UPI",
        "time": "02:31",
        "branch": "Chennai",
        "txn_id": "T656"
      },
      {
        "dir": "in",
        "other": "A1036",
        "amt": 39646,
        "ch": "ATM",
        "time": "20:55",
        "branch": "Delhi",
        "txn_id": "T995"
      }
    ]
  },
  {
    "id": "A1087",
    "name": "A1087",
    "type": "Freelancer",
    "age": 29,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9212,169",
    "outflow": "\u20b9270,107",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1087",
        "A1069",
        "A1161",
        "A1087"
      ],
      [
        "A1087",
        "A1069",
        "A1097",
        "A1087"
      ],
      [
        "A1087",
        "A1069",
        "A1132",
        "A1087"
      ]
    ],
    "openDate": "2021-06-25",
    "lastTxn": "2024-01-16",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1111",
        "amt": 96220,
        "ch": "NEFT",
        "time": "06:55",
        "branch": "Bangalore",
        "txn_id": "T888"
      },
      {
        "dir": "out",
        "other": "A1118",
        "amt": 91851,
        "ch": "UPI",
        "time": "18:56",
        "branch": "Kolkata",
        "txn_id": "T523"
      },
      {
        "dir": "in",
        "other": "A1022",
        "amt": 61190,
        "ch": "UPI",
        "time": "20:47",
        "branch": "Mumbai",
        "txn_id": "T594"
      },
      {
        "dir": "in",
        "other": "A1017",
        "amt": 43031,
        "ch": "NEFT",
        "time": "18:52",
        "branch": "Delhi",
        "txn_id": "T1183"
      },
      {
        "dir": "out",
        "other": "A1068",
        "amt": 39874,
        "ch": "ATM",
        "time": "09:16",
        "branch": "Delhi",
        "txn_id": "T849"
      },
      {
        "dir": "in",
        "other": "A1006",
        "amt": 29424,
        "ch": "NEFT",
        "time": "22:48",
        "branch": "Bangalore",
        "txn_id": "T1324"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 29163,
        "ch": "NEFT",
        "time": "15:56",
        "branch": "Mumbai",
        "txn_id": "T673"
      },
      {
        "dir": "in",
        "other": "A1132",
        "amt": 25548,
        "ch": "NEFT",
        "time": "08:53",
        "branch": "Chennai",
        "txn_id": "T215"
      }
    ]
  },
  {
    "id": "A1088",
    "name": "A1088",
    "type": "Student",
    "age": 29,
    "risk": "fraud",
    "riskScore": 98,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9842,064",
    "outflow": "\u20b91,606,811",
    "connections": 29,
    "dormant": true,
    "structuring": 2,
    "circles": [
      [
        "A1088",
        "A1072",
        "A1052",
        "A1088"
      ],
      [
        "A1088",
        "A1002",
        "A1088"
      ],
      [
        "A1088",
        "A1003",
        "A1088"
      ]
    ],
    "openDate": "2015-06-25",
    "lastTxn": "2016-02-02",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1162",
        "amt": 749293,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2029"
      },
      {
        "dir": "out",
        "other": "A1125",
        "amt": 125149,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1959"
      },
      {
        "dir": "in",
        "other": "A1000",
        "amt": 125149,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1961"
      },
      {
        "dir": "in",
        "other": "A1054",
        "amt": 96115,
        "ch": "UPI",
        "time": "22:59",
        "branch": "Mumbai",
        "txn_id": "T1103"
      },
      {
        "dir": "in",
        "other": "A1089",
        "amt": 94825,
        "ch": "UPI",
        "time": "09:01",
        "branch": "Chennai",
        "txn_id": "T1424"
      },
      {
        "dir": "out",
        "other": "A1135",
        "amt": 94691,
        "ch": "IMPS",
        "time": "16:07",
        "branch": "Chennai",
        "txn_id": "T927"
      },
      {
        "dir": "out",
        "other": "A1139",
        "amt": 94434,
        "ch": "RTGS",
        "time": "19:23",
        "branch": "Kolkata",
        "txn_id": "T1379"
      },
      {
        "dir": "out",
        "other": "A1187",
        "amt": 87566,
        "ch": "NEFT",
        "time": "03:02",
        "branch": "Chennai",
        "txn_id": "T1163"
      }
    ]
  },
  {
    "id": "A1089",
    "name": "A1089",
    "type": "Govt Employee",
    "age": 31,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9365,039",
    "outflow": "\u20b9720,387",
    "connections": 18,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1089",
        "A1015",
        "A1064",
        "A1089"
      ],
      [
        "A1089",
        "A1015",
        "A1171",
        "A1089"
      ],
      [
        "A1089",
        "A1053",
        "A1107",
        "A1089"
      ]
    ],
    "openDate": "2020-09-04",
    "lastTxn": "2020-10-18",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1088",
        "amt": 94825,
        "ch": "UPI",
        "time": "09:01",
        "branch": "Chennai",
        "txn_id": "T1424"
      },
      {
        "dir": "out",
        "other": "A1191",
        "amt": 92024,
        "ch": "ATM",
        "time": "03:49",
        "branch": "Delhi",
        "txn_id": "T1762"
      },
      {
        "dir": "out",
        "other": "A1015",
        "amt": 89154,
        "ch": "NEFT",
        "time": "16:52",
        "branch": "Chennai",
        "txn_id": "T759"
      },
      {
        "dir": "out",
        "other": "A1006",
        "amt": 84078,
        "ch": "ATM",
        "time": "19:37",
        "branch": "Delhi",
        "txn_id": "T1159"
      },
      {
        "dir": "out",
        "other": "A1041",
        "amt": 79933,
        "ch": "IMPS",
        "time": "07:32",
        "branch": "Kolkata",
        "txn_id": "T772"
      },
      {
        "dir": "in",
        "other": "A1107",
        "amt": 76288,
        "ch": "RTGS",
        "time": "10:49",
        "branch": "Chennai",
        "txn_id": "T131"
      },
      {
        "dir": "out",
        "other": "A1110",
        "amt": 74277,
        "ch": "IMPS",
        "time": "12:29",
        "branch": "Mumbai",
        "txn_id": "T1417"
      },
      {
        "dir": "in",
        "other": "A1075",
        "amt": 70877,
        "ch": "RTGS",
        "time": "12:09",
        "branch": "Kolkata",
        "txn_id": "T1608"
      }
    ]
  },
  {
    "id": "A1090",
    "name": "A1090",
    "type": "Doctor",
    "age": 63,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9191,390",
    "outflow": "\u20b9867,192",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1090",
        "A1025",
        "A1123",
        "A1090"
      ],
      [
        "A1090",
        "A1139",
        "A1143",
        "A1090"
      ],
      [
        "A1090",
        "A1030",
        "A1123",
        "A1090"
      ]
    ],
    "openDate": "2015-11-23",
    "lastTxn": "2016-11-10",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1025",
        "amt": 97787,
        "ch": "RTGS",
        "time": "03:57",
        "branch": "Chennai",
        "txn_id": "T926"
      },
      {
        "dir": "out",
        "other": "A1021",
        "amt": 94299,
        "ch": "ATM",
        "time": "21:53",
        "branch": "Delhi",
        "txn_id": "T483"
      },
      {
        "dir": "out",
        "other": "A1031",
        "amt": 90938,
        "ch": "ATM",
        "time": "17:33",
        "branch": "Mumbai",
        "txn_id": "T1449"
      },
      {
        "dir": "out",
        "other": "A1107",
        "amt": 86692,
        "ch": "ATM",
        "time": "23:24",
        "branch": "Delhi",
        "txn_id": "T321"
      },
      {
        "dir": "out",
        "other": "A1099",
        "amt": 79442,
        "ch": "IMPS",
        "time": "04:48",
        "branch": "Delhi",
        "txn_id": "T1299"
      },
      {
        "dir": "out",
        "other": "A1193",
        "amt": 78962,
        "ch": "IMPS",
        "time": "02:05",
        "branch": "Bangalore",
        "txn_id": "T973"
      },
      {
        "dir": "out",
        "other": "A1139",
        "amt": 66960,
        "ch": "NEFT",
        "time": "19:58",
        "branch": "Kolkata",
        "txn_id": "T1543"
      },
      {
        "dir": "in",
        "other": "A1123",
        "amt": 62237,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1948"
      }
    ]
  },
  {
    "id": "A1091",
    "name": "A1091",
    "type": "Student",
    "age": 49,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9601,295",
    "outflow": "\u20b9917,783",
    "connections": 27,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1091",
        "A1155",
        "A1003",
        "A1091"
      ],
      [
        "A1091",
        "A1155",
        "A1031",
        "A1091"
      ],
      [
        "A1091",
        "A1004",
        "A1031",
        "A1091"
      ]
    ],
    "openDate": "2015-04-02",
    "lastTxn": "2017-09-15",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1193",
        "amt": 98942,
        "ch": "RTGS",
        "time": "07:54",
        "branch": "Mumbai",
        "txn_id": "T760"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 98305,
        "ch": "IMPS",
        "time": "20:38",
        "branch": "Delhi",
        "txn_id": "T1204"
      },
      {
        "dir": "in",
        "other": "A1020",
        "amt": 97505,
        "ch": "NEFT",
        "time": "09:51",
        "branch": "Chennai",
        "txn_id": "T1801"
      },
      {
        "dir": "in",
        "other": "A1137",
        "amt": 93008,
        "ch": "RTGS",
        "time": "16:17",
        "branch": "Mumbai",
        "txn_id": "T872"
      },
      {
        "dir": "out",
        "other": "A1004",
        "amt": 89992,
        "ch": "ATM",
        "time": "14:21",
        "branch": "Bangalore",
        "txn_id": "T1111"
      },
      {
        "dir": "in",
        "other": "A1003",
        "amt": 89765,
        "ch": "UPI",
        "time": "07:34",
        "branch": "Mumbai",
        "txn_id": "T184"
      },
      {
        "dir": "out",
        "other": "A1057",
        "amt": 88503,
        "ch": "IMPS",
        "time": "05:10",
        "branch": "Chennai",
        "txn_id": "T186"
      },
      {
        "dir": "out",
        "other": "A1136",
        "amt": 87107,
        "ch": "ATM",
        "time": "02:51",
        "branch": "Mumbai",
        "txn_id": "T728"
      }
    ]
  },
  {
    "id": "A1092",
    "name": "A1092",
    "type": "Teacher",
    "age": 21,
    "risk": "suspicious",
    "riskScore": 58,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9234,956",
    "outflow": "\u20b9229,388",
    "connections": 12,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1092",
        "A1114",
        "A1092"
      ],
      [
        "A1092",
        "A1088",
        "A1048",
        "A1092"
      ],
      [
        "A1092",
        "A1051",
        "A1149",
        "A1092"
      ]
    ],
    "openDate": "2015-03-22",
    "lastTxn": "2016-09-19",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1158",
        "amt": 80055,
        "ch": "IMPS",
        "time": "13:37",
        "branch": "Delhi",
        "txn_id": "T460"
      },
      {
        "dir": "in",
        "other": "A1149",
        "amt": 59591,
        "ch": "RTGS",
        "time": "02:31",
        "branch": "Kolkata",
        "txn_id": "T113"
      },
      {
        "dir": "out",
        "other": "A1051",
        "amt": 56924,
        "ch": "NEFT",
        "time": "00:59",
        "branch": "Mumbai",
        "txn_id": "T212"
      },
      {
        "dir": "out",
        "other": "A1114",
        "amt": 49377,
        "ch": "NEFT",
        "time": "00:26",
        "branch": "Mumbai",
        "txn_id": "T358"
      },
      {
        "dir": "in",
        "other": "A1067",
        "amt": 48360,
        "ch": "ATM",
        "time": "03:00",
        "branch": "Bangalore",
        "txn_id": "T502"
      },
      {
        "dir": "out",
        "other": "A1116",
        "amt": 35228,
        "ch": "UPI",
        "time": "01:16",
        "branch": "Kolkata",
        "txn_id": "T1021"
      },
      {
        "dir": "out",
        "other": "A1154",
        "amt": 35015,
        "ch": "ATM",
        "time": "11:56",
        "branch": "Kolkata",
        "txn_id": "T347"
      },
      {
        "dir": "out",
        "other": "A1044",
        "amt": 34701,
        "ch": "IMPS",
        "time": "22:59",
        "branch": "Bangalore",
        "txn_id": "T1893"
      }
    ]
  },
  {
    "id": "A1093",
    "name": "A1093",
    "type": "Business",
    "age": 25,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9445,046",
    "outflow": "\u20b9443,586",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1093",
        "A1157",
        "A1152",
        "A1093"
      ],
      [
        "A1093",
        "A1161",
        "A1192",
        "A1093"
      ],
      [
        "A1093",
        "A1016",
        "A1024",
        "A1093"
      ]
    ],
    "openDate": "2023-09-27",
    "lastTxn": "2023-10-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1052",
        "amt": 92357,
        "ch": "UPI",
        "time": "12:50",
        "branch": "Bangalore",
        "txn_id": "T1839"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 81893,
        "ch": "UPI",
        "time": "03:16",
        "branch": "Kolkata",
        "txn_id": "T875"
      },
      {
        "dir": "in",
        "other": "A1125",
        "amt": 75536,
        "ch": "UPI",
        "time": "14:21",
        "branch": "Kolkata",
        "txn_id": "T1821"
      },
      {
        "dir": "in",
        "other": "A1024",
        "amt": 59816,
        "ch": "NEFT",
        "time": "20:42",
        "branch": "Delhi",
        "txn_id": "T415"
      },
      {
        "dir": "in",
        "other": "A1064",
        "amt": 59063,
        "ch": "ATM",
        "time": "19:58",
        "branch": "Chennai",
        "txn_id": "T1500"
      },
      {
        "dir": "out",
        "other": "A1045",
        "amt": 58764,
        "ch": "RTGS",
        "time": "08:37",
        "branch": "Chennai",
        "txn_id": "T295"
      },
      {
        "dir": "out",
        "other": "A1027",
        "amt": 54489,
        "ch": "ATM",
        "time": "16:50",
        "branch": "Delhi",
        "txn_id": "T972"
      },
      {
        "dir": "out",
        "other": "A1016",
        "amt": 53811,
        "ch": "UPI",
        "time": "13:00",
        "branch": "Chennai",
        "txn_id": "T364"
      }
    ]
  },
  {
    "id": "A1094",
    "name": "A1094",
    "type": "Freelancer",
    "age": 23,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9748,267",
    "outflow": "\u20b9223,654",
    "connections": 18,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1094",
        "A1173",
        "A1033",
        "A1094"
      ],
      [
        "A1094",
        "A1176",
        "A1008",
        "A1094"
      ],
      [
        "A1094",
        "A1025",
        "A1138",
        "A1094"
      ]
    ],
    "openDate": "2019-06-02",
    "lastTxn": "2020-12-04",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1150",
        "amt": 92840,
        "ch": "ATM",
        "time": "15:37",
        "branch": "Delhi",
        "txn_id": "T924"
      },
      {
        "dir": "in",
        "other": "A1138",
        "amt": 90925,
        "ch": "UPI",
        "time": "21:34",
        "branch": "Mumbai",
        "txn_id": "T1187"
      },
      {
        "dir": "in",
        "other": "A1012",
        "amt": 88089,
        "ch": "UPI",
        "time": "22:40",
        "branch": "Chennai",
        "txn_id": "T1489"
      },
      {
        "dir": "in",
        "other": "A1167",
        "amt": 80302,
        "ch": "NEFT",
        "time": "14:56",
        "branch": "Delhi",
        "txn_id": "T242"
      },
      {
        "dir": "in",
        "other": "A1079",
        "amt": 79056,
        "ch": "NEFT",
        "time": "02:35",
        "branch": "Bangalore",
        "txn_id": "T724"
      },
      {
        "dir": "in",
        "other": "A1193",
        "amt": 67992,
        "ch": "RTGS",
        "time": "19:17",
        "branch": "Kolkata",
        "txn_id": "T228"
      },
      {
        "dir": "in",
        "other": "A1019",
        "amt": 67682,
        "ch": "IMPS",
        "time": "18:33",
        "branch": "Kolkata",
        "txn_id": "T1726"
      },
      {
        "dir": "in",
        "other": "A1075",
        "amt": 57229,
        "ch": "RTGS",
        "time": "14:35",
        "branch": "Kolkata",
        "txn_id": "T1089"
      }
    ]
  },
  {
    "id": "A1095",
    "name": "A1095",
    "type": "Business",
    "age": 19,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9402,009",
    "outflow": "\u20b9632,255",
    "connections": 19,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1095",
        "A1173",
        "A1145",
        "A1095"
      ],
      [
        "A1095",
        "A1116",
        "A1040",
        "A1095"
      ],
      [
        "A1095",
        "A1127",
        "A1062",
        "A1095"
      ]
    ],
    "openDate": "2016-03-10",
    "lastTxn": "2016-07-05",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1116",
        "amt": 86195,
        "ch": "IMPS",
        "time": "10:00",
        "branch": "Mumbai",
        "txn_id": "T856"
      },
      {
        "dir": "out",
        "other": "A1180",
        "amt": 82828,
        "ch": "UPI",
        "time": "01:04",
        "branch": "Delhi",
        "txn_id": "T1447"
      },
      {
        "dir": "in",
        "other": "A1062",
        "amt": 81191,
        "ch": "ATM",
        "time": "22:38",
        "branch": "Bangalore",
        "txn_id": "T504"
      },
      {
        "dir": "out",
        "other": "A1118",
        "amt": 69677,
        "ch": "IMPS",
        "time": "18:17",
        "branch": "Bangalore",
        "txn_id": "T597"
      },
      {
        "dir": "out",
        "other": "A1030",
        "amt": 69347,
        "ch": "NEFT",
        "time": "18:23",
        "branch": "Bangalore",
        "txn_id": "T793"
      },
      {
        "dir": "out",
        "other": "A1166",
        "amt": 64996,
        "ch": "IMPS",
        "time": "13:04",
        "branch": "Delhi",
        "txn_id": "T936"
      },
      {
        "dir": "in",
        "other": "A1012",
        "amt": 61847,
        "ch": "ATM",
        "time": "18:55",
        "branch": "Mumbai",
        "txn_id": "T1738"
      },
      {
        "dir": "out",
        "other": "A1007",
        "amt": 55809,
        "ch": "RTGS",
        "time": "00:30",
        "branch": "Kolkata",
        "txn_id": "T1206"
      }
    ]
  },
  {
    "id": "A1096",
    "name": "A1096",
    "type": "Govt Employee",
    "age": 39,
    "risk": "suspicious",
    "riskScore": 50,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9152,825",
    "outflow": "\u20b91,432,897",
    "connections": 18,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1096",
        "A1096",
        "A1096"
      ],
      [
        "A1096",
        "A1154",
        "A1172",
        "A1096"
      ]
    ],
    "openDate": "2019-08-11",
    "lastTxn": "2021-12-19",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1142",
        "amt": 682041,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2022"
      },
      {
        "dir": "out",
        "other": "A1009",
        "amt": 92235,
        "ch": "UPI",
        "time": "02:30",
        "branch": "Chennai",
        "txn_id": "T645"
      },
      {
        "dir": "out",
        "other": "A1154",
        "amt": 88265,
        "ch": "UPI",
        "time": "13:37",
        "branch": "Delhi",
        "txn_id": "T619"
      },
      {
        "dir": "out",
        "other": "A1029",
        "amt": 82103,
        "ch": "NEFT",
        "time": "19:30",
        "branch": "Mumbai",
        "txn_id": "T641"
      },
      {
        "dir": "out",
        "other": "A1037",
        "amt": 78237,
        "ch": "NEFT",
        "time": "14:53",
        "branch": "Chennai",
        "txn_id": "T595"
      },
      {
        "dir": "out",
        "other": "A1014",
        "amt": 76373,
        "ch": "UPI",
        "time": "12:36",
        "branch": "Kolkata",
        "txn_id": "T1754"
      },
      {
        "dir": "out",
        "other": "A1038",
        "amt": 72185,
        "ch": "IMPS",
        "time": "00:57",
        "branch": "Bangalore",
        "txn_id": "T901"
      },
      {
        "dir": "out",
        "other": "A1024",
        "amt": 65373,
        "ch": "NEFT",
        "time": "07:43",
        "branch": "Delhi",
        "txn_id": "T1119"
      }
    ]
  },
  {
    "id": "A1097",
    "name": "A1097",
    "type": "Engineer",
    "age": 39,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9737,667",
    "outflow": "\u20b91,166,811",
    "connections": 23,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1097",
        "A1087",
        "A1069",
        "A1097"
      ],
      [
        "A1097",
        "A1087",
        "A1118",
        "A1097"
      ],
      [
        "A1097",
        "A1087",
        "A1100",
        "A1097"
      ]
    ],
    "openDate": "2020-01-03",
    "lastTxn": "2022-03-24",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1022",
        "amt": 320379,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1904"
      },
      {
        "dir": "in",
        "other": "A1154",
        "amt": 319237,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1903"
      },
      {
        "dir": "out",
        "other": "A1122",
        "amt": 99273,
        "ch": "IMPS",
        "time": "04:59",
        "branch": "Bangalore",
        "txn_id": "T336"
      },
      {
        "dir": "out",
        "other": "A1072",
        "amt": 90643,
        "ch": "RTGS",
        "time": "13:16",
        "branch": "Bangalore",
        "txn_id": "T651"
      },
      {
        "dir": "out",
        "other": "A1000",
        "amt": 90490,
        "ch": "UPI",
        "time": "03:39",
        "branch": "Bangalore",
        "txn_id": "T752"
      },
      {
        "dir": "in",
        "other": "A1119",
        "amt": 89998,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1473"
      },
      {
        "dir": "out",
        "other": "A1051",
        "amt": 88122,
        "ch": "IMPS",
        "time": "18:51",
        "branch": "Bangalore",
        "txn_id": "T140"
      },
      {
        "dir": "out",
        "other": "A1163",
        "amt": 79918,
        "ch": "UPI",
        "time": "12:47",
        "branch": "Delhi",
        "txn_id": "T1291"
      }
    ]
  },
  {
    "id": "A1098",
    "name": "A1098",
    "type": "Student",
    "age": 35,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b982,203",
    "outflow": "\u20b9443,725",
    "connections": 10,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1098",
        "A1103",
        "A1139",
        "A1098"
      ]
    ],
    "openDate": "2020-02-15",
    "lastTxn": "2020-07-22",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1124",
        "amt": 95629,
        "ch": "ATM",
        "time": "21:26",
        "branch": "Mumbai",
        "txn_id": "T188"
      },
      {
        "dir": "in",
        "other": "A1139",
        "amt": 82203,
        "ch": "UPI",
        "time": "08:18",
        "branch": "Chennai",
        "txn_id": "T1018"
      },
      {
        "dir": "out",
        "other": "A1133",
        "amt": 77338,
        "ch": "ATM",
        "time": "15:27",
        "branch": "Chennai",
        "txn_id": "T1128"
      },
      {
        "dir": "out",
        "other": "A1021",
        "amt": 60155,
        "ch": "ATM",
        "time": "12:04",
        "branch": "Delhi",
        "txn_id": "T1557"
      },
      {
        "dir": "out",
        "other": "A1103",
        "amt": 53500,
        "ch": "UPI",
        "time": "12:08",
        "branch": "Kolkata",
        "txn_id": "T482"
      },
      {
        "dir": "out",
        "other": "A1042",
        "amt": 51487,
        "ch": "NEFT",
        "time": "14:39",
        "branch": "Kolkata",
        "txn_id": "T1212"
      },
      {
        "dir": "out",
        "other": "A1147",
        "amt": 42055,
        "ch": "IMPS",
        "time": "03:12",
        "branch": "Kolkata",
        "txn_id": "T1114"
      },
      {
        "dir": "out",
        "other": "A1008",
        "amt": 33763,
        "ch": "ATM",
        "time": "23:11",
        "branch": "Delhi",
        "txn_id": "T590"
      }
    ]
  },
  {
    "id": "A1099",
    "name": "A1099",
    "type": "Engineer",
    "age": 54,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9737,884",
    "outflow": "\u20b9488,780",
    "connections": 20,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1099",
        "A1067",
        "A1165",
        "A1099"
      ],
      [
        "A1099",
        "A1067",
        "A1141",
        "A1099"
      ],
      [
        "A1099",
        "A1165",
        "A1099"
      ]
    ],
    "openDate": "2023-02-25",
    "lastTxn": "2024-03-15",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1062",
        "amt": 93314,
        "ch": "UPI",
        "time": "04:20",
        "branch": "Bangalore",
        "txn_id": "T1772"
      },
      {
        "dir": "out",
        "other": "A1011",
        "amt": 92182,
        "ch": "IMPS",
        "time": "19:40",
        "branch": "Mumbai",
        "txn_id": "T1672"
      },
      {
        "dir": "in",
        "other": "A1132",
        "amt": 89128,
        "ch": "IMPS",
        "time": "00:15",
        "branch": "Mumbai",
        "txn_id": "T238"
      },
      {
        "dir": "out",
        "other": "A1062",
        "amt": 88343,
        "ch": "RTGS",
        "time": "00:16",
        "branch": "Kolkata",
        "txn_id": "T932"
      },
      {
        "dir": "in",
        "other": "A1104",
        "amt": 84859,
        "ch": "UPI",
        "time": "15:24",
        "branch": "Chennai",
        "txn_id": "T1130"
      },
      {
        "dir": "in",
        "other": "A1141",
        "amt": 84514,
        "ch": "RTGS",
        "time": "08:50",
        "branch": "Chennai",
        "txn_id": "T653"
      },
      {
        "dir": "in",
        "other": "A1194",
        "amt": 82238,
        "ch": "RTGS",
        "time": "06:27",
        "branch": "Delhi",
        "txn_id": "T827"
      },
      {
        "dir": "in",
        "other": "A1090",
        "amt": 79442,
        "ch": "IMPS",
        "time": "04:48",
        "branch": "Delhi",
        "txn_id": "T1299"
      }
    ]
  },
  {
    "id": "A1100",
    "name": "A1100",
    "type": "Student",
    "age": 51,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9815,407",
    "outflow": "\u20b91,208,142",
    "connections": 23,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1100",
        "A1141",
        "A1053",
        "A1100"
      ],
      [
        "A1100",
        "A1141",
        "A1066",
        "A1100"
      ],
      [
        "A1100",
        "A1156",
        "A1082",
        "A1100"
      ]
    ],
    "openDate": "2017-05-19",
    "lastTxn": "2019-03-18",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1123",
        "amt": 358865,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1921"
      },
      {
        "dir": "out",
        "other": "A1181",
        "amt": 285091,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1936"
      },
      {
        "dir": "in",
        "other": "A1068",
        "amt": 285016,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1935"
      },
      {
        "dir": "in",
        "other": "A1053",
        "amt": 145490,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1956"
      },
      {
        "dir": "out",
        "other": "A1186",
        "amt": 145490,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1957"
      },
      {
        "dir": "in",
        "other": "A1152",
        "amt": 98210,
        "ch": "NEFT",
        "time": "04:37",
        "branch": "Chennai",
        "txn_id": "T208"
      },
      {
        "dir": "in",
        "other": "A1189",
        "amt": 89800,
        "ch": "UPI",
        "time": "06:43",
        "branch": "Bangalore",
        "txn_id": "T1669"
      },
      {
        "dir": "in",
        "other": "A1104",
        "amt": 76468,
        "ch": "RTGS",
        "time": "17:35",
        "branch": "Delhi",
        "txn_id": "T1261"
      }
    ]
  },
  {
    "id": "A1101",
    "name": "A1101",
    "type": "Engineer",
    "age": 24,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9520,023",
    "outflow": "\u20b9550,212",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1101",
        "A1073",
        "A1142",
        "A1101"
      ],
      [
        "A1101",
        "A1064",
        "A1142",
        "A1101"
      ],
      [
        "A1101",
        "A1064",
        "A1147",
        "A1101"
      ]
    ],
    "openDate": "2018-11-13",
    "lastTxn": "2019-10-07",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1112",
        "amt": 204197,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1916"
      },
      {
        "dir": "in",
        "other": "A1147",
        "amt": 202926,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1915"
      },
      {
        "dir": "out",
        "other": "A1155",
        "amt": 98552,
        "ch": "UPI",
        "time": "17:45",
        "branch": "Mumbai",
        "txn_id": "T1795"
      },
      {
        "dir": "in",
        "other": "A1189",
        "amt": 81291,
        "ch": "NEFT",
        "time": "16:03",
        "branch": "Bangalore",
        "txn_id": "T582"
      },
      {
        "dir": "in",
        "other": "A1009",
        "amt": 71929,
        "ch": "NEFT",
        "time": "08:30",
        "branch": "Kolkata",
        "txn_id": "T1650"
      },
      {
        "dir": "out",
        "other": "A1016",
        "amt": 69538,
        "ch": "IMPS",
        "time": "15:37",
        "branch": "Bangalore",
        "txn_id": "T1859"
      },
      {
        "dir": "out",
        "other": "A1157",
        "amt": 62725,
        "ch": "UPI",
        "time": "05:40",
        "branch": "Kolkata",
        "txn_id": "T162"
      },
      {
        "dir": "in",
        "other": "A1037",
        "amt": 58056,
        "ch": "UPI",
        "time": "07:39",
        "branch": "Bangalore",
        "txn_id": "T507"
      }
    ]
  },
  {
    "id": "A1102",
    "name": "A1102",
    "type": "Business",
    "age": 44,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9655,804",
    "outflow": "\u20b9810,159",
    "connections": 16,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1102",
        "A1024",
        "A1112",
        "A1102"
      ],
      [
        "A1102",
        "A1024",
        "A1050",
        "A1102"
      ],
      [
        "A1102",
        "A1116",
        "A1079",
        "A1102"
      ]
    ],
    "openDate": "2016-08-31",
    "lastTxn": "2018-08-18",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1112",
        "amt": 287527,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1933"
      },
      {
        "dir": "out",
        "other": "A1068",
        "amt": 284771,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1934"
      },
      {
        "dir": "out",
        "other": "A1165",
        "amt": 93002,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1944"
      },
      {
        "dir": "in",
        "other": "A1045",
        "amt": 93002,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1946"
      },
      {
        "dir": "out",
        "other": "A1018",
        "amt": 89052,
        "ch": "NEFT",
        "time": "18:51",
        "branch": "Mumbai",
        "txn_id": "T396"
      },
      {
        "dir": "out",
        "other": "A1024",
        "amt": 88675,
        "ch": "IMPS",
        "time": "12:14",
        "branch": "Chennai",
        "txn_id": "T1860"
      },
      {
        "dir": "in",
        "other": "A1177",
        "amt": 85934,
        "ch": "ATM",
        "time": "19:55",
        "branch": "Bangalore",
        "txn_id": "T697"
      },
      {
        "dir": "out",
        "other": "A1104",
        "amt": 84562,
        "ch": "ATM",
        "time": "06:48",
        "branch": "Chennai",
        "txn_id": "T1306"
      }
    ]
  },
  {
    "id": "A1103",
    "name": "A1103",
    "type": "Doctor",
    "age": 52,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9594,057",
    "outflow": "\u20b9718,925",
    "connections": 19,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1103",
        "A1139",
        "A1098",
        "A1103"
      ],
      [
        "A1103",
        "A1169",
        "A1108",
        "A1103"
      ],
      [
        "A1103",
        "A1169",
        "A1051",
        "A1103"
      ]
    ],
    "openDate": "2017-11-07",
    "lastTxn": "2020-06-09",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1051",
        "amt": 96202,
        "ch": "ATM",
        "time": "03:13",
        "branch": "Mumbai",
        "txn_id": "T811"
      },
      {
        "dir": "in",
        "other": "A1108",
        "amt": 94287,
        "ch": "IMPS",
        "time": "05:29",
        "branch": "Bangalore",
        "txn_id": "T1826"
      },
      {
        "dir": "out",
        "other": "A1174",
        "amt": 93125,
        "ch": "ATM",
        "time": "11:44",
        "branch": "Mumbai",
        "txn_id": "T1434"
      },
      {
        "dir": "in",
        "other": "A1163",
        "amt": 84518,
        "ch": "IMPS",
        "time": "01:57",
        "branch": "Kolkata",
        "txn_id": "T816"
      },
      {
        "dir": "out",
        "other": "A1004",
        "amt": 77300,
        "ch": "ATM",
        "time": "08:09",
        "branch": "Chennai",
        "txn_id": "T646"
      },
      {
        "dir": "out",
        "other": "A1049",
        "amt": 69478,
        "ch": "RTGS",
        "time": "21:46",
        "branch": "Mumbai",
        "txn_id": "T515"
      },
      {
        "dir": "in",
        "other": "A1034",
        "amt": 69182,
        "ch": "UPI",
        "time": "19:19",
        "branch": "Chennai",
        "txn_id": "T1625"
      },
      {
        "dir": "out",
        "other": "A1086",
        "amt": 68282,
        "ch": "RTGS",
        "time": "19:07",
        "branch": "Delhi",
        "txn_id": "T1373"
      }
    ]
  },
  {
    "id": "A1104",
    "name": "A1104",
    "type": "Govt Employee",
    "age": 36,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9596,834",
    "outflow": "\u20b9782,086",
    "connections": 24,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1104",
        "A1024",
        "A1136",
        "A1104"
      ],
      [
        "A1104",
        "A1064",
        "A1069",
        "A1104"
      ],
      [
        "A1104",
        "A1142",
        "A1136",
        "A1104"
      ]
    ],
    "openDate": "2022-11-07",
    "lastTxn": "2023-10-20",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1136",
        "amt": 91294,
        "ch": "NEFT",
        "time": "22:44",
        "branch": "Mumbai",
        "txn_id": "T1822"
      },
      {
        "dir": "in",
        "other": "A1182",
        "amt": 89671,
        "ch": "IMPS",
        "time": "08:48",
        "branch": "Delhi",
        "txn_id": "T566"
      },
      {
        "dir": "out",
        "other": "A1099",
        "amt": 84859,
        "ch": "UPI",
        "time": "15:24",
        "branch": "Chennai",
        "txn_id": "T1130"
      },
      {
        "dir": "in",
        "other": "A1102",
        "amt": 84562,
        "ch": "ATM",
        "time": "06:48",
        "branch": "Chennai",
        "txn_id": "T1306"
      },
      {
        "dir": "out",
        "other": "A1188",
        "amt": 82292,
        "ch": "RTGS",
        "time": "10:07",
        "branch": "Chennai",
        "txn_id": "T1835"
      },
      {
        "dir": "out",
        "other": "A1002",
        "amt": 81192,
        "ch": "RTGS",
        "time": "04:02",
        "branch": "Mumbai",
        "txn_id": "T1793"
      },
      {
        "dir": "in",
        "other": "A1197",
        "amt": 78411,
        "ch": "ATM",
        "time": "17:52",
        "branch": "Chennai",
        "txn_id": "T532"
      },
      {
        "dir": "out",
        "other": "A1100",
        "amt": 76468,
        "ch": "RTGS",
        "time": "17:35",
        "branch": "Delhi",
        "txn_id": "T1261"
      }
    ]
  },
  {
    "id": "A1105",
    "name": "A1105",
    "type": "Freelancer",
    "age": 45,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9348,959",
    "outflow": "\u20b9520,622",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1105",
        "A1130",
        "A1056",
        "A1105"
      ],
      [
        "A1105",
        "A1077",
        "A1112",
        "A1105"
      ],
      [
        "A1105",
        "A1032",
        "A1081",
        "A1105"
      ]
    ],
    "openDate": "2020-04-30",
    "lastTxn": "2022-01-31",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1081",
        "amt": 97871,
        "ch": "NEFT",
        "time": "17:29",
        "branch": "Chennai",
        "txn_id": "T616"
      },
      {
        "dir": "out",
        "other": "A1130",
        "amt": 93110,
        "ch": "UPI",
        "time": "10:00",
        "branch": "Delhi",
        "txn_id": "T1439"
      },
      {
        "dir": "out",
        "other": "A1046",
        "amt": 90647,
        "ch": "RTGS",
        "time": "17:36",
        "branch": "Chennai",
        "txn_id": "T1437"
      },
      {
        "dir": "out",
        "other": "A1032",
        "amt": 86070,
        "ch": "NEFT",
        "time": "21:41",
        "branch": "Bangalore",
        "txn_id": "T1464"
      },
      {
        "dir": "in",
        "other": "A1056",
        "amt": 83806,
        "ch": "IMPS",
        "time": "19:56",
        "branch": "Bangalore",
        "txn_id": "T1406"
      },
      {
        "dir": "in",
        "other": "A1112",
        "amt": 81974,
        "ch": "RTGS",
        "time": "20:21",
        "branch": "Delhi",
        "txn_id": "T1556"
      },
      {
        "dir": "out",
        "other": "A1077",
        "amt": 79222,
        "ch": "IMPS",
        "time": "14:35",
        "branch": "Chennai",
        "txn_id": "T1511"
      },
      {
        "dir": "in",
        "other": "A1139",
        "amt": 74464,
        "ch": "RTGS",
        "time": "06:26",
        "branch": "Bangalore",
        "txn_id": "T578"
      }
    ]
  },
  {
    "id": "A1106",
    "name": "A1106",
    "type": "Govt Employee",
    "age": 62,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9405,871",
    "outflow": "\u20b9297,783",
    "connections": 15,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1106",
        "A1025",
        "A1127",
        "A1106"
      ]
    ],
    "openDate": "2018-09-02",
    "lastTxn": "2019-01-28",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1153",
        "amt": 86194,
        "ch": "ATM",
        "time": "01:55",
        "branch": "Delhi",
        "txn_id": "T586"
      },
      {
        "dir": "in",
        "other": "A1121",
        "amt": 79655,
        "ch": "ATM",
        "time": "01:57",
        "branch": "Bangalore",
        "txn_id": "T1687"
      },
      {
        "dir": "out",
        "other": "A1112",
        "amt": 77296,
        "ch": "RTGS",
        "time": "02:01",
        "branch": "Bangalore",
        "txn_id": "T1829"
      },
      {
        "dir": "in",
        "other": "A1103",
        "amt": 62537,
        "ch": "NEFT",
        "time": "00:43",
        "branch": "Delhi",
        "txn_id": "T265"
      },
      {
        "dir": "out",
        "other": "A1013",
        "amt": 58218,
        "ch": "IMPS",
        "time": "02:24",
        "branch": "Bangalore",
        "txn_id": "T704"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 54816,
        "ch": "RTGS",
        "time": "03:07",
        "branch": "Chennai",
        "txn_id": "T1827"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 49084,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1983"
      },
      {
        "dir": "in",
        "other": "A1199",
        "amt": 47683,
        "ch": "IMPS",
        "time": "16:01",
        "branch": "Kolkata",
        "txn_id": "T696"
      }
    ]
  },
  {
    "id": "A1107",
    "name": "A1107",
    "type": "Doctor",
    "age": 37,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b91,012,690",
    "outflow": "\u20b9328,337",
    "connections": 19,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1107",
        "A1089",
        "A1053",
        "A1107"
      ],
      [
        "A1107",
        "A1136",
        "A1053",
        "A1107"
      ],
      [
        "A1107",
        "A1123",
        "A1090",
        "A1107"
      ]
    ],
    "openDate": "2016-12-19",
    "lastTxn": "2018-07-11",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1001",
        "amt": 348331,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1912"
      },
      {
        "dir": "in",
        "other": "A1007",
        "amt": 99288,
        "ch": "ATM",
        "time": "13:58",
        "branch": "Kolkata",
        "txn_id": "T1087"
      },
      {
        "dir": "out",
        "other": "A1123",
        "amt": 94319,
        "ch": "NEFT",
        "time": "23:49",
        "branch": "Chennai",
        "txn_id": "T1124"
      },
      {
        "dir": "out",
        "other": "A1136",
        "amt": 91279,
        "ch": "IMPS",
        "time": "13:01",
        "branch": "Delhi",
        "txn_id": "T1838"
      },
      {
        "dir": "in",
        "other": "A1090",
        "amt": 86692,
        "ch": "ATM",
        "time": "23:24",
        "branch": "Delhi",
        "txn_id": "T321"
      },
      {
        "dir": "in",
        "other": "A1138",
        "amt": 85140,
        "ch": "ATM",
        "time": "23:04",
        "branch": "Bangalore",
        "txn_id": "T1451"
      },
      {
        "dir": "out",
        "other": "A1089",
        "amt": 76288,
        "ch": "RTGS",
        "time": "10:49",
        "branch": "Chennai",
        "txn_id": "T131"
      },
      {
        "dir": "out",
        "other": "A1004",
        "amt": 66451,
        "ch": "ATM",
        "time": "22:03",
        "branch": "Delhi",
        "txn_id": "T602"
      }
    ]
  },
  {
    "id": "A1108",
    "name": "A1108",
    "type": "Business",
    "age": 54,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9469,187",
    "outflow": "\u20b9577,169",
    "connections": 21,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1108",
        "A1069",
        "A1192",
        "A1108"
      ],
      [
        "A1108",
        "A1143",
        "A1156",
        "A1108"
      ],
      [
        "A1108",
        "A1189",
        "A1015",
        "A1108"
      ]
    ],
    "openDate": "2017-11-27",
    "lastTxn": "2018-10-29",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1103",
        "amt": 94287,
        "ch": "IMPS",
        "time": "05:29",
        "branch": "Bangalore",
        "txn_id": "T1826"
      },
      {
        "dir": "out",
        "other": "A1185",
        "amt": 94200,
        "ch": "IMPS",
        "time": "07:35",
        "branch": "Mumbai",
        "txn_id": "T211"
      },
      {
        "dir": "in",
        "other": "A1016",
        "amt": 86730,
        "ch": "NEFT",
        "time": "02:27",
        "branch": "Bangalore",
        "txn_id": "T1566"
      },
      {
        "dir": "out",
        "other": "A1143",
        "amt": 80282,
        "ch": "RTGS",
        "time": "20:52",
        "branch": "Kolkata",
        "txn_id": "T939"
      },
      {
        "dir": "in",
        "other": "A1159",
        "amt": 71268,
        "ch": "UPI",
        "time": "12:34",
        "branch": "Mumbai",
        "txn_id": "T1368"
      },
      {
        "dir": "in",
        "other": "A1123",
        "amt": 63209,
        "ch": "RTGS",
        "time": "16:13",
        "branch": "Chennai",
        "txn_id": "T1031"
      },
      {
        "dir": "in",
        "other": "A1171",
        "amt": 62200,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1942"
      },
      {
        "dir": "out",
        "other": "A1021",
        "amt": 62200,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1943"
      }
    ]
  },
  {
    "id": "A1109",
    "name": "A1109",
    "type": "Teacher",
    "age": 40,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9659,462",
    "outflow": "\u20b9323,221",
    "connections": 17,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1109",
        "A1072",
        "A1109"
      ],
      [
        "A1109",
        "A1011",
        "A1037",
        "A1109"
      ],
      [
        "A1109",
        "A1011",
        "A1029",
        "A1109"
      ]
    ],
    "openDate": "2021-06-01",
    "lastTxn": "2024-02-01",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1115",
        "amt": 92684,
        "ch": "UPI",
        "time": "09:41",
        "branch": "Kolkata",
        "txn_id": "T909"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 92247,
        "ch": "NEFT",
        "time": "09:32",
        "branch": "Kolkata",
        "txn_id": "T1353"
      },
      {
        "dir": "in",
        "other": "A1030",
        "amt": 91914,
        "ch": "RTGS",
        "time": "03:18",
        "branch": "Kolkata",
        "txn_id": "T227"
      },
      {
        "dir": "in",
        "other": "A1029",
        "amt": 88436,
        "ch": "IMPS",
        "time": "05:16",
        "branch": "Chennai",
        "txn_id": "T1506"
      },
      {
        "dir": "in",
        "other": "A1113",
        "amt": 82495,
        "ch": "RTGS",
        "time": "19:49",
        "branch": "Chennai",
        "txn_id": "T1273"
      },
      {
        "dir": "in",
        "other": "A1194",
        "amt": 81770,
        "ch": "RTGS",
        "time": "11:19",
        "branch": "Kolkata",
        "txn_id": "T421"
      },
      {
        "dir": "out",
        "other": "A1060",
        "amt": 65796,
        "ch": "NEFT",
        "time": "08:37",
        "branch": "Mumbai",
        "txn_id": "T1610"
      },
      {
        "dir": "out",
        "other": "A1133",
        "amt": 55749,
        "ch": "IMPS",
        "time": "10:07",
        "branch": "Delhi",
        "txn_id": "T1402"
      }
    ]
  },
  {
    "id": "A1110",
    "name": "A1110",
    "type": "Teacher",
    "age": 54,
    "risk": "fraud",
    "riskScore": 70,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9367,079",
    "outflow": "\u20b9595,393",
    "connections": 17,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1110",
        "A1163",
        "A1192",
        "A1110"
      ],
      [
        "A1110",
        "A1050",
        "A1192",
        "A1110"
      ],
      [
        "A1110",
        "A1099",
        "A1165",
        "A1110"
      ]
    ],
    "openDate": "2021-12-29",
    "lastTxn": "2023-07-22",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1162",
        "amt": 99519,
        "ch": "ATM",
        "time": "19:36",
        "branch": "Mumbai",
        "txn_id": "T152"
      },
      {
        "dir": "in",
        "other": "A1192",
        "amt": 93310,
        "ch": "IMPS",
        "time": "15:56",
        "branch": "Mumbai",
        "txn_id": "T1816"
      },
      {
        "dir": "in",
        "other": "A1165",
        "amt": 93049,
        "ch": "RTGS",
        "time": "15:05",
        "branch": "Chennai",
        "txn_id": "T1765"
      },
      {
        "dir": "out",
        "other": "A1029",
        "amt": 89138,
        "ch": "NEFT",
        "time": "10:55",
        "branch": "Chennai",
        "txn_id": "T1509"
      },
      {
        "dir": "out",
        "other": "A1050",
        "amt": 87292,
        "ch": "RTGS",
        "time": "14:33",
        "branch": "Bangalore",
        "txn_id": "T1482"
      },
      {
        "dir": "out",
        "other": "A1143",
        "amt": 84027,
        "ch": "ATM",
        "time": "08:14",
        "branch": "Kolkata",
        "txn_id": "T1820"
      },
      {
        "dir": "out",
        "other": "A1040",
        "amt": 79086,
        "ch": "NEFT",
        "time": "23:37",
        "branch": "Bangalore",
        "txn_id": "T904"
      },
      {
        "dir": "in",
        "other": "A1089",
        "amt": 74277,
        "ch": "IMPS",
        "time": "12:29",
        "branch": "Mumbai",
        "txn_id": "T1417"
      }
    ]
  },
  {
    "id": "A1111",
    "name": "A1111",
    "type": "Freelancer",
    "age": 59,
    "risk": "suspicious",
    "riskScore": 50,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9584,516",
    "outflow": "\u20b9749,043",
    "connections": 22,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1111",
        "A1072",
        "A1027",
        "A1111"
      ],
      [
        "A1111",
        "A1047",
        "A1170",
        "A1111"
      ],
      [
        "A1111",
        "A1112",
        "A1148",
        "A1111"
      ]
    ],
    "openDate": "2015-09-02",
    "lastTxn": "2016-08-12",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1087",
        "amt": 96220,
        "ch": "NEFT",
        "time": "06:55",
        "branch": "Bangalore",
        "txn_id": "T888"
      },
      {
        "dir": "in",
        "other": "A1128",
        "amt": 92995,
        "ch": "RTGS",
        "time": "03:22",
        "branch": "Mumbai",
        "txn_id": "T141"
      },
      {
        "dir": "out",
        "other": "A1165",
        "amt": 86858,
        "ch": "IMPS",
        "time": "23:09",
        "branch": "Kolkata",
        "txn_id": "T1767"
      },
      {
        "dir": "out",
        "other": "A1086",
        "amt": 75299,
        "ch": "RTGS",
        "time": "19:01",
        "branch": "Mumbai",
        "txn_id": "T659"
      },
      {
        "dir": "in",
        "other": "A1163",
        "amt": 73454,
        "ch": "UPI",
        "time": "12:15",
        "branch": "Bangalore",
        "txn_id": "T1721"
      },
      {
        "dir": "in",
        "other": "A1194",
        "amt": 72210,
        "ch": "UPI",
        "time": "02:45",
        "branch": "Kolkata",
        "txn_id": "T1840"
      },
      {
        "dir": "out",
        "other": "A1072",
        "amt": 68047,
        "ch": "IMPS",
        "time": "10:04",
        "branch": "Delhi",
        "txn_id": "T916"
      },
      {
        "dir": "out",
        "other": "A1128",
        "amt": 67691,
        "ch": "UPI",
        "time": "19:17",
        "branch": "Bangalore",
        "txn_id": "T438"
      }
    ]
  },
  {
    "id": "A1112",
    "name": "A1112",
    "type": "Business",
    "age": 37,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9908,960",
    "outflow": "\u20b9641,444",
    "connections": 24,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1112",
        "A1148",
        "A1111",
        "A1112"
      ],
      [
        "A1112",
        "A1105",
        "A1077",
        "A1112"
      ],
      [
        "A1112",
        "A1158",
        "A1128",
        "A1112"
      ]
    ],
    "openDate": "2016-11-15",
    "lastTxn": "2018-03-13",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1102",
        "amt": 287527,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1933"
      },
      {
        "dir": "in",
        "other": "A1101",
        "amt": 204197,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1916"
      },
      {
        "dir": "out",
        "other": "A1055",
        "amt": 94621,
        "ch": "IMPS",
        "time": "11:44",
        "branch": "Kolkata",
        "txn_id": "T1453"
      },
      {
        "dir": "out",
        "other": "A1105",
        "amt": 81974,
        "ch": "RTGS",
        "time": "20:21",
        "branch": "Delhi",
        "txn_id": "T1556"
      },
      {
        "dir": "in",
        "other": "A1106",
        "amt": 77296,
        "ch": "RTGS",
        "time": "02:01",
        "branch": "Bangalore",
        "txn_id": "T1829"
      },
      {
        "dir": "in",
        "other": "A1077",
        "amt": 76091,
        "ch": "RTGS",
        "time": "18:18",
        "branch": "Mumbai",
        "txn_id": "T304"
      },
      {
        "dir": "out",
        "other": "A1158",
        "amt": 73753,
        "ch": "IMPS",
        "time": "02:26",
        "branch": "Kolkata",
        "txn_id": "T1786"
      },
      {
        "dir": "in",
        "other": "A1172",
        "amt": 69445,
        "ch": "UPI",
        "time": "22:01",
        "branch": "Chennai",
        "txn_id": "T789"
      }
    ]
  },
  {
    "id": "A1113",
    "name": "A1113",
    "type": "Freelancer",
    "age": 29,
    "risk": "suspicious",
    "riskScore": 50,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9609,419",
    "outflow": "\u20b91,534,854",
    "connections": 26,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1113",
        "A1076",
        "A1113"
      ],
      [
        "A1113",
        "A1007",
        "A1037",
        "A1113"
      ],
      [
        "A1113",
        "A1007",
        "A1008",
        "A1113"
      ]
    ],
    "openDate": "2020-08-20",
    "lastTxn": "2021-10-21",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1125",
        "amt": 893797,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2021"
      },
      {
        "dir": "out",
        "other": "A1173",
        "amt": 86247,
        "ch": "NEFT",
        "time": "06:23",
        "branch": "Bangalore",
        "txn_id": "T605"
      },
      {
        "dir": "out",
        "other": "A1109",
        "amt": 82495,
        "ch": "RTGS",
        "time": "19:49",
        "branch": "Chennai",
        "txn_id": "T1273"
      },
      {
        "dir": "in",
        "other": "A1141",
        "amt": 81970,
        "ch": "ATM",
        "time": "11:34",
        "branch": "Chennai",
        "txn_id": "T1140"
      },
      {
        "dir": "in",
        "other": "A1193",
        "amt": 78853,
        "ch": "RTGS",
        "time": "19:20",
        "branch": "Bangalore",
        "txn_id": "T1141"
      },
      {
        "dir": "in",
        "other": "A1026",
        "amt": 72852,
        "ch": "IMPS",
        "time": "01:02",
        "branch": "Kolkata",
        "txn_id": "T1728"
      },
      {
        "dir": "out",
        "other": "A1142",
        "amt": 70404,
        "ch": "IMPS",
        "time": "06:36",
        "branch": "Kolkata",
        "txn_id": "T1048"
      },
      {
        "dir": "out",
        "other": "A1065",
        "amt": 69695,
        "ch": "UPI",
        "time": "06:02",
        "branch": "Bangalore",
        "txn_id": "T1262"
      }
    ]
  },
  {
    "id": "A1114",
    "name": "A1114",
    "type": "Business",
    "age": 18,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9280,521",
    "outflow": "\u20b9460,079",
    "connections": 17,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1114",
        "A1061",
        "A1114"
      ],
      [
        "A1114",
        "A1061",
        "A1161",
        "A1114"
      ],
      [
        "A1114",
        "A1060",
        "A1161",
        "A1114"
      ]
    ],
    "openDate": "2020-11-27",
    "lastTxn": "2022-03-31",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1003",
        "amt": 95442,
        "ch": "RTGS",
        "time": "15:07",
        "branch": "Mumbai",
        "txn_id": "T900"
      },
      {
        "dir": "in",
        "other": "A1061",
        "amt": 87442,
        "ch": "ATM",
        "time": "02:18",
        "branch": "Kolkata",
        "txn_id": "T665"
      },
      {
        "dir": "out",
        "other": "A1164",
        "amt": 74239,
        "ch": "ATM",
        "time": "13:16",
        "branch": "Kolkata",
        "txn_id": "T1304"
      },
      {
        "dir": "out",
        "other": "A1169",
        "amt": 60812,
        "ch": "IMPS",
        "time": "17:39",
        "branch": "Delhi",
        "txn_id": "T1716"
      },
      {
        "dir": "out",
        "other": "A1009",
        "amt": 58564,
        "ch": "IMPS",
        "time": "05:07",
        "branch": "Kolkata",
        "txn_id": "T664"
      },
      {
        "dir": "out",
        "other": "A1060",
        "amt": 57166,
        "ch": "NEFT",
        "time": "09:54",
        "branch": "Bangalore",
        "txn_id": "T1542"
      },
      {
        "dir": "in",
        "other": "A1092",
        "amt": 49377,
        "ch": "NEFT",
        "time": "00:26",
        "branch": "Mumbai",
        "txn_id": "T358"
      },
      {
        "dir": "out",
        "other": "A1051",
        "amt": 48804,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T2009"
      }
    ]
  },
  {
    "id": "A1115",
    "name": "A1115",
    "type": "Teacher",
    "age": 30,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b92L",
    "inflow": "\u20b9287,981",
    "outflow": "\u20b9520,153",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [],
    "openDate": "2016-07-16",
    "lastTxn": "2016-08-11",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1060",
        "amt": 93616,
        "ch": "IMPS",
        "time": "02:15",
        "branch": "Bangalore",
        "txn_id": "T536"
      },
      {
        "dir": "in",
        "other": "A1109",
        "amt": 92684,
        "ch": "UPI",
        "time": "09:41",
        "branch": "Kolkata",
        "txn_id": "T909"
      },
      {
        "dir": "out",
        "other": "A1196",
        "amt": 86981,
        "ch": "IMPS",
        "time": "10:26",
        "branch": "Kolkata",
        "txn_id": "T1444"
      },
      {
        "dir": "in",
        "other": "A1082",
        "amt": 72986,
        "ch": "IMPS",
        "time": "05:35",
        "branch": "Kolkata",
        "txn_id": "T218"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 64646,
        "ch": "UPI",
        "time": "21:06",
        "branch": "Kolkata",
        "txn_id": "T327"
      },
      {
        "dir": "out",
        "other": "A1120",
        "amt": 62681,
        "ch": "UPI",
        "time": "19:45",
        "branch": "Bangalore",
        "txn_id": "T567"
      },
      {
        "dir": "in",
        "other": "A1134",
        "amt": 55039,
        "ch": "RTGS",
        "time": "15:20",
        "branch": "Mumbai",
        "txn_id": "T943"
      },
      {
        "dir": "in",
        "other": "A1140",
        "amt": 50905,
        "ch": "RTGS",
        "time": "22:01",
        "branch": "Bangalore",
        "txn_id": "T1785"
      }
    ]
  },
  {
    "id": "A1116",
    "name": "A1116",
    "type": "Student",
    "age": 36,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9332,601",
    "outflow": "\u20b9594,028",
    "connections": 22,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1116",
        "A1040",
        "A1157",
        "A1116"
      ],
      [
        "A1116",
        "A1040",
        "A1095",
        "A1116"
      ],
      [
        "A1116",
        "A1147",
        "A1068",
        "A1116"
      ]
    ],
    "openDate": "2019-10-28",
    "lastTxn": "2021-03-01",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1138",
        "amt": 96753,
        "ch": "IMPS",
        "time": "08:30",
        "branch": "Delhi",
        "txn_id": "T1628"
      },
      {
        "dir": "in",
        "other": "A1095",
        "amt": 86195,
        "ch": "IMPS",
        "time": "10:00",
        "branch": "Mumbai",
        "txn_id": "T856"
      },
      {
        "dir": "in",
        "other": "A1169",
        "amt": 80620,
        "ch": "ATM",
        "time": "19:38",
        "branch": "Bangalore",
        "txn_id": "T958"
      },
      {
        "dir": "out",
        "other": "A1079",
        "amt": 62961,
        "ch": "RTGS",
        "time": "20:20",
        "branch": "Mumbai",
        "txn_id": "T1598"
      },
      {
        "dir": "out",
        "other": "A1076",
        "amt": 57984,
        "ch": "RTGS",
        "time": "02:21",
        "branch": "Delhi",
        "txn_id": "T552"
      },
      {
        "dir": "out",
        "other": "A1040",
        "amt": 56338,
        "ch": "ATM",
        "time": "17:19",
        "branch": "Kolkata",
        "txn_id": "T450"
      },
      {
        "dir": "out",
        "other": "A1124",
        "amt": 56293,
        "ch": "IMPS",
        "time": "23:32",
        "branch": "Bangalore",
        "txn_id": "T611"
      },
      {
        "dir": "out",
        "other": "A1015",
        "amt": 51950,
        "ch": "NEFT",
        "time": "15:49",
        "branch": "Bangalore",
        "txn_id": "T912"
      }
    ]
  },
  {
    "id": "A1117",
    "name": "A1117",
    "type": "Doctor",
    "age": 43,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9195,632",
    "outflow": "\u20b9375,689",
    "connections": 11,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1117",
        "A1131",
        "A1117"
      ],
      [
        "A1117",
        "A1131",
        "A1124",
        "A1117"
      ]
    ],
    "openDate": "2016-10-08",
    "lastTxn": "2017-02-05",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1124",
        "amt": 97292,
        "ch": "IMPS",
        "time": "05:58",
        "branch": "Kolkata",
        "txn_id": "T1521"
      },
      {
        "dir": "out",
        "other": "A1185",
        "amt": 86771,
        "ch": "UPI",
        "time": "16:34",
        "branch": "Bangalore",
        "txn_id": "T1093"
      },
      {
        "dir": "out",
        "other": "A1050",
        "amt": 66746,
        "ch": "RTGS",
        "time": "22:50",
        "branch": "Mumbai",
        "txn_id": "T1587"
      },
      {
        "dir": "out",
        "other": "A1041",
        "amt": 55787,
        "ch": "NEFT",
        "time": "19:19",
        "branch": "Delhi",
        "txn_id": "T1631"
      },
      {
        "dir": "out",
        "other": "A1131",
        "amt": 48548,
        "ch": "RTGS",
        "time": "20:48",
        "branch": "Mumbai",
        "txn_id": "T695"
      },
      {
        "dir": "out",
        "other": "A1131",
        "amt": 43187,
        "ch": "NEFT",
        "time": "16:30",
        "branch": "Kolkata",
        "txn_id": "T229"
      },
      {
        "dir": "in",
        "other": "A1131",
        "amt": 38421,
        "ch": "NEFT",
        "time": "00:27",
        "branch": "Chennai",
        "txn_id": "T1526"
      },
      {
        "dir": "in",
        "other": "A1149",
        "amt": 32958,
        "ch": "ATM",
        "time": "09:21",
        "branch": "Bangalore",
        "txn_id": "T1336"
      }
    ]
  },
  {
    "id": "A1118",
    "name": "A1118",
    "type": "Teacher",
    "age": 60,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b915L",
    "inflow": "\u20b9491,596",
    "outflow": "\u20b9596,963",
    "connections": 18,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1118",
        "A1006",
        "A1118"
      ],
      [
        "A1118",
        "A1006",
        "A1087",
        "A1118"
      ],
      [
        "A1118",
        "A1025",
        "A1026",
        "A1118"
      ]
    ],
    "openDate": "2021-01-20",
    "lastTxn": "2022-07-05",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1071",
        "amt": 99028,
        "ch": "IMPS",
        "time": "08:25",
        "branch": "Delhi",
        "txn_id": "T197"
      },
      {
        "dir": "out",
        "other": "A1080",
        "amt": 96930,
        "ch": "IMPS",
        "time": "10:46",
        "branch": "Delhi",
        "txn_id": "T498"
      },
      {
        "dir": "out",
        "other": "A1025",
        "amt": 94604,
        "ch": "NEFT",
        "time": "10:31",
        "branch": "Kolkata",
        "txn_id": "T1136"
      },
      {
        "dir": "in",
        "other": "A1087",
        "amt": 91851,
        "ch": "UPI",
        "time": "18:56",
        "branch": "Kolkata",
        "txn_id": "T523"
      },
      {
        "dir": "out",
        "other": "A1063",
        "amt": 89445,
        "ch": "RTGS",
        "time": "21:17",
        "branch": "Bangalore",
        "txn_id": "T253"
      },
      {
        "dir": "in",
        "other": "A1153",
        "amt": 84930,
        "ch": "NEFT",
        "time": "17:29",
        "branch": "Kolkata",
        "txn_id": "T592"
      },
      {
        "dir": "in",
        "other": "A1095",
        "amt": 69677,
        "ch": "IMPS",
        "time": "18:17",
        "branch": "Bangalore",
        "txn_id": "T597"
      },
      {
        "dir": "out",
        "other": "A1111",
        "amt": 64548,
        "ch": "ATM",
        "time": "18:08",
        "branch": "Delhi",
        "txn_id": "T250"
      }
    ]
  },
  {
    "id": "A1119",
    "name": "A1119",
    "type": "Student",
    "age": 60,
    "risk": "clean",
    "riskScore": 15,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9343,906",
    "outflow": "\u20b9459,366",
    "connections": 14,
    "dormant": false,
    "structuring": 0,
    "circles": [],
    "openDate": "2023-05-03",
    "lastTxn": "2023-11-12",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1154",
        "amt": 98551,
        "ch": "UPI",
        "time": "03:19",
        "branch": "Bangalore",
        "txn_id": "T1831"
      },
      {
        "dir": "out",
        "other": "A1164",
        "amt": 97898,
        "ch": "UPI",
        "time": "02:23",
        "branch": "Chennai",
        "txn_id": "T890"
      },
      {
        "dir": "out",
        "other": "A1079",
        "amt": 90168,
        "ch": "UPI",
        "time": "23:51",
        "branch": "Mumbai",
        "txn_id": "T869"
      },
      {
        "dir": "out",
        "other": "A1097",
        "amt": 89998,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1473"
      },
      {
        "dir": "in",
        "other": "A1121",
        "amt": 67145,
        "ch": "NEFT",
        "time": "11:31",
        "branch": "Kolkata",
        "txn_id": "T956"
      },
      {
        "dir": "in",
        "other": "A1100",
        "amt": 63520,
        "ch": "IMPS",
        "time": "06:48",
        "branch": "Mumbai",
        "txn_id": "T1779"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 59935,
        "ch": "RTGS",
        "time": "07:19",
        "branch": "Delhi",
        "txn_id": "T1277"
      },
      {
        "dir": "in",
        "other": "A1007",
        "amt": 59095,
        "ch": "IMPS",
        "time": "06:28",
        "branch": "Mumbai",
        "txn_id": "T1787"
      }
    ]
  },
  {
    "id": "A1120",
    "name": "A1120",
    "type": "Teacher",
    "age": 58,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9573,971",
    "outflow": "\u20b9144,164",
    "connections": 12,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1120",
        "A1049",
        "A1056",
        "A1120"
      ]
    ],
    "openDate": "2017-02-15",
    "lastTxn": "2018-12-23",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1079",
        "amt": 99457,
        "ch": "RTGS",
        "time": "05:41",
        "branch": "Chennai",
        "txn_id": "T918"
      },
      {
        "dir": "in",
        "other": "A1175",
        "amt": 95095,
        "ch": "UPI",
        "time": "03:46",
        "branch": "Chennai",
        "txn_id": "T109"
      },
      {
        "dir": "in",
        "other": "A1175",
        "amt": 91989,
        "ch": "RTGS",
        "time": "12:04",
        "branch": "Bangalore",
        "txn_id": "T123"
      },
      {
        "dir": "in",
        "other": "A1036",
        "amt": 79252,
        "ch": "RTGS",
        "time": "05:09",
        "branch": "Mumbai",
        "txn_id": "T1641"
      },
      {
        "dir": "out",
        "other": "A1049",
        "amt": 79109,
        "ch": "RTGS",
        "time": "22:34",
        "branch": "Bangalore",
        "txn_id": "T1288"
      },
      {
        "dir": "out",
        "other": "A1067",
        "amt": 64530,
        "ch": "RTGS",
        "time": "10:25",
        "branch": "Bangalore",
        "txn_id": "T805"
      },
      {
        "dir": "in",
        "other": "A1037",
        "amt": 64067,
        "ch": "IMPS",
        "time": "02:58",
        "branch": "Kolkata",
        "txn_id": "T1609"
      },
      {
        "dir": "in",
        "other": "A1115",
        "amt": 62681,
        "ch": "UPI",
        "time": "19:45",
        "branch": "Bangalore",
        "txn_id": "T567"
      }
    ]
  },
  {
    "id": "A1121",
    "name": "A1121",
    "type": "Business",
    "age": 28,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9293,640",
    "outflow": "\u20b9529,321",
    "connections": 14,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1121",
        "A1007",
        "A1033",
        "A1121"
      ],
      [
        "A1121",
        "A1189",
        "A1033",
        "A1121"
      ],
      [
        "A1121",
        "A1065",
        "A1121"
      ]
    ],
    "openDate": "2020-06-14",
    "lastTxn": "2022-08-31",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1166",
        "amt": 93774,
        "ch": "NEFT",
        "time": "00:39",
        "branch": "Chennai",
        "txn_id": "T1879"
      },
      {
        "dir": "out",
        "other": "A1065",
        "amt": 84552,
        "ch": "IMPS",
        "time": "05:42",
        "branch": "Kolkata",
        "txn_id": "T132"
      },
      {
        "dir": "out",
        "other": "A1007",
        "amt": 83161,
        "ch": "IMPS",
        "time": "10:03",
        "branch": "Bangalore",
        "txn_id": "T736"
      },
      {
        "dir": "out",
        "other": "A1106",
        "amt": 79655,
        "ch": "ATM",
        "time": "01:57",
        "branch": "Bangalore",
        "txn_id": "T1687"
      },
      {
        "dir": "in",
        "other": "A1065",
        "amt": 75509,
        "ch": "UPI",
        "time": "13:59",
        "branch": "Bangalore",
        "txn_id": "T1811"
      },
      {
        "dir": "out",
        "other": "A1119",
        "amt": 67145,
        "ch": "NEFT",
        "time": "11:31",
        "branch": "Kolkata",
        "txn_id": "T956"
      },
      {
        "dir": "out",
        "other": "A1144",
        "amt": 63766,
        "ch": "IMPS",
        "time": "14:04",
        "branch": "Chennai",
        "txn_id": "T1580"
      },
      {
        "dir": "out",
        "other": "A1060",
        "amt": 60622,
        "ch": "UPI",
        "time": "09:19",
        "branch": "Bangalore",
        "txn_id": "T1768"
      }
    ]
  },
  {
    "id": "A1122",
    "name": "A1122",
    "type": "Teacher",
    "age": 31,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b920L",
    "inflow": "\u20b9481,199",
    "outflow": "\u20b9351,755",
    "connections": 15,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1122",
        "A1066",
        "A1188",
        "A1122"
      ],
      [
        "A1122",
        "A1028",
        "A1122"
      ],
      [
        "A1122",
        "A1198",
        "A1056",
        "A1122"
      ]
    ],
    "openDate": "2022-11-14",
    "lastTxn": "2025-06-27",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1097",
        "amt": 99273,
        "ch": "IMPS",
        "time": "04:59",
        "branch": "Bangalore",
        "txn_id": "T336"
      },
      {
        "dir": "out",
        "other": "A1061",
        "amt": 88997,
        "ch": "ATM",
        "time": "23:23",
        "branch": "Chennai",
        "txn_id": "T269"
      },
      {
        "dir": "in",
        "other": "A1048",
        "amt": 85000,
        "ch": "RTGS",
        "time": "10:56",
        "branch": "Kolkata",
        "txn_id": "T1227"
      },
      {
        "dir": "in",
        "other": "A1028",
        "amt": 82002,
        "ch": "ATM",
        "time": "21:41",
        "branch": "Chennai",
        "txn_id": "T1384"
      },
      {
        "dir": "out",
        "other": "A1198",
        "amt": 79920,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1965"
      },
      {
        "dir": "in",
        "other": "A1056",
        "amt": 79920,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1967"
      },
      {
        "dir": "out",
        "other": "A1046",
        "amt": 64502,
        "ch": "NEFT",
        "time": "10:51",
        "branch": "Chennai",
        "txn_id": "T705"
      },
      {
        "dir": "in",
        "other": "A1017",
        "amt": 56620,
        "ch": "RTGS",
        "time": "06:13",
        "branch": "Delhi",
        "txn_id": "T889"
      }
    ]
  },
  {
    "id": "A1123",
    "name": "A1123",
    "type": "Student",
    "age": 28,
    "risk": "fraud",
    "riskScore": 90,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9988,469",
    "outflow": "\u20b91,149,196",
    "connections": 21,
    "dormant": true,
    "structuring": 0,
    "circles": [
      [
        "A1123",
        "A1108",
        "A1010",
        "A1123"
      ],
      [
        "A1123",
        "A1014",
        "A1193",
        "A1123"
      ],
      [
        "A1123",
        "A1193",
        "A1123"
      ]
    ],
    "openDate": "2022-05-15",
    "lastTxn": "2022-05-28",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1193",
        "amt": 359064,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1922"
      },
      {
        "dir": "in",
        "other": "A1100",
        "amt": 358865,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1921"
      },
      {
        "dir": "out",
        "other": "A1146",
        "amt": 95919,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1968"
      },
      {
        "dir": "in",
        "other": "A1076",
        "amt": 95919,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1970"
      },
      {
        "dir": "out",
        "other": "A1059",
        "amt": 95587,
        "ch": "NEFT",
        "time": "02:33",
        "branch": "Kolkata",
        "txn_id": "T1508"
      },
      {
        "dir": "in",
        "other": "A1107",
        "amt": 94319,
        "ch": "NEFT",
        "time": "23:49",
        "branch": "Chennai",
        "txn_id": "T1124"
      },
      {
        "dir": "out",
        "other": "A1056",
        "amt": 92583,
        "ch": "ATM",
        "time": "07:17",
        "branch": "Bangalore",
        "txn_id": "T503"
      },
      {
        "dir": "out",
        "other": "A1051",
        "amt": 89114,
        "ch": "UPI",
        "time": "18:39",
        "branch": "Mumbai",
        "txn_id": "T168"
      }
    ]
  },
  {
    "id": "A1124",
    "name": "A1124",
    "type": "Engineer",
    "age": 25,
    "risk": "fraud",
    "riskScore": 88,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b91,166,818",
    "outflow": "\u20b9665,311",
    "connections": 20,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1124",
        "A1112",
        "A1158",
        "A1124"
      ],
      [
        "A1124",
        "A1117",
        "A1131",
        "A1124"
      ],
      [
        "A1124",
        "A1088",
        "A1003",
        "A1124"
      ]
    ],
    "openDate": "2017-05-15",
    "lastTxn": "2017-08-08",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1038",
        "amt": 360700,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1926"
      },
      {
        "dir": "in",
        "other": "A1131",
        "amt": 358418,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1925"
      },
      {
        "dir": "in",
        "other": "A1189",
        "amt": 99287,
        "ch": "IMPS",
        "time": "22:57",
        "branch": "Bangalore",
        "txn_id": "T826"
      },
      {
        "dir": "in",
        "other": "A1028",
        "amt": 99153,
        "ch": "RTGS",
        "time": "15:48",
        "branch": "Kolkata",
        "txn_id": "T843"
      },
      {
        "dir": "out",
        "other": "A1117",
        "amt": 97292,
        "ch": "IMPS",
        "time": "05:58",
        "branch": "Kolkata",
        "txn_id": "T1521"
      },
      {
        "dir": "in",
        "other": "A1098",
        "amt": 95629,
        "ch": "ATM",
        "time": "21:26",
        "branch": "Mumbai",
        "txn_id": "T188"
      },
      {
        "dir": "in",
        "other": "A1157",
        "amt": 86925,
        "ch": "UPI",
        "time": "09:27",
        "branch": "Chennai",
        "txn_id": "T620"
      },
      {
        "dir": "out",
        "other": "A1055",
        "amt": 81522,
        "ch": "RTGS",
        "time": "08:09",
        "branch": "Delhi",
        "txn_id": "T454"
      }
    ]
  },
  {
    "id": "A1125",
    "name": "A1125",
    "type": "Engineer",
    "age": 18,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b91,554,567",
    "outflow": "\u20b9377,604",
    "connections": 19,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1125",
        "A1036",
        "A1125"
      ],
      [
        "A1125",
        "A1036",
        "A1074",
        "A1125"
      ],
      [
        "A1125",
        "A1000",
        "A1088",
        "A1125"
      ]
    ],
    "openDate": "2017-03-24",
    "lastTxn": "2017-10-15",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1113",
        "amt": 893797,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2021"
      },
      {
        "dir": "in",
        "other": "A1088",
        "amt": 125149,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1959"
      },
      {
        "dir": "out",
        "other": "A1000",
        "amt": 125149,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1960"
      },
      {
        "dir": "in",
        "other": "A1074",
        "amt": 93422,
        "ch": "UPI",
        "time": "13:36",
        "branch": "Kolkata",
        "txn_id": "T714"
      },
      {
        "dir": "out",
        "other": "A1022",
        "amt": 80874,
        "ch": "NEFT",
        "time": "09:37",
        "branch": "Kolkata",
        "txn_id": "T251"
      },
      {
        "dir": "out",
        "other": "A1093",
        "amt": 75536,
        "ch": "UPI",
        "time": "14:21",
        "branch": "Kolkata",
        "txn_id": "T1821"
      },
      {
        "dir": "in",
        "other": "A1097",
        "amt": 75194,
        "ch": "NEFT",
        "time": "18:12",
        "branch": "Kolkata",
        "txn_id": "T519"
      },
      {
        "dir": "in",
        "other": "A1150",
        "amt": 68452,
        "ch": "RTGS",
        "time": "07:48",
        "branch": "Kolkata",
        "txn_id": "T200"
      }
    ]
  },
  {
    "id": "A1126",
    "name": "A1126",
    "type": "Student",
    "age": 51,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b91,220,637",
    "outflow": "\u20b9330,439",
    "connections": 21,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1126",
        "A1168",
        "A1149",
        "A1126"
      ],
      [
        "A1126",
        "A1022",
        "A1142",
        "A1126"
      ],
      [
        "A1126",
        "A1022",
        "A1140",
        "A1126"
      ]
    ],
    "openDate": "2019-09-08",
    "lastTxn": "2022-05-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1142",
        "amt": 769809,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2027"
      },
      {
        "dir": "out",
        "other": "A1012",
        "amt": 89673,
        "ch": "IMPS",
        "time": "21:57",
        "branch": "Bangalore",
        "txn_id": "T1225"
      },
      {
        "dir": "in",
        "other": "A1047",
        "amt": 88057,
        "ch": "ATM",
        "time": "12:45",
        "branch": "Delhi",
        "txn_id": "T1404"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 81528,
        "ch": "UPI",
        "time": "13:48",
        "branch": "Chennai",
        "txn_id": "T474"
      },
      {
        "dir": "in",
        "other": "A1162",
        "amt": 80362,
        "ch": "NEFT",
        "time": "17:56",
        "branch": "Mumbai",
        "txn_id": "T710"
      },
      {
        "dir": "in",
        "other": "A1142",
        "amt": 63383,
        "ch": "ATM",
        "time": "08:41",
        "branch": "Delhi",
        "txn_id": "T633"
      },
      {
        "dir": "in",
        "other": "A1083",
        "amt": 54013,
        "ch": "UPI",
        "time": "20:41",
        "branch": "Bangalore",
        "txn_id": "T530"
      },
      {
        "dir": "out",
        "other": "A1035",
        "amt": 52603,
        "ch": "RTGS",
        "time": "11:29",
        "branch": "Chennai",
        "txn_id": "T387"
      }
    ]
  },
  {
    "id": "A1127",
    "name": "A1127",
    "type": "Govt Employee",
    "age": 21,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9936,140",
    "outflow": "\u20b9556,091",
    "connections": 25,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1127",
        "A1106",
        "A1025",
        "A1127"
      ],
      [
        "A1127",
        "A1153",
        "A1127"
      ],
      [
        "A1127",
        "A1062",
        "A1095",
        "A1127"
      ]
    ],
    "openDate": "2024-07-01",
    "lastTxn": "2027-02-27",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1008",
        "amt": 99117,
        "ch": "RTGS",
        "time": "07:53",
        "branch": "Kolkata",
        "txn_id": "T428"
      },
      {
        "dir": "out",
        "other": "A1014",
        "amt": 98354,
        "ch": "IMPS",
        "time": "18:26",
        "branch": "Delhi",
        "txn_id": "T1445"
      },
      {
        "dir": "out",
        "other": "A1135",
        "amt": 95868,
        "ch": "ATM",
        "time": "20:50",
        "branch": "Kolkata",
        "txn_id": "T213"
      },
      {
        "dir": "in",
        "other": "A1047",
        "amt": 92063,
        "ch": "ATM",
        "time": "16:27",
        "branch": "Mumbai",
        "txn_id": "T870"
      },
      {
        "dir": "in",
        "other": "A1192",
        "amt": 87808,
        "ch": "IMPS",
        "time": "23:11",
        "branch": "Mumbai",
        "txn_id": "T1371"
      },
      {
        "dir": "in",
        "other": "A1144",
        "amt": 82886,
        "ch": "NEFT",
        "time": "04:43",
        "branch": "Chennai",
        "txn_id": "T712"
      },
      {
        "dir": "in",
        "other": "A1065",
        "amt": 81441,
        "ch": "UPI",
        "time": "03:44",
        "branch": "Mumbai",
        "txn_id": "T281"
      },
      {
        "dir": "in",
        "other": "A1039",
        "amt": 78115,
        "ch": "IMPS",
        "time": "07:57",
        "branch": "Delhi",
        "txn_id": "T1010"
      }
    ]
  },
  {
    "id": "A1128",
    "name": "A1128",
    "type": "Teacher",
    "age": 54,
    "risk": "fraud",
    "riskScore": 70,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9369,929",
    "outflow": "\u20b9423,110",
    "connections": 11,
    "dormant": false,
    "structuring": 3,
    "circles": [
      [
        "A1128",
        "A1112",
        "A1158",
        "A1128"
      ],
      [
        "A1128",
        "A1146",
        "A1128"
      ],
      [
        "A1128",
        "A1111",
        "A1128"
      ]
    ],
    "openDate": "2024-06-10",
    "lastTxn": "2025-12-24",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1049",
        "amt": 94844,
        "ch": "RTGS",
        "time": "17:27",
        "branch": "Mumbai",
        "txn_id": "T1640"
      },
      {
        "dir": "out",
        "other": "A1111",
        "amt": 92995,
        "ch": "RTGS",
        "time": "03:22",
        "branch": "Mumbai",
        "txn_id": "T141"
      },
      {
        "dir": "out",
        "other": "A1042",
        "amt": 88166,
        "ch": "IMPS",
        "time": "00:56",
        "branch": "Kolkata",
        "txn_id": "T1814"
      },
      {
        "dir": "in",
        "other": "A1154",
        "amt": 82683,
        "ch": "IMPS",
        "time": "09:48",
        "branch": "Chennai",
        "txn_id": "T925"
      },
      {
        "dir": "in",
        "other": "A1111",
        "amt": 67691,
        "ch": "UPI",
        "time": "19:17",
        "branch": "Bangalore",
        "txn_id": "T438"
      },
      {
        "dir": "out",
        "other": "A1150",
        "amt": 66106,
        "ch": "RTGS",
        "time": "16:36",
        "branch": "Bangalore",
        "txn_id": "T360"
      },
      {
        "dir": "in",
        "other": "A1146",
        "amt": 50695,
        "ch": "UPI",
        "time": "01:11",
        "branch": "Delhi",
        "txn_id": "T119"
      },
      {
        "dir": "out",
        "other": "A1146",
        "amt": 49434,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1973"
      }
    ]
  },
  {
    "id": "A1129",
    "name": "A1129",
    "type": "Govt Employee",
    "age": 46,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b91,210,433",
    "outflow": "\u20b9311,611",
    "connections": 15,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1129",
        "A1180",
        "A1152",
        "A1129"
      ],
      [
        "A1129",
        "A1026",
        "A1152",
        "A1129"
      ]
    ],
    "openDate": "2022-06-27",
    "lastTxn": "2023-12-01",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1169",
        "amt": 893582,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2024"
      },
      {
        "dir": "in",
        "other": "A1152",
        "amt": 99610,
        "ch": "RTGS",
        "time": "06:34",
        "branch": "Mumbai",
        "txn_id": "T635"
      },
      {
        "dir": "out",
        "other": "A1131",
        "amt": 94309,
        "ch": "UPI",
        "time": "15:49",
        "branch": "Delhi",
        "txn_id": "T1362"
      },
      {
        "dir": "in",
        "other": "A1134",
        "amt": 70536,
        "ch": "RTGS",
        "time": "05:02",
        "branch": "Delhi",
        "txn_id": "T662"
      },
      {
        "dir": "in",
        "other": "A1042",
        "amt": 69580,
        "ch": "UPI",
        "time": "03:50",
        "branch": "Kolkata",
        "txn_id": "T764"
      },
      {
        "dir": "out",
        "other": "A1026",
        "amt": 57765,
        "ch": "IMPS",
        "time": "00:02",
        "branch": "Mumbai",
        "txn_id": "T836"
      },
      {
        "dir": "out",
        "other": "A1006",
        "amt": 45140,
        "ch": "UPI",
        "time": "12:49",
        "branch": "Chennai",
        "txn_id": "T893"
      },
      {
        "dir": "in",
        "other": "A1164",
        "amt": 41160,
        "ch": "NEFT",
        "time": "07:18",
        "branch": "Kolkata",
        "txn_id": "T1812"
      }
    ]
  },
  {
    "id": "A1130",
    "name": "A1130",
    "type": "Govt Employee",
    "age": 35,
    "risk": "fraud",
    "riskScore": 80,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9544,046",
    "outflow": "\u20b9529,234",
    "connections": 20,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1130",
        "A1069",
        "A1196",
        "A1130"
      ],
      [
        "A1130",
        "A1024",
        "A1130"
      ],
      [
        "A1130",
        "A1024",
        "A1050",
        "A1130"
      ]
    ],
    "openDate": "2024-07-15",
    "lastTxn": "2025-10-09",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1196",
        "amt": 96709,
        "ch": "IMPS",
        "time": "10:03",
        "branch": "Bangalore",
        "txn_id": "T278"
      },
      {
        "dir": "in",
        "other": "A1105",
        "amt": 93110,
        "ch": "UPI",
        "time": "10:00",
        "branch": "Delhi",
        "txn_id": "T1439"
      },
      {
        "dir": "out",
        "other": "A1025",
        "amt": 89990,
        "ch": "IMPS",
        "time": "02:11",
        "branch": "Kolkata",
        "txn_id": "T1347"
      },
      {
        "dir": "out",
        "other": "A1071",
        "amt": 88229,
        "ch": "RTGS",
        "time": "20:26",
        "branch": "Delhi",
        "txn_id": "T1340"
      },
      {
        "dir": "out",
        "other": "A1043",
        "amt": 79625,
        "ch": "RTGS",
        "time": "20:20",
        "branch": "Kolkata",
        "txn_id": "T1085"
      },
      {
        "dir": "in",
        "other": "A1031",
        "amt": 76124,
        "ch": "UPI",
        "time": "02:51",
        "branch": "Chennai",
        "txn_id": "T978"
      },
      {
        "dir": "in",
        "other": "A1050",
        "amt": 72751,
        "ch": "RTGS",
        "time": "10:15",
        "branch": "Bangalore",
        "txn_id": "T1705"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 65703,
        "ch": "ATM",
        "time": "06:08",
        "branch": "Mumbai",
        "txn_id": "T406"
      }
    ]
  },
  {
    "id": "A1131",
    "name": "A1131",
    "type": "Doctor",
    "age": 29,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9812,729",
    "outflow": "\u20b9856,671",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1131",
        "A1117",
        "A1131"
      ],
      [
        "A1131",
        "A1008",
        "A1015",
        "A1131"
      ],
      [
        "A1131",
        "A1124",
        "A1117",
        "A1131"
      ]
    ],
    "openDate": "2020-08-28",
    "lastTxn": "2022-10-19",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1124",
        "amt": 358418,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1925"
      },
      {
        "dir": "out",
        "other": "A1008",
        "amt": 222632,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1918"
      },
      {
        "dir": "in",
        "other": "A1074",
        "amt": 222202,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1917"
      },
      {
        "dir": "in",
        "other": "A1129",
        "amt": 94309,
        "ch": "UPI",
        "time": "15:49",
        "branch": "Delhi",
        "txn_id": "T1362"
      },
      {
        "dir": "in",
        "other": "A1164",
        "amt": 82381,
        "ch": "UPI",
        "time": "18:14",
        "branch": "Kolkata",
        "txn_id": "T666"
      },
      {
        "dir": "in",
        "other": "A1064",
        "amt": 81624,
        "ch": "ATM",
        "time": "19:13",
        "branch": "Kolkata",
        "txn_id": "T282"
      },
      {
        "dir": "in",
        "other": "A1144",
        "amt": 81158,
        "ch": "UPI",
        "time": "12:10",
        "branch": "Bangalore",
        "txn_id": "T1546"
      },
      {
        "dir": "in",
        "other": "A1132",
        "amt": 67401,
        "ch": "RTGS",
        "time": "08:22",
        "branch": "Delhi",
        "txn_id": "T1160"
      }
    ]
  },
  {
    "id": "A1132",
    "name": "A1132",
    "type": "Doctor",
    "age": 57,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9320,130",
    "outflow": "\u20b9626,188",
    "connections": 18,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1132",
        "A1070",
        "A1132"
      ],
      [
        "A1132",
        "A1176",
        "A1069",
        "A1132"
      ],
      [
        "A1132",
        "A1087",
        "A1069",
        "A1132"
      ]
    ],
    "openDate": "2018-04-17",
    "lastTxn": "2019-01-08",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1070",
        "amt": 94126,
        "ch": "NEFT",
        "time": "08:20",
        "branch": "Kolkata",
        "txn_id": "T461"
      },
      {
        "dir": "in",
        "other": "A1007",
        "amt": 90506,
        "ch": "UPI",
        "time": "15:14",
        "branch": "Kolkata",
        "txn_id": "T642"
      },
      {
        "dir": "out",
        "other": "A1189",
        "amt": 89593,
        "ch": "ATM",
        "time": "06:49",
        "branch": "Chennai",
        "txn_id": "T820"
      },
      {
        "dir": "out",
        "other": "A1099",
        "amt": 89128,
        "ch": "IMPS",
        "time": "00:15",
        "branch": "Mumbai",
        "txn_id": "T238"
      },
      {
        "dir": "out",
        "other": "A1137",
        "amt": 68673,
        "ch": "RTGS",
        "time": "13:33",
        "branch": "Bangalore",
        "txn_id": "T911"
      },
      {
        "dir": "out",
        "other": "A1131",
        "amt": 67401,
        "ch": "RTGS",
        "time": "08:22",
        "branch": "Delhi",
        "txn_id": "T1160"
      },
      {
        "dir": "out",
        "other": "A1176",
        "amt": 59525,
        "ch": "UPI",
        "time": "05:00",
        "branch": "Delhi",
        "txn_id": "T1638"
      },
      {
        "dir": "out",
        "other": "A1076",
        "amt": 58803,
        "ch": "IMPS",
        "time": "18:17",
        "branch": "Chennai",
        "txn_id": "T150"
      }
    ]
  },
  {
    "id": "A1133",
    "name": "A1133",
    "type": "Student",
    "age": 51,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9697,065",
    "outflow": "\u20b9523,838",
    "connections": 21,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1133",
        "A1040",
        "A1095",
        "A1133"
      ],
      [
        "A1133",
        "A1180",
        "A1047",
        "A1133"
      ],
      [
        "A1133",
        "A1180",
        "A1185",
        "A1133"
      ]
    ],
    "openDate": "2018-02-06",
    "lastTxn": "2019-07-04",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1180",
        "amt": 92751,
        "ch": "NEFT",
        "time": "06:42",
        "branch": "Delhi",
        "txn_id": "T844"
      },
      {
        "dir": "in",
        "other": "A1192",
        "amt": 91129,
        "ch": "UPI",
        "time": "21:59",
        "branch": "Bangalore",
        "txn_id": "T441"
      },
      {
        "dir": "in",
        "other": "A1151",
        "amt": 90753,
        "ch": "RTGS",
        "time": "01:13",
        "branch": "Mumbai",
        "txn_id": "T650"
      },
      {
        "dir": "out",
        "other": "A1040",
        "amt": 89180,
        "ch": "IMPS",
        "time": "13:34",
        "branch": "Kolkata",
        "txn_id": "T1645"
      },
      {
        "dir": "in",
        "other": "A1191",
        "amt": 88343,
        "ch": "RTGS",
        "time": "07:42",
        "branch": "Kolkata",
        "txn_id": "T516"
      },
      {
        "dir": "out",
        "other": "A1196",
        "amt": 86634,
        "ch": "UPI",
        "time": "00:08",
        "branch": "Delhi",
        "txn_id": "T821"
      },
      {
        "dir": "out",
        "other": "A1171",
        "amt": 80551,
        "ch": "UPI",
        "time": "16:04",
        "branch": "Chennai",
        "txn_id": "T244"
      },
      {
        "dir": "in",
        "other": "A1098",
        "amt": 77338,
        "ch": "ATM",
        "time": "15:27",
        "branch": "Chennai",
        "txn_id": "T1128"
      }
    ]
  },
  {
    "id": "A1134",
    "name": "A1134",
    "type": "Engineer",
    "age": 45,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9516,900",
    "outflow": "\u20b9538,269",
    "connections": 22,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1134",
        "A1159",
        "A1154",
        "A1134"
      ],
      [
        "A1134",
        "A1159",
        "A1184",
        "A1134"
      ],
      [
        "A1134",
        "A1075",
        "A1018",
        "A1134"
      ]
    ],
    "openDate": "2021-05-22",
    "lastTxn": "2022-03-21",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1183",
        "amt": 79519,
        "ch": "ATM",
        "time": "04:37",
        "branch": "Delhi",
        "txn_id": "T1289"
      },
      {
        "dir": "in",
        "other": "A1082",
        "amt": 72849,
        "ch": "NEFT",
        "time": "11:25",
        "branch": "Bangalore",
        "txn_id": "T571"
      },
      {
        "dir": "out",
        "other": "A1045",
        "amt": 72666,
        "ch": "UPI",
        "time": "06:16",
        "branch": "Delhi",
        "txn_id": "T443"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 71971,
        "ch": "IMPS",
        "time": "04:22",
        "branch": "Chennai",
        "txn_id": "T678"
      },
      {
        "dir": "out",
        "other": "A1129",
        "amt": 70536,
        "ch": "RTGS",
        "time": "05:02",
        "branch": "Delhi",
        "txn_id": "T662"
      },
      {
        "dir": "out",
        "other": "A1027",
        "amt": 63815,
        "ch": "NEFT",
        "time": "03:11",
        "branch": "Kolkata",
        "txn_id": "T429"
      },
      {
        "dir": "out",
        "other": "A1115",
        "amt": 55039,
        "ch": "RTGS",
        "time": "15:20",
        "branch": "Mumbai",
        "txn_id": "T943"
      },
      {
        "dir": "in",
        "other": "A1173",
        "amt": 53316,
        "ch": "RTGS",
        "time": "10:40",
        "branch": "Delhi",
        "txn_id": "T1388"
      }
    ]
  },
  {
    "id": "A1135",
    "name": "A1135",
    "type": "Govt Employee",
    "age": 48,
    "risk": "fraud",
    "riskScore": 99,
    "riskLevel": "High",
    "income": "\u20b92L",
    "inflow": "\u20b9787,034",
    "outflow": "\u20b9248,855",
    "connections": 18,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1135",
        "A1039",
        "A1127",
        "A1135"
      ],
      [
        "A1135",
        "A1041",
        "A1088",
        "A1135"
      ],
      [
        "A1135",
        "A1051",
        "A1022",
        "A1135"
      ]
    ],
    "openDate": "2024-05-31",
    "lastTxn": "2025-08-08",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1082",
        "amt": 96206,
        "ch": "UPI",
        "time": "01:18",
        "branch": "Kolkata",
        "txn_id": "T680"
      },
      {
        "dir": "in",
        "other": "A1127",
        "amt": 95868,
        "ch": "ATM",
        "time": "20:50",
        "branch": "Kolkata",
        "txn_id": "T213"
      },
      {
        "dir": "in",
        "other": "A1088",
        "amt": 94691,
        "ch": "IMPS",
        "time": "16:07",
        "branch": "Chennai",
        "txn_id": "T927"
      },
      {
        "dir": "in",
        "other": "A1170",
        "amt": 93034,
        "ch": "ATM",
        "time": "23:24",
        "branch": "Chennai",
        "txn_id": "T1794"
      },
      {
        "dir": "out",
        "other": "A1051",
        "amt": 79327,
        "ch": "UPI",
        "time": "09:59",
        "branch": "Delhi",
        "txn_id": "T128"
      },
      {
        "dir": "in",
        "other": "A1038",
        "amt": 69111,
        "ch": "ATM",
        "time": "13:37",
        "branch": "Bangalore",
        "txn_id": "T975"
      },
      {
        "dir": "in",
        "other": "A1050",
        "amt": 66153,
        "ch": "IMPS",
        "time": "08:46",
        "branch": "Chennai",
        "txn_id": "T546"
      },
      {
        "dir": "in",
        "other": "A1111",
        "amt": 65142,
        "ch": "ATM",
        "time": "11:21",
        "branch": "Chennai",
        "txn_id": "T1345"
      }
    ]
  },
  {
    "id": "A1136",
    "name": "A1136",
    "type": "Teacher",
    "age": 58,
    "risk": "fraud",
    "riskScore": 99,
    "riskLevel": "High",
    "income": "\u20b92L",
    "inflow": "\u20b9762,697",
    "outflow": "\u20b9578,265",
    "connections": 21,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1136",
        "A1053",
        "A1107",
        "A1136"
      ],
      [
        "A1136",
        "A1053",
        "A1001",
        "A1136"
      ],
      [
        "A1136",
        "A1065",
        "A1001",
        "A1136"
      ]
    ],
    "openDate": "2015-07-23",
    "lastTxn": "2015-12-24",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1148",
        "amt": 95703,
        "ch": "UPI",
        "time": "00:32",
        "branch": "Kolkata",
        "txn_id": "T749"
      },
      {
        "dir": "out",
        "other": "A1050",
        "amt": 93197,
        "ch": "UPI",
        "time": "18:20",
        "branch": "Mumbai",
        "txn_id": "T1666"
      },
      {
        "dir": "out",
        "other": "A1104",
        "amt": 91294,
        "ch": "NEFT",
        "time": "22:44",
        "branch": "Mumbai",
        "txn_id": "T1822"
      },
      {
        "dir": "in",
        "other": "A1107",
        "amt": 91279,
        "ch": "IMPS",
        "time": "13:01",
        "branch": "Delhi",
        "txn_id": "T1838"
      },
      {
        "dir": "out",
        "other": "A1167",
        "amt": 89760,
        "ch": "NEFT",
        "time": "04:03",
        "branch": "Kolkata",
        "txn_id": "T1070"
      },
      {
        "dir": "in",
        "other": "A1091",
        "amt": 87107,
        "ch": "ATM",
        "time": "02:51",
        "branch": "Mumbai",
        "txn_id": "T728"
      },
      {
        "dir": "in",
        "other": "A1162",
        "amt": 85255,
        "ch": "UPI",
        "time": "07:50",
        "branch": "Chennai",
        "txn_id": "T1178"
      },
      {
        "dir": "in",
        "other": "A1165",
        "amt": 81470,
        "ch": "IMPS",
        "time": "03:16",
        "branch": "Chennai",
        "txn_id": "T1328"
      }
    ]
  },
  {
    "id": "A1137",
    "name": "A1137",
    "type": "Student",
    "age": 55,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9634,576",
    "outflow": "\u20b9539,162",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1137",
        "A1052",
        "A1088",
        "A1137"
      ],
      [
        "A1137",
        "A1052",
        "A1181",
        "A1137"
      ]
    ],
    "openDate": "2020-10-06",
    "lastTxn": "2021-03-27",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1158",
        "amt": 95964,
        "ch": "RTGS",
        "time": "02:30",
        "branch": "Bangalore",
        "txn_id": "T309"
      },
      {
        "dir": "out",
        "other": "A1091",
        "amt": 93008,
        "ch": "RTGS",
        "time": "16:17",
        "branch": "Mumbai",
        "txn_id": "T872"
      },
      {
        "dir": "in",
        "other": "A1062",
        "amt": 84913,
        "ch": "UPI",
        "time": "12:04",
        "branch": "Mumbai",
        "txn_id": "T1622"
      },
      {
        "dir": "in",
        "other": "A1064",
        "amt": 84308,
        "ch": "IMPS",
        "time": "07:52",
        "branch": "Mumbai",
        "txn_id": "T550"
      },
      {
        "dir": "out",
        "other": "A1188",
        "amt": 79241,
        "ch": "RTGS",
        "time": "02:36",
        "branch": "Kolkata",
        "txn_id": "T493"
      },
      {
        "dir": "in",
        "other": "A1146",
        "amt": 77444,
        "ch": "NEFT",
        "time": "21:42",
        "branch": "Bangalore",
        "txn_id": "T270"
      },
      {
        "dir": "out",
        "other": "A1080",
        "amt": 75792,
        "ch": "UPI",
        "time": "12:45",
        "branch": "Chennai",
        "txn_id": "T1596"
      },
      {
        "dir": "in",
        "other": "A1132",
        "amt": 68673,
        "ch": "RTGS",
        "time": "13:33",
        "branch": "Bangalore",
        "txn_id": "T911"
      }
    ]
  },
  {
    "id": "A1138",
    "name": "A1138",
    "type": "Student",
    "age": 44,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9660,442",
    "outflow": "\u20b9876,818",
    "connections": 17,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1138",
        "A1094",
        "A1025",
        "A1138"
      ],
      [
        "A1138",
        "A1145",
        "A1132",
        "A1138"
      ],
      [
        "A1138",
        "A1183",
        "A1157",
        "A1138"
      ]
    ],
    "openDate": "2024-01-28",
    "lastTxn": "2025-08-22",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1025",
        "amt": 280226,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1929"
      },
      {
        "dir": "out",
        "other": "A1183",
        "amt": 278184,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1930"
      },
      {
        "dir": "in",
        "other": "A1116",
        "amt": 96753,
        "ch": "IMPS",
        "time": "08:30",
        "branch": "Delhi",
        "txn_id": "T1628"
      },
      {
        "dir": "out",
        "other": "A1094",
        "amt": 90925,
        "ch": "UPI",
        "time": "21:34",
        "branch": "Mumbai",
        "txn_id": "T1187"
      },
      {
        "dir": "in",
        "other": "A1166",
        "amt": 90828,
        "ch": "NEFT",
        "time": "11:52",
        "branch": "Kolkata",
        "txn_id": "T871"
      },
      {
        "dir": "out",
        "other": "A1174",
        "amt": 89301,
        "ch": "RTGS",
        "time": "10:42",
        "branch": "Delhi",
        "txn_id": "T407"
      },
      {
        "dir": "out",
        "other": "A1107",
        "amt": 85140,
        "ch": "ATM",
        "time": "23:04",
        "branch": "Bangalore",
        "txn_id": "T1451"
      },
      {
        "dir": "out",
        "other": "A1145",
        "amt": 84986,
        "ch": "NEFT",
        "time": "10:35",
        "branch": "Delhi",
        "txn_id": "T520"
      }
    ]
  },
  {
    "id": "A1139",
    "name": "A1139",
    "type": "Govt Employee",
    "age": 18,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9677,358",
    "outflow": "\u20b9603,307",
    "connections": 23,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1139",
        "A1143",
        "A1090",
        "A1139"
      ],
      [
        "A1139",
        "A1098",
        "A1103",
        "A1139"
      ]
    ],
    "openDate": "2022-02-15",
    "lastTxn": "2023-05-09",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1088",
        "amt": 94434,
        "ch": "RTGS",
        "time": "19:23",
        "branch": "Kolkata",
        "txn_id": "T1379"
      },
      {
        "dir": "in",
        "other": "A1076",
        "amt": 92943,
        "ch": "IMPS",
        "time": "22:11",
        "branch": "Mumbai",
        "txn_id": "T1702"
      },
      {
        "dir": "in",
        "other": "A1186",
        "amt": 83861,
        "ch": "ATM",
        "time": "09:36",
        "branch": "Bangalore",
        "txn_id": "T293"
      },
      {
        "dir": "out",
        "other": "A1164",
        "amt": 82769,
        "ch": "UPI",
        "time": "17:47",
        "branch": "Delhi",
        "txn_id": "T241"
      },
      {
        "dir": "out",
        "other": "A1098",
        "amt": 82203,
        "ch": "UPI",
        "time": "08:18",
        "branch": "Chennai",
        "txn_id": "T1018"
      },
      {
        "dir": "out",
        "other": "A1078",
        "amt": 78319,
        "ch": "UPI",
        "time": "10:37",
        "branch": "Kolkata",
        "txn_id": "T199"
      },
      {
        "dir": "out",
        "other": "A1105",
        "amt": 74464,
        "ch": "RTGS",
        "time": "06:26",
        "branch": "Bangalore",
        "txn_id": "T578"
      },
      {
        "dir": "out",
        "other": "A1070",
        "amt": 71952,
        "ch": "ATM",
        "time": "22:36",
        "branch": "Kolkata",
        "txn_id": "T257"
      }
    ]
  },
  {
    "id": "A1140",
    "name": "A1140",
    "type": "Student",
    "age": 65,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9979,362",
    "outflow": "\u20b9188,167",
    "connections": 26,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1140",
        "A1019",
        "A1024",
        "A1140"
      ],
      [
        "A1140",
        "A1126",
        "A1022",
        "A1140"
      ],
      [
        "A1140",
        "A1126",
        "A1151",
        "A1140"
      ]
    ],
    "openDate": "2016-11-09",
    "lastTxn": "2019-03-26",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1026",
        "amt": 97294,
        "ch": "UPI",
        "time": "19:03",
        "branch": "Chennai",
        "txn_id": "T447"
      },
      {
        "dir": "in",
        "other": "A1188",
        "amt": 95207,
        "ch": "NEFT",
        "time": "20:39",
        "branch": "Mumbai",
        "txn_id": "T1378"
      },
      {
        "dir": "in",
        "other": "A1058",
        "amt": 83100,
        "ch": "IMPS",
        "time": "01:34",
        "branch": "Kolkata",
        "txn_id": "T1017"
      },
      {
        "dir": "in",
        "other": "A1044",
        "amt": 83019,
        "ch": "UPI",
        "time": "12:40",
        "branch": "Mumbai",
        "txn_id": "T179"
      },
      {
        "dir": "in",
        "other": "A1102",
        "amt": 81870,
        "ch": "NEFT",
        "time": "02:16",
        "branch": "Chennai",
        "txn_id": "T1354"
      },
      {
        "dir": "in",
        "other": "A1002",
        "amt": 66990,
        "ch": "ATM",
        "time": "20:27",
        "branch": "Bangalore",
        "txn_id": "T155"
      },
      {
        "dir": "in",
        "other": "A1022",
        "amt": 66530,
        "ch": "UPI",
        "time": "23:02",
        "branch": "Bangalore",
        "txn_id": "T1703"
      },
      {
        "dir": "in",
        "other": "A1020",
        "amt": 65245,
        "ch": "IMPS",
        "time": "01:59",
        "branch": "Kolkata",
        "txn_id": "T1256"
      }
    ]
  },
  {
    "id": "A1141",
    "name": "A1141",
    "type": "Business",
    "age": 51,
    "risk": "fraud",
    "riskScore": 70,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9327,108",
    "outflow": "\u20b9541,810",
    "connections": 15,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1141",
        "A1053",
        "A1141"
      ],
      [
        "A1141",
        "A1053",
        "A1072",
        "A1141"
      ],
      [
        "A1141",
        "A1053",
        "A1067",
        "A1141"
      ]
    ],
    "openDate": "2019-11-03",
    "lastTxn": "2021-06-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1072",
        "amt": 91444,
        "ch": "IMPS",
        "time": "05:25",
        "branch": "Delhi",
        "txn_id": "T1857"
      },
      {
        "dir": "out",
        "other": "A1186",
        "amt": 90717,
        "ch": "UPI",
        "time": "18:52",
        "branch": "Chennai",
        "txn_id": "T1372"
      },
      {
        "dir": "out",
        "other": "A1099",
        "amt": 84514,
        "ch": "RTGS",
        "time": "08:50",
        "branch": "Chennai",
        "txn_id": "T653"
      },
      {
        "dir": "out",
        "other": "A1113",
        "amt": 81970,
        "ch": "ATM",
        "time": "11:34",
        "branch": "Chennai",
        "txn_id": "T1140"
      },
      {
        "dir": "in",
        "other": "A1067",
        "amt": 80893,
        "ch": "NEFT",
        "time": "02:14",
        "branch": "Bangalore",
        "txn_id": "T945"
      },
      {
        "dir": "out",
        "other": "A1165",
        "amt": 70907,
        "ch": "UPI",
        "time": "01:27",
        "branch": "Bangalore",
        "txn_id": "T1154"
      },
      {
        "dir": "in",
        "other": "A1100",
        "amt": 64225,
        "ch": "IMPS",
        "time": "19:56",
        "branch": "Mumbai",
        "txn_id": "T1601"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 61015,
        "ch": "NEFT",
        "time": "22:02",
        "branch": "Delhi",
        "txn_id": "T1024"
      }
    ]
  },
  {
    "id": "A1142",
    "name": "A1142",
    "type": "Student",
    "age": 22,
    "risk": "fraud",
    "riskScore": 75,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b91,147,936",
    "outflow": "\u20b91,028,104",
    "connections": 15,
    "dormant": true,
    "structuring": 0,
    "circles": [
      [
        "A1142",
        "A1101",
        "A1073",
        "A1142"
      ],
      [
        "A1142",
        "A1101",
        "A1064",
        "A1142"
      ],
      [
        "A1142",
        "A1126",
        "A1022",
        "A1142"
      ]
    ],
    "openDate": "2016-04-26",
    "lastTxn": "2016-10-18",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1126",
        "amt": 769809,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2027"
      },
      {
        "dir": "in",
        "other": "A1096",
        "amt": 682041,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2022"
      },
      {
        "dir": "in",
        "other": "A1058",
        "amt": 91526,
        "ch": "IMPS",
        "time": "15:35",
        "branch": "Mumbai",
        "txn_id": "T1092"
      },
      {
        "dir": "in",
        "other": "A1064",
        "amt": 90489,
        "ch": "NEFT",
        "time": "03:04",
        "branch": "Kolkata",
        "txn_id": "T755"
      },
      {
        "dir": "in",
        "other": "A1113",
        "amt": 70404,
        "ch": "IMPS",
        "time": "06:36",
        "branch": "Kolkata",
        "txn_id": "T1048"
      },
      {
        "dir": "in",
        "other": "A1153",
        "amt": 66764,
        "ch": "UPI",
        "time": "00:25",
        "branch": "Kolkata",
        "txn_id": "T885"
      },
      {
        "dir": "in",
        "other": "A1056",
        "amt": 65698,
        "ch": "ATM",
        "time": "04:22",
        "branch": "Kolkata",
        "txn_id": "T846"
      },
      {
        "dir": "out",
        "other": "A1126",
        "amt": 63383,
        "ch": "ATM",
        "time": "08:41",
        "branch": "Delhi",
        "txn_id": "T633"
      }
    ]
  },
  {
    "id": "A1143",
    "name": "A1143",
    "type": "Doctor",
    "age": 61,
    "risk": "fraud",
    "riskScore": 93,
    "riskLevel": "High",
    "income": "\u20b910L",
    "inflow": "\u20b9951,214",
    "outflow": "\u20b9612,867",
    "connections": 18,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1143",
        "A1156",
        "A1044",
        "A1143"
      ],
      [
        "A1143",
        "A1156",
        "A1108",
        "A1143"
      ],
      [
        "A1143",
        "A1009",
        "A1192",
        "A1143"
      ]
    ],
    "openDate": "2022-06-24",
    "lastTxn": "2022-10-12",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1001",
        "amt": 348605,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1911"
      },
      {
        "dir": "in",
        "other": "A1190",
        "amt": 344883,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1910"
      },
      {
        "dir": "in",
        "other": "A1110",
        "amt": 84027,
        "ch": "ATM",
        "time": "08:14",
        "branch": "Kolkata",
        "txn_id": "T1820"
      },
      {
        "dir": "in",
        "other": "A1108",
        "amt": 80282,
        "ch": "RTGS",
        "time": "20:52",
        "branch": "Kolkata",
        "txn_id": "T939"
      },
      {
        "dir": "in",
        "other": "A1199",
        "amt": 79149,
        "ch": "RTGS",
        "time": "22:42",
        "branch": "Bangalore",
        "txn_id": "T831"
      },
      {
        "dir": "in",
        "other": "A1003",
        "amt": 75978,
        "ch": "RTGS",
        "time": "21:24",
        "branch": "Chennai",
        "txn_id": "T969"
      },
      {
        "dir": "in",
        "other": "A1152",
        "amt": 68352,
        "ch": "NEFT",
        "time": "20:58",
        "branch": "Mumbai",
        "txn_id": "T1355"
      },
      {
        "dir": "in",
        "other": "A1192",
        "amt": 64669,
        "ch": "UPI",
        "time": "13:40",
        "branch": "Chennai",
        "txn_id": "T700"
      }
    ]
  },
  {
    "id": "A1144",
    "name": "A1144",
    "type": "Teacher",
    "age": 30,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9849,269",
    "outflow": "\u20b9713,270",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1144",
        "A1199",
        "A1144"
      ],
      [
        "A1144",
        "A1199",
        "A1130",
        "A1144"
      ],
      [
        "A1144",
        "A1199",
        "A1074",
        "A1144"
      ]
    ],
    "openDate": "2015-12-07",
    "lastTxn": "2016-02-09",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1002",
        "amt": 249736,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1907"
      },
      {
        "dir": "out",
        "other": "A1181",
        "amt": 247557,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1908"
      },
      {
        "dir": "out",
        "other": "A1075",
        "amt": 86654,
        "ch": "ATM",
        "time": "11:26",
        "branch": "Chennai",
        "txn_id": "T865"
      },
      {
        "dir": "in",
        "other": "A1167",
        "amt": 84575,
        "ch": "RTGS",
        "time": "17:37",
        "branch": "Kolkata",
        "txn_id": "T1798"
      },
      {
        "dir": "out",
        "other": "A1127",
        "amt": 82886,
        "ch": "NEFT",
        "time": "04:43",
        "branch": "Chennai",
        "txn_id": "T712"
      },
      {
        "dir": "in",
        "other": "A1005",
        "amt": 82482,
        "ch": "RTGS",
        "time": "17:59",
        "branch": "Bangalore",
        "txn_id": "T1307"
      },
      {
        "dir": "out",
        "other": "A1131",
        "amt": 81158,
        "ch": "UPI",
        "time": "12:10",
        "branch": "Bangalore",
        "txn_id": "T1546"
      },
      {
        "dir": "out",
        "other": "A1029",
        "amt": 80072,
        "ch": "UPI",
        "time": "23:51",
        "branch": "Bangalore",
        "txn_id": "T1733"
      }
    ]
  },
  {
    "id": "A1145",
    "name": "A1145",
    "type": "Business",
    "age": 61,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9679,887",
    "outflow": "\u20b9467,148",
    "connections": 19,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1145",
        "A1015",
        "A1145"
      ],
      [
        "A1145",
        "A1015",
        "A1108",
        "A1145"
      ],
      [
        "A1145",
        "A1161",
        "A1146",
        "A1145"
      ]
    ],
    "openDate": "2019-12-08",
    "lastTxn": "2022-02-03",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1052",
        "amt": 99672,
        "ch": "NEFT",
        "time": "23:48",
        "branch": "Bangalore",
        "txn_id": "T267"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 89644,
        "ch": "RTGS",
        "time": "08:09",
        "branch": "Kolkata",
        "txn_id": "T1578"
      },
      {
        "dir": "in",
        "other": "A1138",
        "amt": 84986,
        "ch": "NEFT",
        "time": "10:35",
        "branch": "Delhi",
        "txn_id": "T520"
      },
      {
        "dir": "out",
        "other": "A1010",
        "amt": 82384,
        "ch": "UPI",
        "time": "20:04",
        "branch": "Kolkata",
        "txn_id": "T1780"
      },
      {
        "dir": "in",
        "other": "A1148",
        "amt": 78875,
        "ch": "UPI",
        "time": "20:02",
        "branch": "Mumbai",
        "txn_id": "T1396"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 74515,
        "ch": "NEFT",
        "time": "00:25",
        "branch": "Kolkata",
        "txn_id": "T1231"
      },
      {
        "dir": "in",
        "other": "A1146",
        "amt": 71632,
        "ch": "RTGS",
        "time": "04:33",
        "branch": "Chennai",
        "txn_id": "T230"
      },
      {
        "dir": "out",
        "other": "A1015",
        "amt": 71418,
        "ch": "ATM",
        "time": "07:55",
        "branch": "Mumbai",
        "txn_id": "T513"
      }
    ]
  },
  {
    "id": "A1146",
    "name": "A1146",
    "type": "Doctor",
    "age": 20,
    "risk": "fraud",
    "riskScore": 99,
    "riskLevel": "High",
    "income": "\u20b92L",
    "inflow": "\u20b9405,172",
    "outflow": "\u20b9705,198",
    "connections": 18,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1146",
        "A1148",
        "A1161",
        "A1146"
      ],
      [
        "A1146",
        "A1148",
        "A1193",
        "A1146"
      ],
      [
        "A1146",
        "A1024",
        "A1187",
        "A1146"
      ]
    ],
    "openDate": "2020-04-27",
    "lastTxn": "2022-02-28",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1123",
        "amt": 95919,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1968"
      },
      {
        "dir": "out",
        "other": "A1076",
        "amt": 95919,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1969"
      },
      {
        "dir": "out",
        "other": "A1025",
        "amt": 85885,
        "ch": "IMPS",
        "time": "18:03",
        "branch": "Bangalore",
        "txn_id": "T342"
      },
      {
        "dir": "out",
        "other": "A1137",
        "amt": 77444,
        "ch": "NEFT",
        "time": "21:42",
        "branch": "Bangalore",
        "txn_id": "T270"
      },
      {
        "dir": "in",
        "other": "A1144",
        "amt": 77300,
        "ch": "NEFT",
        "time": "01:01",
        "branch": "Bangalore",
        "txn_id": "T1039"
      },
      {
        "dir": "out",
        "other": "A1073",
        "amt": 71651,
        "ch": "IMPS",
        "time": "21:04",
        "branch": "Bangalore",
        "txn_id": "T1316"
      },
      {
        "dir": "out",
        "other": "A1145",
        "amt": 71632,
        "ch": "RTGS",
        "time": "04:33",
        "branch": "Chennai",
        "txn_id": "T230"
      },
      {
        "dir": "out",
        "other": "A1148",
        "amt": 68430,
        "ch": "RTGS",
        "time": "23:46",
        "branch": "Delhi",
        "txn_id": "T933"
      }
    ]
  },
  {
    "id": "A1147",
    "name": "A1147",
    "type": "Engineer",
    "age": 23,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9691,053",
    "outflow": "\u20b9519,974",
    "connections": 19,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1147",
        "A1101",
        "A1064",
        "A1147"
      ],
      [
        "A1147",
        "A1189",
        "A1134",
        "A1147"
      ],
      [
        "A1147",
        "A1068",
        "A1116",
        "A1147"
      ]
    ],
    "openDate": "2019-08-10",
    "lastTxn": "2022-01-22",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1077",
        "amt": 203604,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1914"
      },
      {
        "dir": "out",
        "other": "A1101",
        "amt": 202926,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1915"
      },
      {
        "dir": "out",
        "other": "A1045",
        "amt": 88137,
        "ch": "UPI",
        "time": "07:05",
        "branch": "Delhi",
        "txn_id": "T1584"
      },
      {
        "dir": "in",
        "other": "A1180",
        "amt": 78690,
        "ch": "UPI",
        "time": "11:42",
        "branch": "Kolkata",
        "txn_id": "T258"
      },
      {
        "dir": "in",
        "other": "A1097",
        "amt": 78442,
        "ch": "NEFT",
        "time": "03:29",
        "branch": "Mumbai",
        "txn_id": "T163"
      },
      {
        "dir": "out",
        "other": "A1192",
        "amt": 72654,
        "ch": "RTGS",
        "time": "14:18",
        "branch": "Kolkata",
        "txn_id": "T1410"
      },
      {
        "dir": "out",
        "other": "A1019",
        "amt": 71251,
        "ch": "NEFT",
        "time": "21:34",
        "branch": "Chennai",
        "txn_id": "T1623"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 65835,
        "ch": "NEFT",
        "time": "00:13",
        "branch": "Delhi",
        "txn_id": "T770"
      }
    ]
  },
  {
    "id": "A1148",
    "name": "A1148",
    "type": "Student",
    "age": 37,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9389,678",
    "outflow": "\u20b9857,210",
    "connections": 22,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1148",
        "A1072",
        "A1001",
        "A1148"
      ],
      [
        "A1148",
        "A1076",
        "A1006",
        "A1148"
      ],
      [
        "A1148",
        "A1161",
        "A1001",
        "A1148"
      ]
    ],
    "openDate": "2018-12-18",
    "lastTxn": "2020-07-19",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1136",
        "amt": 95703,
        "ch": "UPI",
        "time": "00:32",
        "branch": "Kolkata",
        "txn_id": "T749"
      },
      {
        "dir": "out",
        "other": "A1022",
        "amt": 94782,
        "ch": "IMPS",
        "time": "00:37",
        "branch": "Bangalore",
        "txn_id": "T1652"
      },
      {
        "dir": "out",
        "other": "A1072",
        "amt": 87366,
        "ch": "IMPS",
        "time": "18:42",
        "branch": "Kolkata",
        "txn_id": "T769"
      },
      {
        "dir": "out",
        "other": "A1023",
        "amt": 82709,
        "ch": "IMPS",
        "time": "12:26",
        "branch": "Bangalore",
        "txn_id": "T1097"
      },
      {
        "dir": "out",
        "other": "A1145",
        "amt": 78875,
        "ch": "UPI",
        "time": "20:02",
        "branch": "Mumbai",
        "txn_id": "T1396"
      },
      {
        "dir": "in",
        "other": "A1038",
        "amt": 70850,
        "ch": "NEFT",
        "time": "14:03",
        "branch": "Kolkata",
        "txn_id": "T1646"
      },
      {
        "dir": "out",
        "other": "A1184",
        "amt": 69490,
        "ch": "IMPS",
        "time": "01:11",
        "branch": "Mumbai",
        "txn_id": "T561"
      },
      {
        "dir": "in",
        "other": "A1146",
        "amt": 68430,
        "ch": "RTGS",
        "time": "23:46",
        "branch": "Delhi",
        "txn_id": "T933"
      }
    ]
  },
  {
    "id": "A1149",
    "name": "A1149",
    "type": "Teacher",
    "age": 54,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9606,270",
    "outflow": "\u20b9372,920",
    "connections": 19,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1149",
        "A1092",
        "A1051",
        "A1149"
      ],
      [
        "A1149",
        "A1126",
        "A1168",
        "A1149"
      ],
      [
        "A1149",
        "A1035",
        "A1170",
        "A1149"
      ]
    ],
    "openDate": "2015-09-11",
    "lastTxn": "2016-12-09",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1177",
        "amt": 94222,
        "ch": "ATM",
        "time": "08:49",
        "branch": "Bangalore",
        "txn_id": "T1086"
      },
      {
        "dir": "out",
        "other": "A1016",
        "amt": 75399,
        "ch": "NEFT",
        "time": "10:31",
        "branch": "Kolkata",
        "txn_id": "T955"
      },
      {
        "dir": "in",
        "other": "A1027",
        "amt": 72685,
        "ch": "UPI",
        "time": "18:13",
        "branch": "Kolkata",
        "txn_id": "T1069"
      },
      {
        "dir": "out",
        "other": "A1035",
        "amt": 71805,
        "ch": "IMPS",
        "time": "16:51",
        "branch": "Chennai",
        "txn_id": "T1311"
      },
      {
        "dir": "in",
        "other": "A1046",
        "amt": 65195,
        "ch": "IMPS",
        "time": "14:53",
        "branch": "Bangalore",
        "txn_id": "T548"
      },
      {
        "dir": "out",
        "other": "A1024",
        "amt": 64421,
        "ch": "ATM",
        "time": "21:44",
        "branch": "Delhi",
        "txn_id": "T164"
      },
      {
        "dir": "in",
        "other": "A1026",
        "amt": 59658,
        "ch": "UPI",
        "time": "23:42",
        "branch": "Bangalore",
        "txn_id": "T1536"
      },
      {
        "dir": "out",
        "other": "A1092",
        "amt": 59591,
        "ch": "RTGS",
        "time": "02:31",
        "branch": "Kolkata",
        "txn_id": "T113"
      }
    ]
  },
  {
    "id": "A1150",
    "name": "A1150",
    "type": "Teacher",
    "age": 48,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9488,769",
    "outflow": "\u20b9669,337",
    "connections": 17,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1150",
        "A1084",
        "A1154",
        "A1150"
      ],
      [
        "A1150",
        "A1016",
        "A1064",
        "A1150"
      ]
    ],
    "openDate": "2023-05-05",
    "lastTxn": "2024-05-04",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1016",
        "amt": 209725,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1940"
      },
      {
        "dir": "in",
        "other": "A1174",
        "amt": 209581,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1939"
      },
      {
        "dir": "out",
        "other": "A1094",
        "amt": 92840,
        "ch": "ATM",
        "time": "15:37",
        "branch": "Delhi",
        "txn_id": "T924"
      },
      {
        "dir": "in",
        "other": "A1154",
        "amt": 91747,
        "ch": "NEFT",
        "time": "08:50",
        "branch": "Kolkata",
        "txn_id": "T315"
      },
      {
        "dir": "out",
        "other": "A1084",
        "amt": 68756,
        "ch": "RTGS",
        "time": "01:07",
        "branch": "Bangalore",
        "txn_id": "T1055"
      },
      {
        "dir": "out",
        "other": "A1125",
        "amt": 68452,
        "ch": "RTGS",
        "time": "07:48",
        "branch": "Kolkata",
        "txn_id": "T200"
      },
      {
        "dir": "in",
        "other": "A1128",
        "amt": 66106,
        "ch": "RTGS",
        "time": "16:36",
        "branch": "Bangalore",
        "txn_id": "T360"
      },
      {
        "dir": "out",
        "other": "A1113",
        "amt": 65746,
        "ch": "IMPS",
        "time": "04:42",
        "branch": "Chennai",
        "txn_id": "T1697"
      }
    ]
  },
  {
    "id": "A1151",
    "name": "A1151",
    "type": "Teacher",
    "age": 58,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9230,104",
    "outflow": "\u20b9325,915",
    "connections": 11,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1151",
        "A1006",
        "A1020",
        "A1151"
      ],
      [
        "A1151",
        "A1140",
        "A1126",
        "A1151"
      ]
    ],
    "openDate": "2018-02-22",
    "lastTxn": "2018-09-22",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1133",
        "amt": 90753,
        "ch": "RTGS",
        "time": "01:13",
        "branch": "Mumbai",
        "txn_id": "T650"
      },
      {
        "dir": "in",
        "other": "A1020",
        "amt": 79597,
        "ch": "ATM",
        "time": "17:53",
        "branch": "Delhi",
        "txn_id": "T1620"
      },
      {
        "dir": "out",
        "other": "A1153",
        "amt": 70149,
        "ch": "NEFT",
        "time": "09:18",
        "branch": "Mumbai",
        "txn_id": "T1777"
      },
      {
        "dir": "in",
        "other": "A1103",
        "amt": 63262,
        "ch": "RTGS",
        "time": "06:54",
        "branch": "Chennai",
        "txn_id": "T411"
      },
      {
        "dir": "in",
        "other": "A1053",
        "amt": 57509,
        "ch": "ATM",
        "time": "12:49",
        "branch": "Mumbai",
        "txn_id": "T221"
      },
      {
        "dir": "out",
        "other": "A1006",
        "amt": 51436,
        "ch": "RTGS",
        "time": "04:42",
        "branch": "Kolkata",
        "txn_id": "T767"
      },
      {
        "dir": "out",
        "other": "A1036",
        "amt": 38978,
        "ch": "UPI",
        "time": "06:24",
        "branch": "Chennai",
        "txn_id": "T1302"
      },
      {
        "dir": "out",
        "other": "A1082",
        "amt": 36430,
        "ch": "UPI",
        "time": "16:56",
        "branch": "Kolkata",
        "txn_id": "T576"
      }
    ]
  },
  {
    "id": "A1152",
    "name": "A1152",
    "type": "Govt Employee",
    "age": 35,
    "risk": "suspicious",
    "riskScore": 50,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9309,496",
    "outflow": "\u20b9547,013",
    "connections": 14,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1152",
        "A1191",
        "A1157",
        "A1152"
      ],
      [
        "A1152",
        "A1154",
        "A1180",
        "A1152"
      ],
      [
        "A1152",
        "A1129",
        "A1180",
        "A1152"
      ]
    ],
    "openDate": "2020-11-11",
    "lastTxn": "2022-03-28",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1129",
        "amt": 99610,
        "ch": "RTGS",
        "time": "06:34",
        "branch": "Mumbai",
        "txn_id": "T635"
      },
      {
        "dir": "out",
        "other": "A1100",
        "amt": 98210,
        "ch": "NEFT",
        "time": "04:37",
        "branch": "Chennai",
        "txn_id": "T208"
      },
      {
        "dir": "in",
        "other": "A1026",
        "amt": 91476,
        "ch": "RTGS",
        "time": "20:06",
        "branch": "Kolkata",
        "txn_id": "T1189"
      },
      {
        "dir": "in",
        "other": "A1157",
        "amt": 90493,
        "ch": "IMPS",
        "time": "10:43",
        "branch": "Bangalore",
        "txn_id": "T915"
      },
      {
        "dir": "in",
        "other": "A1086",
        "amt": 74144,
        "ch": "IMPS",
        "time": "12:05",
        "branch": "Mumbai",
        "txn_id": "T1046"
      },
      {
        "dir": "out",
        "other": "A1143",
        "amt": 68352,
        "ch": "NEFT",
        "time": "20:58",
        "branch": "Mumbai",
        "txn_id": "T1355"
      },
      {
        "dir": "out",
        "other": "A1048",
        "amt": 67249,
        "ch": "IMPS",
        "time": "05:18",
        "branch": "Mumbai",
        "txn_id": "T284"
      },
      {
        "dir": "out",
        "other": "A1015",
        "amt": 64439,
        "ch": "RTGS",
        "time": "17:42",
        "branch": "Bangalore",
        "txn_id": "T271"
      }
    ]
  },
  {
    "id": "A1153",
    "name": "A1153",
    "type": "Govt Employee",
    "age": 50,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9319,114",
    "outflow": "\u20b9702,516",
    "connections": 16,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1153",
        "A1130",
        "A1180",
        "A1153"
      ],
      [
        "A1153",
        "A1127",
        "A1153"
      ],
      [
        "A1153",
        "A1018",
        "A1180",
        "A1153"
      ]
    ],
    "openDate": "2017-01-21",
    "lastTxn": "2018-05-15",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1077",
        "amt": 98146,
        "ch": "UPI",
        "time": "01:46",
        "branch": "Kolkata",
        "txn_id": "T531"
      },
      {
        "dir": "out",
        "other": "A1106",
        "amt": 86194,
        "ch": "ATM",
        "time": "01:55",
        "branch": "Delhi",
        "txn_id": "T586"
      },
      {
        "dir": "in",
        "other": "A1066",
        "amt": 85994,
        "ch": "RTGS",
        "time": "11:15",
        "branch": "Kolkata",
        "txn_id": "T1819"
      },
      {
        "dir": "out",
        "other": "A1118",
        "amt": 84930,
        "ch": "NEFT",
        "time": "17:29",
        "branch": "Kolkata",
        "txn_id": "T592"
      },
      {
        "dir": "out",
        "other": "A1167",
        "amt": 80211,
        "ch": "IMPS",
        "time": "00:04",
        "branch": "Mumbai",
        "txn_id": "T999"
      },
      {
        "dir": "out",
        "other": "A1030",
        "amt": 78579,
        "ch": "UPI",
        "time": "23:51",
        "branch": "Delhi",
        "txn_id": "T1044"
      },
      {
        "dir": "in",
        "other": "A1151",
        "amt": 70149,
        "ch": "NEFT",
        "time": "09:18",
        "branch": "Mumbai",
        "txn_id": "T1777"
      },
      {
        "dir": "out",
        "other": "A1127",
        "amt": 70066,
        "ch": "UPI",
        "time": "22:20",
        "branch": "Mumbai",
        "txn_id": "T1518"
      }
    ]
  },
  {
    "id": "A1154",
    "name": "A1154",
    "type": "Teacher",
    "age": 43,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b91,354,391",
    "outflow": "\u20b91,178,476",
    "connections": 29,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1154",
        "A1134",
        "A1159",
        "A1154"
      ],
      [
        "A1154",
        "A1049",
        "A1081",
        "A1154"
      ],
      [
        "A1154",
        "A1172",
        "A1096",
        "A1154"
      ]
    ],
    "openDate": "2023-07-28",
    "lastTxn": "2025-02-07",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1084",
        "amt": 357773,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1928"
      },
      {
        "dir": "out",
        "other": "A1097",
        "amt": 319237,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1903"
      },
      {
        "dir": "in",
        "other": "A1159",
        "amt": 317608,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1902"
      },
      {
        "dir": "in",
        "other": "A1081",
        "amt": 108907,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1954"
      },
      {
        "dir": "out",
        "other": "A1049",
        "amt": 108907,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1955"
      },
      {
        "dir": "in",
        "other": "A1166",
        "amt": 99367,
        "ch": "NEFT",
        "time": "14:59",
        "branch": "Delhi",
        "txn_id": "T1869"
      },
      {
        "dir": "out",
        "other": "A1119",
        "amt": 98551,
        "ch": "UPI",
        "time": "03:19",
        "branch": "Bangalore",
        "txn_id": "T1831"
      },
      {
        "dir": "out",
        "other": "A1180",
        "amt": 93898,
        "ch": "ATM",
        "time": "12:40",
        "branch": "Bangalore",
        "txn_id": "T517"
      }
    ]
  },
  {
    "id": "A1155",
    "name": "A1155",
    "type": "Student",
    "age": 53,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9655,773",
    "outflow": "\u20b9466,948",
    "connections": 20,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1155",
        "A1003",
        "A1091",
        "A1155"
      ],
      [
        "A1155",
        "A1045",
        "A1011",
        "A1155"
      ],
      [
        "A1155",
        "A1031",
        "A1091",
        "A1155"
      ]
    ],
    "openDate": "2023-12-09",
    "lastTxn": "2026-04-27",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1101",
        "amt": 98552,
        "ch": "UPI",
        "time": "17:45",
        "branch": "Mumbai",
        "txn_id": "T1795"
      },
      {
        "dir": "in",
        "other": "A1015",
        "amt": 92964,
        "ch": "NEFT",
        "time": "00:53",
        "branch": "Bangalore",
        "txn_id": "T1365"
      },
      {
        "dir": "in",
        "other": "A1091",
        "amt": 84840,
        "ch": "RTGS",
        "time": "09:05",
        "branch": "Bangalore",
        "txn_id": "T512"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 83628,
        "ch": "NEFT",
        "time": "01:52",
        "branch": "Kolkata",
        "txn_id": "T1502"
      },
      {
        "dir": "out",
        "other": "A1045",
        "amt": 81078,
        "ch": "UPI",
        "time": "14:30",
        "branch": "Bangalore",
        "txn_id": "T1544"
      },
      {
        "dir": "in",
        "other": "A1136",
        "amt": 76691,
        "ch": "RTGS",
        "time": "20:39",
        "branch": "Delhi",
        "txn_id": "T1662"
      },
      {
        "dir": "in",
        "other": "A1163",
        "amt": 75658,
        "ch": "IMPS",
        "time": "21:05",
        "branch": "Mumbai",
        "txn_id": "T640"
      },
      {
        "dir": "out",
        "other": "A1003",
        "amt": 74915,
        "ch": "RTGS",
        "time": "15:55",
        "branch": "Chennai",
        "txn_id": "T1524"
      }
    ]
  },
  {
    "id": "A1156",
    "name": "A1156",
    "type": "Freelancer",
    "age": 53,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9289,669",
    "outflow": "\u20b9207,390",
    "connections": 14,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1156",
        "A1044",
        "A1143",
        "A1156"
      ],
      [
        "A1156",
        "A1108",
        "A1143",
        "A1156"
      ],
      [
        "A1156",
        "A1082",
        "A1100",
        "A1156"
      ]
    ],
    "openDate": "2024-04-03",
    "lastTxn": "2026-03-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1049",
        "amt": 78012,
        "ch": "NEFT",
        "time": "00:57",
        "branch": "Chennai",
        "txn_id": "T299"
      },
      {
        "dir": "in",
        "other": "A1036",
        "amt": 68733,
        "ch": "RTGS",
        "time": "00:21",
        "branch": "Bangalore",
        "txn_id": "T521"
      },
      {
        "dir": "out",
        "other": "A1186",
        "amt": 52857,
        "ch": "IMPS",
        "time": "11:26",
        "branch": "Chennai",
        "txn_id": "T1067"
      },
      {
        "dir": "in",
        "other": "A1143",
        "amt": 49935,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T2014"
      },
      {
        "dir": "out",
        "other": "A1108",
        "amt": 46997,
        "ch": "NEFT",
        "time": "07:11",
        "branch": "Mumbai",
        "txn_id": "T1209"
      },
      {
        "dir": "out",
        "other": "A1044",
        "amt": 42196,
        "ch": "UPI",
        "time": "18:22",
        "branch": "Chennai",
        "txn_id": "T1459"
      },
      {
        "dir": "out",
        "other": "A1082",
        "amt": 40084,
        "ch": "RTGS",
        "time": "03:05",
        "branch": "Bangalore",
        "txn_id": "T1211"
      },
      {
        "dir": "in",
        "other": "A1089",
        "amt": 35914,
        "ch": "UPI",
        "time": "18:23",
        "branch": "Bangalore",
        "txn_id": "T726"
      }
    ]
  },
  {
    "id": "A1157",
    "name": "A1157",
    "type": "Govt Employee",
    "age": 63,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9608,049",
    "outflow": "\u20b9546,405",
    "connections": 22,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1157",
        "A1040",
        "A1157"
      ],
      [
        "A1157",
        "A1048",
        "A1025",
        "A1157"
      ],
      [
        "A1157",
        "A1116",
        "A1040",
        "A1157"
      ]
    ],
    "openDate": "2020-05-20",
    "lastTxn": "2022-01-02",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1016",
        "amt": 98605,
        "ch": "IMPS",
        "time": "11:52",
        "branch": "Bangalore",
        "txn_id": "T864"
      },
      {
        "dir": "out",
        "other": "A1152",
        "amt": 90493,
        "ch": "IMPS",
        "time": "10:43",
        "branch": "Bangalore",
        "txn_id": "T915"
      },
      {
        "dir": "out",
        "other": "A1124",
        "amt": 86925,
        "ch": "UPI",
        "time": "09:27",
        "branch": "Chennai",
        "txn_id": "T620"
      },
      {
        "dir": "in",
        "other": "A1071",
        "amt": 84916,
        "ch": "ATM",
        "time": "14:25",
        "branch": "Chennai",
        "txn_id": "T1400"
      },
      {
        "dir": "out",
        "other": "A1138",
        "amt": 80832,
        "ch": "NEFT",
        "time": "09:10",
        "branch": "Mumbai",
        "txn_id": "T1813"
      },
      {
        "dir": "in",
        "other": "A1062",
        "amt": 66415,
        "ch": "ATM",
        "time": "05:30",
        "branch": "Mumbai",
        "txn_id": "T486"
      },
      {
        "dir": "in",
        "other": "A1101",
        "amt": 62725,
        "ch": "UPI",
        "time": "05:40",
        "branch": "Kolkata",
        "txn_id": "T162"
      },
      {
        "dir": "out",
        "other": "A1048",
        "amt": 59068,
        "ch": "ATM",
        "time": "20:40",
        "branch": "Bangalore",
        "txn_id": "T1065"
      }
    ]
  },
  {
    "id": "A1158",
    "name": "A1158",
    "type": "Engineer",
    "age": 21,
    "risk": "fraud",
    "riskScore": 90,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9497,282",
    "outflow": "\u20b9489,618",
    "connections": 18,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1158",
        "A1128",
        "A1112",
        "A1158"
      ],
      [
        "A1158",
        "A1124",
        "A1112",
        "A1158"
      ]
    ],
    "openDate": "2024-07-24",
    "lastTxn": "2026-06-08",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1137",
        "amt": 95964,
        "ch": "RTGS",
        "time": "02:30",
        "branch": "Bangalore",
        "txn_id": "T309"
      },
      {
        "dir": "out",
        "other": "A1025",
        "amt": 92917,
        "ch": "NEFT",
        "time": "23:00",
        "branch": "Chennai",
        "txn_id": "T505"
      },
      {
        "dir": "out",
        "other": "A1092",
        "amt": 80055,
        "ch": "IMPS",
        "time": "13:37",
        "branch": "Delhi",
        "txn_id": "T460"
      },
      {
        "dir": "out",
        "other": "A1166",
        "amt": 79328,
        "ch": "IMPS",
        "time": "08:40",
        "branch": "Delhi",
        "txn_id": "T824"
      },
      {
        "dir": "in",
        "other": "A1112",
        "amt": 73753,
        "ch": "IMPS",
        "time": "02:26",
        "branch": "Kolkata",
        "txn_id": "T1786"
      },
      {
        "dir": "out",
        "other": "A1124",
        "amt": 70461,
        "ch": "ATM",
        "time": "07:10",
        "branch": "Mumbai",
        "txn_id": "T334"
      },
      {
        "dir": "in",
        "other": "A1164",
        "amt": 64410,
        "ch": "RTGS",
        "time": "00:17",
        "branch": "Delhi",
        "txn_id": "T1778"
      },
      {
        "dir": "in",
        "other": "A1047",
        "amt": 62881,
        "ch": "UPI",
        "time": "11:50",
        "branch": "Delhi",
        "txn_id": "T1781"
      }
    ]
  },
  {
    "id": "A1159",
    "name": "A1159",
    "type": "Teacher",
    "age": 33,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9551,506",
    "outflow": "\u20b9743,684",
    "connections": 18,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1159",
        "A1187",
        "A1022",
        "A1159"
      ],
      [
        "A1159",
        "A1154",
        "A1134",
        "A1159"
      ],
      [
        "A1159",
        "A1184",
        "A1134",
        "A1159"
      ]
    ],
    "openDate": "2019-12-03",
    "lastTxn": "2020-02-10",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1002",
        "amt": 320461,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1901"
      },
      {
        "dir": "out",
        "other": "A1154",
        "amt": 317608,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1902"
      },
      {
        "dir": "out",
        "other": "A1007",
        "amt": 93654,
        "ch": "NEFT",
        "time": "12:31",
        "branch": "Chennai",
        "txn_id": "T1207"
      },
      {
        "dir": "in",
        "other": "A1016",
        "amt": 93021,
        "ch": "IMPS",
        "time": "03:39",
        "branch": "Delhi",
        "txn_id": "T1746"
      },
      {
        "dir": "in",
        "other": "A1022",
        "amt": 77533,
        "ch": "ATM",
        "time": "13:09",
        "branch": "Mumbai",
        "txn_id": "T1058"
      },
      {
        "dir": "out",
        "other": "A1164",
        "amt": 75629,
        "ch": "IMPS",
        "time": "05:37",
        "branch": "Kolkata",
        "txn_id": "T243"
      },
      {
        "dir": "out",
        "other": "A1108",
        "amt": 71268,
        "ch": "UPI",
        "time": "12:34",
        "branch": "Mumbai",
        "txn_id": "T1368"
      },
      {
        "dir": "out",
        "other": "A1160",
        "amt": 53729,
        "ch": "IMPS",
        "time": "06:57",
        "branch": "Chennai",
        "txn_id": "T895"
      }
    ]
  },
  {
    "id": "A1160",
    "name": "A1160",
    "type": "Govt Employee",
    "age": 44,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b915L",
    "inflow": "\u20b9837,860",
    "outflow": "\u20b9352,555",
    "connections": 18,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1160",
        "A1020",
        "A1127",
        "A1160"
      ],
      [
        "A1160",
        "A1168",
        "A1069",
        "A1160"
      ],
      [
        "A1160",
        "A1168",
        "A1055",
        "A1160"
      ]
    ],
    "openDate": "2019-02-26",
    "lastTxn": "2020-08-13",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1069",
        "amt": 122515,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1951"
      },
      {
        "dir": "out",
        "other": "A1168",
        "amt": 122515,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1952"
      },
      {
        "dir": "out",
        "other": "A1166",
        "amt": 96798,
        "ch": "UPI",
        "time": "17:03",
        "branch": "Mumbai",
        "txn_id": "T1267"
      },
      {
        "dir": "in",
        "other": "A1063",
        "amt": 96771,
        "ch": "ATM",
        "time": "16:59",
        "branch": "Chennai",
        "txn_id": "T1603"
      },
      {
        "dir": "in",
        "other": "A1055",
        "amt": 89808,
        "ch": "UPI",
        "time": "12:51",
        "branch": "Bangalore",
        "txn_id": "T1562"
      },
      {
        "dir": "in",
        "other": "A1008",
        "amt": 88289,
        "ch": "RTGS",
        "time": "10:53",
        "branch": "Mumbai",
        "txn_id": "T425"
      },
      {
        "dir": "in",
        "other": "A1013",
        "amt": 87014,
        "ch": "IMPS",
        "time": "06:03",
        "branch": "Kolkata",
        "txn_id": "T385"
      },
      {
        "dir": "in",
        "other": "A1127",
        "amt": 76571,
        "ch": "NEFT",
        "time": "11:07",
        "branch": "Chennai",
        "txn_id": "T1101"
      }
    ]
  },
  {
    "id": "A1161",
    "name": "A1161",
    "type": "Doctor",
    "age": 40,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b91,199,334",
    "outflow": "\u20b9516,793",
    "connections": 26,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1161",
        "A1114",
        "A1061",
        "A1161"
      ],
      [
        "A1161",
        "A1114",
        "A1060",
        "A1161"
      ],
      [
        "A1161",
        "A1114",
        "A1164",
        "A1161"
      ]
    ],
    "openDate": "2018-10-19",
    "lastTxn": "2018-12-06",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1091",
        "amt": 98305,
        "ch": "IMPS",
        "time": "20:38",
        "branch": "Delhi",
        "txn_id": "T1204"
      },
      {
        "dir": "in",
        "other": "A1179",
        "amt": 94350,
        "ch": "RTGS",
        "time": "01:59",
        "branch": "Bangalore",
        "txn_id": "T1298"
      },
      {
        "dir": "in",
        "other": "A1051",
        "amt": 93536,
        "ch": "NEFT",
        "time": "21:32",
        "branch": "Bangalore",
        "txn_id": "T732"
      },
      {
        "dir": "out",
        "other": "A1192",
        "amt": 87483,
        "ch": "UPI",
        "time": "10:15",
        "branch": "Bangalore",
        "txn_id": "T442"
      },
      {
        "dir": "out",
        "other": "A1079",
        "amt": 86698,
        "ch": "NEFT",
        "time": "02:38",
        "branch": "Chennai",
        "txn_id": "T129"
      },
      {
        "dir": "out",
        "other": "A1030",
        "amt": 85253,
        "ch": "IMPS",
        "time": "13:10",
        "branch": "Bangalore",
        "txn_id": "T1180"
      },
      {
        "dir": "in",
        "other": "A1083",
        "amt": 84642,
        "ch": "IMPS",
        "time": "12:59",
        "branch": "Mumbai",
        "txn_id": "T591"
      },
      {
        "dir": "in",
        "other": "A1155",
        "amt": 83628,
        "ch": "NEFT",
        "time": "01:52",
        "branch": "Kolkata",
        "txn_id": "T1502"
      }
    ]
  },
  {
    "id": "A1162",
    "name": "A1162",
    "type": "Freelancer",
    "age": 40,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b91,147,995",
    "outflow": "\u20b9560,398",
    "connections": 15,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1162",
        "A1070",
        "A1169",
        "A1162"
      ],
      [
        "A1162",
        "A1061",
        "A1162"
      ],
      [
        "A1162",
        "A1061",
        "A1169",
        "A1162"
      ]
    ],
    "openDate": "2015-12-02",
    "lastTxn": "2018-07-24",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1088",
        "amt": 749293,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2029"
      },
      {
        "dir": "in",
        "other": "A1110",
        "amt": 99519,
        "ch": "ATM",
        "time": "19:36",
        "branch": "Mumbai",
        "txn_id": "T152"
      },
      {
        "dir": "out",
        "other": "A1061",
        "amt": 95442,
        "ch": "IMPS",
        "time": "17:48",
        "branch": "Mumbai",
        "txn_id": "T676"
      },
      {
        "dir": "out",
        "other": "A1014",
        "amt": 89987,
        "ch": "IMPS",
        "time": "00:04",
        "branch": "Mumbai",
        "txn_id": "T1783"
      },
      {
        "dir": "out",
        "other": "A1136",
        "amt": 85255,
        "ch": "UPI",
        "time": "07:50",
        "branch": "Chennai",
        "txn_id": "T1178"
      },
      {
        "dir": "out",
        "other": "A1126",
        "amt": 80362,
        "ch": "NEFT",
        "time": "17:56",
        "branch": "Mumbai",
        "txn_id": "T710"
      },
      {
        "dir": "out",
        "other": "A1033",
        "amt": 73583,
        "ch": "NEFT",
        "time": "07:35",
        "branch": "Mumbai",
        "txn_id": "T652"
      },
      {
        "dir": "in",
        "other": "A1069",
        "amt": 73015,
        "ch": "UPI",
        "time": "17:31",
        "branch": "Delhi",
        "txn_id": "T159"
      }
    ]
  },
  {
    "id": "A1163",
    "name": "A1163",
    "type": "Govt Employee",
    "age": 63,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9542,444",
    "outflow": "\u20b9668,876",
    "connections": 23,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1163",
        "A1111",
        "A1080",
        "A1163"
      ],
      [
        "A1163",
        "A1194",
        "A1050",
        "A1163"
      ],
      [
        "A1163",
        "A1192",
        "A1110",
        "A1163"
      ]
    ],
    "openDate": "2024-04-28",
    "lastTxn": "2025-08-27",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1195",
        "amt": 96099,
        "ch": "RTGS",
        "time": "07:14",
        "branch": "Chennai",
        "txn_id": "T289"
      },
      {
        "dir": "in",
        "other": "A1082",
        "amt": 91682,
        "ch": "UPI",
        "time": "01:28",
        "branch": "Delhi",
        "txn_id": "T583"
      },
      {
        "dir": "in",
        "other": "A1188",
        "amt": 89083,
        "ch": "IMPS",
        "time": "04:55",
        "branch": "Bangalore",
        "txn_id": "T1858"
      },
      {
        "dir": "in",
        "other": "A1057",
        "amt": 88727,
        "ch": "UPI",
        "time": "10:15",
        "branch": "Bangalore",
        "txn_id": "T897"
      },
      {
        "dir": "out",
        "other": "A1103",
        "amt": 84518,
        "ch": "IMPS",
        "time": "01:57",
        "branch": "Kolkata",
        "txn_id": "T816"
      },
      {
        "dir": "in",
        "other": "A1097",
        "amt": 79918,
        "ch": "UPI",
        "time": "12:47",
        "branch": "Delhi",
        "txn_id": "T1291"
      },
      {
        "dir": "in",
        "other": "A1080",
        "amt": 79906,
        "ch": "RTGS",
        "time": "21:19",
        "branch": "Mumbai",
        "txn_id": "T116"
      },
      {
        "dir": "out",
        "other": "A1155",
        "amt": 75658,
        "ch": "IMPS",
        "time": "21:05",
        "branch": "Mumbai",
        "txn_id": "T640"
      }
    ]
  },
  {
    "id": "A1164",
    "name": "A1164",
    "type": "Engineer",
    "age": 49,
    "risk": "fraud",
    "riskScore": 99,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9648,676",
    "outflow": "\u20b9443,979",
    "connections": 17,
    "dormant": true,
    "structuring": 0,
    "circles": [
      [
        "A1164",
        "A1161",
        "A1114",
        "A1164"
      ]
    ],
    "openDate": "2021-10-27",
    "lastTxn": "2022-05-25",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1119",
        "amt": 97898,
        "ch": "UPI",
        "time": "02:23",
        "branch": "Chennai",
        "txn_id": "T890"
      },
      {
        "dir": "in",
        "other": "A1020",
        "amt": 85603,
        "ch": "RTGS",
        "time": "02:30",
        "branch": "Delhi",
        "txn_id": "T279"
      },
      {
        "dir": "in",
        "other": "A1078",
        "amt": 82965,
        "ch": "UPI",
        "time": "21:48",
        "branch": "Bangalore",
        "txn_id": "T1491"
      },
      {
        "dir": "in",
        "other": "A1139",
        "amt": 82769,
        "ch": "UPI",
        "time": "17:47",
        "branch": "Delhi",
        "txn_id": "T241"
      },
      {
        "dir": "out",
        "other": "A1131",
        "amt": 82381,
        "ch": "UPI",
        "time": "18:14",
        "branch": "Kolkata",
        "txn_id": "T666"
      },
      {
        "dir": "out",
        "other": "A1029",
        "amt": 79097,
        "ch": "RTGS",
        "time": "05:04",
        "branch": "Bangalore",
        "txn_id": "T1815"
      },
      {
        "dir": "in",
        "other": "A1159",
        "amt": 75629,
        "ch": "IMPS",
        "time": "05:37",
        "branch": "Kolkata",
        "txn_id": "T243"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 75417,
        "ch": "ATM",
        "time": "14:24",
        "branch": "Mumbai",
        "txn_id": "T422"
      }
    ]
  },
  {
    "id": "A1165",
    "name": "A1165",
    "type": "Business",
    "age": 40,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9684,500",
    "outflow": "\u20b9701,525",
    "connections": 22,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1165",
        "A1134",
        "A1045",
        "A1165"
      ],
      [
        "A1165",
        "A1191",
        "A1049",
        "A1165"
      ],
      [
        "A1165",
        "A1081",
        "A1019",
        "A1165"
      ]
    ],
    "openDate": "2024-07-22",
    "lastTxn": "2024-07-27",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1110",
        "amt": 93049,
        "ch": "RTGS",
        "time": "15:05",
        "branch": "Chennai",
        "txn_id": "T1765"
      },
      {
        "dir": "in",
        "other": "A1102",
        "amt": 93002,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1944"
      },
      {
        "dir": "out",
        "other": "A1045",
        "amt": 93002,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1945"
      },
      {
        "dir": "in",
        "other": "A1111",
        "amt": 86858,
        "ch": "IMPS",
        "time": "23:09",
        "branch": "Kolkata",
        "txn_id": "T1767"
      },
      {
        "dir": "in",
        "other": "A1049",
        "amt": 83200,
        "ch": "UPI",
        "time": "22:40",
        "branch": "Chennai",
        "txn_id": "T1519"
      },
      {
        "dir": "out",
        "other": "A1136",
        "amt": 81470,
        "ch": "IMPS",
        "time": "03:16",
        "branch": "Chennai",
        "txn_id": "T1328"
      },
      {
        "dir": "in",
        "other": "A1185",
        "amt": 72044,
        "ch": "ATM",
        "time": "22:04",
        "branch": "Delhi",
        "txn_id": "T1773"
      },
      {
        "dir": "in",
        "other": "A1141",
        "amt": 70907,
        "ch": "UPI",
        "time": "01:27",
        "branch": "Bangalore",
        "txn_id": "T1154"
      }
    ]
  },
  {
    "id": "A1166",
    "name": "A1166",
    "type": "Doctor",
    "age": 24,
    "risk": "fraud",
    "riskScore": 75,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9618,227",
    "outflow": "\u20b91,292,990",
    "connections": 20,
    "dormant": true,
    "structuring": 0,
    "circles": [
      [
        "A1166",
        "A1064",
        "A1059",
        "A1166"
      ],
      [
        "A1166",
        "A1064",
        "A1095",
        "A1166"
      ],
      [
        "A1166",
        "A1154",
        "A1172",
        "A1166"
      ]
    ],
    "openDate": "2016-11-04",
    "lastTxn": "2018-07-30",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1041",
        "amt": 687486,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2025"
      },
      {
        "dir": "out",
        "other": "A1154",
        "amt": 99367,
        "ch": "NEFT",
        "time": "14:59",
        "branch": "Delhi",
        "txn_id": "T1869"
      },
      {
        "dir": "in",
        "other": "A1160",
        "amt": 96798,
        "ch": "UPI",
        "time": "17:03",
        "branch": "Mumbai",
        "txn_id": "T1267"
      },
      {
        "dir": "out",
        "other": "A1121",
        "amt": 93774,
        "ch": "NEFT",
        "time": "00:39",
        "branch": "Chennai",
        "txn_id": "T1879"
      },
      {
        "dir": "in",
        "other": "A1181",
        "amt": 92543,
        "ch": "UPI",
        "time": "00:17",
        "branch": "Mumbai",
        "txn_id": "T934"
      },
      {
        "dir": "out",
        "other": "A1055",
        "amt": 92510,
        "ch": "RTGS",
        "time": "08:31",
        "branch": "Bangalore",
        "txn_id": "T947"
      },
      {
        "dir": "out",
        "other": "A1138",
        "amt": 90828,
        "ch": "NEFT",
        "time": "11:52",
        "branch": "Kolkata",
        "txn_id": "T871"
      },
      {
        "dir": "in",
        "other": "A1179",
        "amt": 88611,
        "ch": "IMPS",
        "time": "17:15",
        "branch": "Bangalore",
        "txn_id": "T1080"
      }
    ]
  },
  {
    "id": "A1167",
    "name": "A1167",
    "type": "Engineer",
    "age": 36,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9440,040",
    "outflow": "\u20b9329,693",
    "connections": 14,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1167",
        "A1070",
        "A1169",
        "A1167"
      ],
      [
        "A1167",
        "A1036",
        "A1136",
        "A1167"
      ]
    ],
    "openDate": "2015-06-29",
    "lastTxn": "2017-02-20",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1136",
        "amt": 89760,
        "ch": "NEFT",
        "time": "04:03",
        "branch": "Kolkata",
        "txn_id": "T1070"
      },
      {
        "dir": "in",
        "other": "A1055",
        "amt": 88244,
        "ch": "UPI",
        "time": "15:36",
        "branch": "Chennai",
        "txn_id": "T1429"
      },
      {
        "dir": "out",
        "other": "A1144",
        "amt": 84575,
        "ch": "RTGS",
        "time": "17:37",
        "branch": "Kolkata",
        "txn_id": "T1798"
      },
      {
        "dir": "out",
        "other": "A1094",
        "amt": 80302,
        "ch": "NEFT",
        "time": "14:56",
        "branch": "Delhi",
        "txn_id": "T242"
      },
      {
        "dir": "in",
        "other": "A1153",
        "amt": 80211,
        "ch": "IMPS",
        "time": "00:04",
        "branch": "Mumbai",
        "txn_id": "T999"
      },
      {
        "dir": "in",
        "other": "A1021",
        "amt": 78250,
        "ch": "IMPS",
        "time": "08:06",
        "branch": "Mumbai",
        "txn_id": "T861"
      },
      {
        "dir": "out",
        "other": "A1041",
        "amt": 48704,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1984"
      },
      {
        "dir": "out",
        "other": "A1102",
        "amt": 48388,
        "ch": "UPI",
        "time": "19:56",
        "branch": "Kolkata",
        "txn_id": "T1707"
      }
    ]
  },
  {
    "id": "A1168",
    "name": "A1168",
    "type": "Engineer",
    "age": 62,
    "risk": "suspicious",
    "riskScore": 65,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9411,640",
    "outflow": "\u20b9502,332",
    "connections": 18,
    "dormant": true,
    "structuring": 3,
    "circles": [
      [
        "A1168",
        "A1069",
        "A1160",
        "A1168"
      ],
      [
        "A1168",
        "A1169",
        "A1072",
        "A1168"
      ],
      [
        "A1168",
        "A1087",
        "A1063",
        "A1168"
      ]
    ],
    "openDate": "2024-05-13",
    "lastTxn": "2024-10-04",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1069",
        "amt": 122515,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1950"
      },
      {
        "dir": "in",
        "other": "A1160",
        "amt": 122515,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1952"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 75161,
        "ch": "NEFT",
        "time": "08:08",
        "branch": "Bangalore",
        "txn_id": "T1873"
      },
      {
        "dir": "out",
        "other": "A1055",
        "amt": 70934,
        "ch": "IMPS",
        "time": "03:16",
        "branch": "Chennai",
        "txn_id": "T559"
      },
      {
        "dir": "out",
        "other": "A1084",
        "amt": 61145,
        "ch": "RTGS",
        "time": "05:50",
        "branch": "Bangalore",
        "txn_id": "T1515"
      },
      {
        "dir": "in",
        "other": "A1063",
        "amt": 58156,
        "ch": "ATM",
        "time": "15:25",
        "branch": "Bangalore",
        "txn_id": "T1627"
      },
      {
        "dir": "out",
        "other": "A1125",
        "amt": 55976,
        "ch": "NEFT",
        "time": "22:42",
        "branch": "Kolkata",
        "txn_id": "T533"
      },
      {
        "dir": "in",
        "other": "A1064",
        "amt": 54554,
        "ch": "IMPS",
        "time": "14:42",
        "branch": "Kolkata",
        "txn_id": "T1665"
      }
    ]
  },
  {
    "id": "A1169",
    "name": "A1169",
    "type": "Business",
    "age": 44,
    "risk": "suspicious",
    "riskScore": 50,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9356,718",
    "outflow": "\u20b91,414,269",
    "connections": 18,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1169",
        "A1072",
        "A1168",
        "A1169"
      ],
      [
        "A1169",
        "A1108",
        "A1103",
        "A1169"
      ],
      [
        "A1169",
        "A1162",
        "A1070",
        "A1169"
      ]
    ],
    "openDate": "2015-09-01",
    "lastTxn": "2018-02-21",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1129",
        "amt": 893582,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2024"
      },
      {
        "dir": "out",
        "other": "A1116",
        "amt": 80620,
        "ch": "ATM",
        "time": "19:38",
        "branch": "Bangalore",
        "txn_id": "T958"
      },
      {
        "dir": "out",
        "other": "A1084",
        "amt": 78350,
        "ch": "IMPS",
        "time": "12:58",
        "branch": "Mumbai",
        "txn_id": "T689"
      },
      {
        "dir": "in",
        "other": "A1070",
        "amt": 77450,
        "ch": "ATM",
        "time": "16:33",
        "branch": "Kolkata",
        "txn_id": "T341"
      },
      {
        "dir": "out",
        "other": "A1067",
        "amt": 68833,
        "ch": "NEFT",
        "time": "01:42",
        "branch": "Mumbai",
        "txn_id": "T1842"
      },
      {
        "dir": "out",
        "other": "A1051",
        "amt": 67779,
        "ch": "ATM",
        "time": "14:40",
        "branch": "Delhi",
        "txn_id": "T484"
      },
      {
        "dir": "in",
        "other": "A1186",
        "amt": 66218,
        "ch": "ATM",
        "time": "05:15",
        "branch": "Chennai",
        "txn_id": "T814"
      },
      {
        "dir": "in",
        "other": "A1114",
        "amt": 60812,
        "ch": "IMPS",
        "time": "17:39",
        "branch": "Delhi",
        "txn_id": "T1716"
      }
    ]
  },
  {
    "id": "A1170",
    "name": "A1170",
    "type": "Govt Employee",
    "age": 43,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b915L",
    "inflow": "\u20b9285,715",
    "outflow": "\u20b9436,812",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1170",
        "A1038",
        "A1035",
        "A1170"
      ],
      [
        "A1170",
        "A1149",
        "A1035",
        "A1170"
      ],
      [
        "A1170",
        "A1054",
        "A1001",
        "A1170"
      ]
    ],
    "openDate": "2019-09-26",
    "lastTxn": "2020-12-03",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1054",
        "amt": 99725,
        "ch": "NEFT",
        "time": "11:08",
        "branch": "Bangalore",
        "txn_id": "T195"
      },
      {
        "dir": "out",
        "other": "A1135",
        "amt": 93034,
        "ch": "ATM",
        "time": "23:24",
        "branch": "Chennai",
        "txn_id": "T1794"
      },
      {
        "dir": "out",
        "other": "A1016",
        "amt": 92543,
        "ch": "IMPS",
        "time": "10:22",
        "branch": "Mumbai",
        "txn_id": "T882"
      },
      {
        "dir": "in",
        "other": "A1021",
        "amt": 63240,
        "ch": "RTGS",
        "time": "04:56",
        "branch": "Chennai",
        "txn_id": "T1477"
      },
      {
        "dir": "in",
        "other": "A1099",
        "amt": 53610,
        "ch": "ATM",
        "time": "10:43",
        "branch": "Delhi",
        "txn_id": "T1132"
      },
      {
        "dir": "out",
        "other": "A1171",
        "amt": 50460,
        "ch": "RTGS",
        "time": "19:10",
        "branch": "Delhi",
        "txn_id": "T949"
      },
      {
        "dir": "out",
        "other": "A1038",
        "amt": 45952,
        "ch": "IMPS",
        "time": "05:12",
        "branch": "Delhi",
        "txn_id": "T1507"
      },
      {
        "dir": "in",
        "other": "A1196",
        "amt": 44796,
        "ch": "RTGS",
        "time": "04:00",
        "branch": "Bangalore",
        "txn_id": "T1137"
      }
    ]
  },
  {
    "id": "A1171",
    "name": "A1171",
    "type": "Govt Employee",
    "age": 50,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9525,881",
    "outflow": "\u20b9679,294",
    "connections": 22,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1171",
        "A1089",
        "A1015",
        "A1171"
      ],
      [
        "A1171",
        "A1060",
        "A1015",
        "A1171"
      ],
      [
        "A1171",
        "A1108",
        "A1021",
        "A1171"
      ]
    ],
    "openDate": "2019-10-19",
    "lastTxn": "2020-06-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1059",
        "amt": 94492,
        "ch": "RTGS",
        "time": "01:02",
        "branch": "Bangalore",
        "txn_id": "T337"
      },
      {
        "dir": "out",
        "other": "A1060",
        "amt": 94035,
        "ch": "ATM",
        "time": "04:10",
        "branch": "Kolkata",
        "txn_id": "T1016"
      },
      {
        "dir": "out",
        "other": "A1033",
        "amt": 90148,
        "ch": "ATM",
        "time": "07:32",
        "branch": "Bangalore",
        "txn_id": "T1463"
      },
      {
        "dir": "out",
        "other": "A1057",
        "amt": 87914,
        "ch": "RTGS",
        "time": "05:22",
        "branch": "Chennai",
        "txn_id": "T771"
      },
      {
        "dir": "out",
        "other": "A1005",
        "amt": 85239,
        "ch": "RTGS",
        "time": "08:12",
        "branch": "Chennai",
        "txn_id": "T1757"
      },
      {
        "dir": "in",
        "other": "A1133",
        "amt": 80551,
        "ch": "UPI",
        "time": "16:04",
        "branch": "Chennai",
        "txn_id": "T244"
      },
      {
        "dir": "out",
        "other": "A1179",
        "amt": 75602,
        "ch": "NEFT",
        "time": "05:32",
        "branch": "Bangalore",
        "txn_id": "T310"
      },
      {
        "dir": "out",
        "other": "A1089",
        "amt": 67954,
        "ch": "UPI",
        "time": "07:41",
        "branch": "Kolkata",
        "txn_id": "T369"
      }
    ]
  },
  {
    "id": "A1172",
    "name": "A1172",
    "type": "Doctor",
    "age": 60,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9228,041",
    "outflow": "\u20b9178,486",
    "connections": 12,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1172",
        "A1112",
        "A1055",
        "A1172"
      ],
      [
        "A1172",
        "A1096",
        "A1154",
        "A1172"
      ],
      [
        "A1172",
        "A1086",
        "A1013",
        "A1172"
      ]
    ],
    "openDate": "2018-01-28",
    "lastTxn": "2019-12-15",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1112",
        "amt": 69445,
        "ch": "UPI",
        "time": "22:01",
        "branch": "Chennai",
        "txn_id": "T789"
      },
      {
        "dir": "in",
        "other": "A1013",
        "amt": 65119,
        "ch": "RTGS",
        "time": "08:47",
        "branch": "Bangalore",
        "txn_id": "T1263"
      },
      {
        "dir": "in",
        "other": "A1193",
        "amt": 64173,
        "ch": "IMPS",
        "time": "01:21",
        "branch": "Chennai",
        "txn_id": "T966"
      },
      {
        "dir": "out",
        "other": "A1166",
        "amt": 51736,
        "ch": "NEFT",
        "time": "20:58",
        "branch": "Delhi",
        "txn_id": "T1356"
      },
      {
        "dir": "in",
        "other": "A1055",
        "amt": 41268,
        "ch": "NEFT",
        "time": "15:01",
        "branch": "Bangalore",
        "txn_id": "T1243"
      },
      {
        "dir": "out",
        "other": "A1107",
        "amt": 34177,
        "ch": "RTGS",
        "time": "19:26",
        "branch": "Kolkata",
        "txn_id": "T1023"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 27976,
        "ch": "NEFT",
        "time": "21:27",
        "branch": "Delhi",
        "txn_id": "T1236"
      },
      {
        "dir": "in",
        "other": "A1154",
        "amt": 19493,
        "ch": "RTGS",
        "time": "22:14",
        "branch": "Bangalore",
        "txn_id": "T987"
      }
    ]
  },
  {
    "id": "A1173",
    "name": "A1173",
    "type": "Engineer",
    "age": 20,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9515,880",
    "outflow": "\u20b9364,450",
    "connections": 19,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1173",
        "A1048",
        "A1003",
        "A1173"
      ],
      [
        "A1173",
        "A1033",
        "A1003",
        "A1173"
      ],
      [
        "A1173",
        "A1033",
        "A1094",
        "A1173"
      ]
    ],
    "openDate": "2021-02-09",
    "lastTxn": "2022-05-21",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1001",
        "amt": 86919,
        "ch": "UPI",
        "time": "04:56",
        "branch": "Delhi",
        "txn_id": "T104"
      },
      {
        "dir": "in",
        "other": "A1113",
        "amt": 86247,
        "ch": "NEFT",
        "time": "06:23",
        "branch": "Bangalore",
        "txn_id": "T605"
      },
      {
        "dir": "out",
        "other": "A1048",
        "amt": 65472,
        "ch": "RTGS",
        "time": "09:10",
        "branch": "Mumbai",
        "txn_id": "T1881"
      },
      {
        "dir": "out",
        "other": "A1039",
        "amt": 61374,
        "ch": "UPI",
        "time": "14:31",
        "branch": "Bangalore",
        "txn_id": "T348"
      },
      {
        "dir": "out",
        "other": "A1182",
        "amt": 56764,
        "ch": "UPI",
        "time": "19:17",
        "branch": "Bangalore",
        "txn_id": "T297"
      },
      {
        "dir": "in",
        "other": "A1094",
        "amt": 54817,
        "ch": "RTGS",
        "time": "01:10",
        "branch": "Chennai",
        "txn_id": "T1126"
      },
      {
        "dir": "out",
        "other": "A1134",
        "amt": 53316,
        "ch": "RTGS",
        "time": "10:40",
        "branch": "Delhi",
        "txn_id": "T1388"
      },
      {
        "dir": "out",
        "other": "A1033",
        "amt": 51918,
        "ch": "RTGS",
        "time": "23:28",
        "branch": "Kolkata",
        "txn_id": "T1432"
      }
    ]
  },
  {
    "id": "A1174",
    "name": "A1174",
    "type": "Govt Employee",
    "age": 51,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9663,959",
    "outflow": "\u20b9365,794",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1174",
        "A1047",
        "A1045",
        "A1174"
      ]
    ],
    "openDate": "2016-05-11",
    "lastTxn": "2016-12-22",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1066",
        "amt": 210359,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1938"
      },
      {
        "dir": "out",
        "other": "A1150",
        "amt": 209581,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1939"
      },
      {
        "dir": "in",
        "other": "A1103",
        "amt": 93125,
        "ch": "ATM",
        "time": "11:44",
        "branch": "Mumbai",
        "txn_id": "T1434"
      },
      {
        "dir": "in",
        "other": "A1138",
        "amt": 89301,
        "ch": "RTGS",
        "time": "10:42",
        "branch": "Delhi",
        "txn_id": "T407"
      },
      {
        "dir": "out",
        "other": "A1047",
        "amt": 86628,
        "ch": "RTGS",
        "time": "03:30",
        "branch": "Chennai",
        "txn_id": "T1375"
      },
      {
        "dir": "in",
        "other": "A1103",
        "amt": 58786,
        "ch": "NEFT",
        "time": "21:35",
        "branch": "Mumbai",
        "txn_id": "T332"
      },
      {
        "dir": "in",
        "other": "A1056",
        "amt": 49124,
        "ch": "IMPS",
        "time": "21:35",
        "branch": "Chennai",
        "txn_id": "T375"
      },
      {
        "dir": "in",
        "other": "A1004",
        "amt": 48167,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T2020"
      }
    ]
  },
  {
    "id": "A1175",
    "name": "A1175",
    "type": "Doctor",
    "age": 23,
    "risk": "clean",
    "riskScore": 40,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9535,979",
    "outflow": "\u20b9525,108",
    "connections": 14,
    "dormant": false,
    "structuring": 0,
    "circles": [],
    "openDate": "2022-07-25",
    "lastTxn": "2023-01-19",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1013",
        "amt": 361821,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1924"
      },
      {
        "dir": "out",
        "other": "A1120",
        "amt": 95095,
        "ch": "UPI",
        "time": "03:46",
        "branch": "Chennai",
        "txn_id": "T109"
      },
      {
        "dir": "out",
        "other": "A1120",
        "amt": 91989,
        "ch": "RTGS",
        "time": "12:04",
        "branch": "Bangalore",
        "txn_id": "T123"
      },
      {
        "dir": "out",
        "other": "A1180",
        "amt": 84964,
        "ch": "RTGS",
        "time": "21:47",
        "branch": "Delhi",
        "txn_id": "T968"
      },
      {
        "dir": "in",
        "other": "A1177",
        "amt": 81508,
        "ch": "ATM",
        "time": "07:12",
        "branch": "Kolkata",
        "txn_id": "T475"
      },
      {
        "dir": "out",
        "other": "A1062",
        "amt": 74973,
        "ch": "NEFT",
        "time": "05:38",
        "branch": "Bangalore",
        "txn_id": "T886"
      },
      {
        "dir": "out",
        "other": "A1182",
        "amt": 61089,
        "ch": "UPI",
        "time": "15:49",
        "branch": "Delhi",
        "txn_id": "T1350"
      },
      {
        "dir": "out",
        "other": "A1005",
        "amt": 59285,
        "ch": "IMPS",
        "time": "04:00",
        "branch": "Kolkata",
        "txn_id": "T1254"
      }
    ]
  },
  {
    "id": "A1176",
    "name": "A1176",
    "type": "Freelancer",
    "age": 63,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9715,938",
    "outflow": "\u20b9640,405",
    "connections": 15,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1176",
        "A1069",
        "A1132",
        "A1176"
      ],
      [
        "A1176",
        "A1008",
        "A1094",
        "A1176"
      ],
      [
        "A1176",
        "A1197",
        "A1176"
      ]
    ],
    "openDate": "2016-04-29",
    "lastTxn": "2016-11-27",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1041",
        "amt": 278529,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1932"
      },
      {
        "dir": "in",
        "other": "A1183",
        "amt": 278333,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1931"
      },
      {
        "dir": "in",
        "other": "A1197",
        "amt": 95869,
        "ch": "IMPS",
        "time": "20:04",
        "branch": "Bangalore",
        "txn_id": "T161"
      },
      {
        "dir": "out",
        "other": "A1197",
        "amt": 88458,
        "ch": "NEFT",
        "time": "23:37",
        "branch": "Kolkata",
        "txn_id": "T1656"
      },
      {
        "dir": "in",
        "other": "A1045",
        "amt": 88207,
        "ch": "ATM",
        "time": "03:27",
        "branch": "Chennai",
        "txn_id": "T722"
      },
      {
        "dir": "out",
        "other": "A1154",
        "amt": 83837,
        "ch": "RTGS",
        "time": "11:14",
        "branch": "Kolkata",
        "txn_id": "T1460"
      },
      {
        "dir": "in",
        "other": "A1055",
        "amt": 80792,
        "ch": "IMPS",
        "time": "17:12",
        "branch": "Delhi",
        "txn_id": "T133"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 69838,
        "ch": "RTGS",
        "time": "07:14",
        "branch": "Kolkata",
        "txn_id": "T1710"
      }
    ]
  },
  {
    "id": "A1177",
    "name": "A1177",
    "type": "Business",
    "age": 31,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b910L",
    "inflow": "\u20b9479,093",
    "outflow": "\u20b9619,679",
    "connections": 17,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1177",
        "A1067",
        "A1145",
        "A1177"
      ]
    ],
    "openDate": "2020-07-21",
    "lastTxn": "2021-03-03",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1059",
        "amt": 98754,
        "ch": "RTGS",
        "time": "07:18",
        "branch": "Bangalore",
        "txn_id": "T292"
      },
      {
        "dir": "out",
        "other": "A1149",
        "amt": 94222,
        "ch": "ATM",
        "time": "08:49",
        "branch": "Bangalore",
        "txn_id": "T1086"
      },
      {
        "dir": "in",
        "other": "A1015",
        "amt": 90473,
        "ch": "RTGS",
        "time": "05:13",
        "branch": "Bangalore",
        "txn_id": "T1756"
      },
      {
        "dir": "in",
        "other": "A1040",
        "amt": 88478,
        "ch": "ATM",
        "time": "09:15",
        "branch": "Mumbai",
        "txn_id": "T222"
      },
      {
        "dir": "out",
        "other": "A1102",
        "amt": 85934,
        "ch": "ATM",
        "time": "19:55",
        "branch": "Bangalore",
        "txn_id": "T697"
      },
      {
        "dir": "out",
        "other": "A1175",
        "amt": 81508,
        "ch": "ATM",
        "time": "07:12",
        "branch": "Kolkata",
        "txn_id": "T475"
      },
      {
        "dir": "out",
        "other": "A1078",
        "amt": 81199,
        "ch": "UPI",
        "time": "06:02",
        "branch": "Chennai",
        "txn_id": "T1131"
      },
      {
        "dir": "out",
        "other": "A1018",
        "amt": 79104,
        "ch": "ATM",
        "time": "04:00",
        "branch": "Mumbai",
        "txn_id": "T1734"
      }
    ]
  },
  {
    "id": "A1178",
    "name": "A1178",
    "type": "Doctor",
    "age": 24,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9219,932",
    "outflow": "\u20b9739,680",
    "connections": 17,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1178",
        "A1074",
        "A1021",
        "A1178"
      ],
      [
        "A1178",
        "A1187",
        "A1004",
        "A1178"
      ],
      [
        "A1178",
        "A1192",
        "A1021",
        "A1178"
      ]
    ],
    "openDate": "2023-01-13",
    "lastTxn": "2023-12-12",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1077",
        "amt": 91223,
        "ch": "IMPS",
        "time": "13:11",
        "branch": "Mumbai",
        "txn_id": "T1626"
      },
      {
        "dir": "out",
        "other": "A1145",
        "amt": 89644,
        "ch": "RTGS",
        "time": "08:09",
        "branch": "Kolkata",
        "txn_id": "T1578"
      },
      {
        "dir": "in",
        "other": "A1004",
        "amt": 89313,
        "ch": "ATM",
        "time": "10:05",
        "branch": "Kolkata",
        "txn_id": "T362"
      },
      {
        "dir": "out",
        "other": "A1126",
        "amt": 81528,
        "ch": "UPI",
        "time": "13:48",
        "branch": "Chennai",
        "txn_id": "T474"
      },
      {
        "dir": "out",
        "other": "A1057",
        "amt": 79691,
        "ch": "NEFT",
        "time": "01:07",
        "branch": "Chennai",
        "txn_id": "T1115"
      },
      {
        "dir": "out",
        "other": "A1074",
        "amt": 67317,
        "ch": "RTGS",
        "time": "11:21",
        "branch": "Delhi",
        "txn_id": "T1825"
      },
      {
        "dir": "out",
        "other": "A1147",
        "amt": 65835,
        "ch": "NEFT",
        "time": "00:13",
        "branch": "Delhi",
        "txn_id": "T770"
      },
      {
        "dir": "out",
        "other": "A1187",
        "amt": 64026,
        "ch": "ATM",
        "time": "17:11",
        "branch": "Chennai",
        "txn_id": "T465"
      }
    ]
  },
  {
    "id": "A1179",
    "name": "A1179",
    "type": "Engineer",
    "age": 48,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9365,946",
    "outflow": "\u20b9476,791",
    "connections": 15,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1179",
        "A1020",
        "A1171",
        "A1179"
      ]
    ],
    "openDate": "2017-01-09",
    "lastTxn": "2018-07-06",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1161",
        "amt": 94350,
        "ch": "RTGS",
        "time": "01:59",
        "branch": "Bangalore",
        "txn_id": "T1298"
      },
      {
        "dir": "out",
        "other": "A1004",
        "amt": 90724,
        "ch": "ATM",
        "time": "11:57",
        "branch": "Chennai",
        "txn_id": "T146"
      },
      {
        "dir": "out",
        "other": "A1166",
        "amt": 88611,
        "ch": "IMPS",
        "time": "17:15",
        "branch": "Bangalore",
        "txn_id": "T1080"
      },
      {
        "dir": "in",
        "other": "A1171",
        "amt": 75602,
        "ch": "NEFT",
        "time": "05:32",
        "branch": "Bangalore",
        "txn_id": "T310"
      },
      {
        "dir": "in",
        "other": "A1048",
        "amt": 74439,
        "ch": "UPI",
        "time": "11:09",
        "branch": "Mumbai",
        "txn_id": "T1538"
      },
      {
        "dir": "in",
        "other": "A1150",
        "amt": 59930,
        "ch": "RTGS",
        "time": "01:44",
        "branch": "Chennai",
        "txn_id": "T1255"
      },
      {
        "dir": "out",
        "other": "A1184",
        "amt": 53734,
        "ch": "ATM",
        "time": "06:12",
        "branch": "Chennai",
        "txn_id": "T1319"
      },
      {
        "dir": "out",
        "other": "A1054",
        "amt": 52050,
        "ch": "NEFT",
        "time": "03:46",
        "branch": "Delhi",
        "txn_id": "T1861"
      }
    ]
  },
  {
    "id": "A1180",
    "name": "A1180",
    "type": "Freelancer",
    "age": 31,
    "risk": "fraud",
    "riskScore": 80,
    "riskLevel": "Medium",
    "income": "\u20b92L",
    "inflow": "\u20b9648,335",
    "outflow": "\u20b9530,698",
    "connections": 21,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1180",
        "A1047",
        "A1133",
        "A1180"
      ],
      [
        "A1180",
        "A1153",
        "A1130",
        "A1180"
      ],
      [
        "A1180",
        "A1153",
        "A1018",
        "A1180"
      ]
    ],
    "openDate": "2017-12-06",
    "lastTxn": "2019-10-12",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1154",
        "amt": 93898,
        "ch": "ATM",
        "time": "12:40",
        "branch": "Bangalore",
        "txn_id": "T517"
      },
      {
        "dir": "in",
        "other": "A1133",
        "amt": 92751,
        "ch": "NEFT",
        "time": "06:42",
        "branch": "Delhi",
        "txn_id": "T844"
      },
      {
        "dir": "in",
        "other": "A1175",
        "amt": 84964,
        "ch": "RTGS",
        "time": "21:47",
        "branch": "Delhi",
        "txn_id": "T968"
      },
      {
        "dir": "in",
        "other": "A1018",
        "amt": 83633,
        "ch": "RTGS",
        "time": "11:44",
        "branch": "Mumbai",
        "txn_id": "T1007"
      },
      {
        "dir": "in",
        "other": "A1095",
        "amt": 82828,
        "ch": "UPI",
        "time": "01:04",
        "branch": "Delhi",
        "txn_id": "T1447"
      },
      {
        "dir": "out",
        "other": "A1161",
        "amt": 82333,
        "ch": "IMPS",
        "time": "16:16",
        "branch": "Chennai",
        "txn_id": "T1851"
      },
      {
        "dir": "out",
        "other": "A1147",
        "amt": 78690,
        "ch": "UPI",
        "time": "11:42",
        "branch": "Kolkata",
        "txn_id": "T258"
      },
      {
        "dir": "out",
        "other": "A1065",
        "amt": 74003,
        "ch": "UPI",
        "time": "07:49",
        "branch": "Bangalore",
        "txn_id": "T601"
      }
    ]
  },
  {
    "id": "A1181",
    "name": "A1181",
    "type": "Student",
    "age": 22,
    "risk": "suspicious",
    "riskScore": 63,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9951,138",
    "outflow": "\u20b9302,090",
    "connections": 18,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1181",
        "A1091",
        "A1084",
        "A1181"
      ],
      [
        "A1181",
        "A1137",
        "A1052",
        "A1181"
      ],
      [
        "A1181",
        "A1166",
        "A1055",
        "A1181"
      ]
    ],
    "openDate": "2019-03-11",
    "lastTxn": "2020-06-27",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1100",
        "amt": 285091,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Delhi",
        "txn_id": "T1936"
      },
      {
        "dir": "in",
        "other": "A1144",
        "amt": 247557,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1908"
      },
      {
        "dir": "in",
        "other": "A1046",
        "amt": 96685,
        "ch": "UPI",
        "time": "00:56",
        "branch": "Delhi",
        "txn_id": "T1585"
      },
      {
        "dir": "in",
        "other": "A1084",
        "amt": 95080,
        "ch": "IMPS",
        "time": "00:09",
        "branch": "Kolkata",
        "txn_id": "T1894"
      },
      {
        "dir": "in",
        "other": "A1045",
        "amt": 93555,
        "ch": "NEFT",
        "time": "13:35",
        "branch": "Chennai",
        "txn_id": "T1565"
      },
      {
        "dir": "out",
        "other": "A1166",
        "amt": 92543,
        "ch": "UPI",
        "time": "00:17",
        "branch": "Mumbai",
        "txn_id": "T934"
      },
      {
        "dir": "out",
        "other": "A1182",
        "amt": 86651,
        "ch": "IMPS",
        "time": "16:31",
        "branch": "Chennai",
        "txn_id": "T1520"
      },
      {
        "dir": "in",
        "other": "A1047",
        "amt": 42731,
        "ch": "IMPS",
        "time": "12:27",
        "branch": "Mumbai",
        "txn_id": "T107"
      }
    ]
  },
  {
    "id": "A1182",
    "name": "A1182",
    "type": "Teacher",
    "age": 41,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9482,748",
    "outflow": "\u20b9168,411",
    "connections": 12,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1182",
        "A1104",
        "A1099",
        "A1182"
      ]
    ],
    "openDate": "2016-08-13",
    "lastTxn": "2017-07-20",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1081",
        "amt": 91873,
        "ch": "ATM",
        "time": "00:17",
        "branch": "Kolkata",
        "txn_id": "T1110"
      },
      {
        "dir": "out",
        "other": "A1104",
        "amt": 89671,
        "ch": "IMPS",
        "time": "08:48",
        "branch": "Delhi",
        "txn_id": "T566"
      },
      {
        "dir": "in",
        "other": "A1181",
        "amt": 86651,
        "ch": "IMPS",
        "time": "16:31",
        "branch": "Chennai",
        "txn_id": "T1520"
      },
      {
        "dir": "in",
        "other": "A1127",
        "amt": 68470,
        "ch": "IMPS",
        "time": "07:42",
        "branch": "Chennai",
        "txn_id": "T828"
      },
      {
        "dir": "in",
        "other": "A1175",
        "amt": 61089,
        "ch": "UPI",
        "time": "15:49",
        "branch": "Delhi",
        "txn_id": "T1350"
      },
      {
        "dir": "out",
        "other": "A1030",
        "amt": 57539,
        "ch": "ATM",
        "time": "20:20",
        "branch": "Mumbai",
        "txn_id": "T573"
      },
      {
        "dir": "in",
        "other": "A1173",
        "amt": 56764,
        "ch": "UPI",
        "time": "19:17",
        "branch": "Bangalore",
        "txn_id": "T297"
      },
      {
        "dir": "in",
        "other": "A1135",
        "amt": 54165,
        "ch": "IMPS",
        "time": "22:02",
        "branch": "Bangalore",
        "txn_id": "T476"
      }
    ]
  },
  {
    "id": "A1183",
    "name": "A1183",
    "type": "Engineer",
    "age": 50,
    "risk": "suspicious",
    "riskScore": 50,
    "riskLevel": "Low",
    "income": "\u20b920L",
    "inflow": "\u20b9620,747",
    "outflow": "\u20b91,174,574",
    "connections": 13,
    "dormant": true,
    "structuring": 0,
    "circles": [
      [
        "A1183",
        "A1083",
        "A1183"
      ],
      [
        "A1183",
        "A1021",
        "A1005",
        "A1183"
      ],
      [
        "A1183",
        "A1157",
        "A1138",
        "A1183"
      ]
    ],
    "openDate": "2017-09-06",
    "lastTxn": "2017-09-23",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1084",
        "amt": 786617,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2023"
      },
      {
        "dir": "out",
        "other": "A1176",
        "amt": 278333,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Kolkata",
        "txn_id": "T1931"
      },
      {
        "dir": "in",
        "other": "A1138",
        "amt": 278184,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1930"
      },
      {
        "dir": "in",
        "other": "A1134",
        "amt": 79519,
        "ch": "ATM",
        "time": "04:37",
        "branch": "Delhi",
        "txn_id": "T1289"
      },
      {
        "dir": "in",
        "other": "A1077",
        "amt": 77487,
        "ch": "ATM",
        "time": "11:13",
        "branch": "Chennai",
        "txn_id": "T463"
      },
      {
        "dir": "out",
        "other": "A1083",
        "amt": 74807,
        "ch": "UPI",
        "time": "13:14",
        "branch": "Mumbai",
        "txn_id": "T974"
      },
      {
        "dir": "in",
        "other": "A1005",
        "amt": 53644,
        "ch": "RTGS",
        "time": "11:37",
        "branch": "Chennai",
        "txn_id": "T246"
      },
      {
        "dir": "in",
        "other": "A1057",
        "amt": 49651,
        "ch": "IMPS",
        "time": "22:44",
        "branch": "Bangalore",
        "txn_id": "T1376"
      }
    ]
  },
  {
    "id": "A1184",
    "name": "A1184",
    "type": "Engineer",
    "age": 45,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9512,733",
    "outflow": "\u20b9291,164",
    "connections": 17,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1184",
        "A1134",
        "A1159",
        "A1184"
      ],
      [
        "A1184",
        "A1134",
        "A1045",
        "A1184"
      ],
      [
        "A1184",
        "A1066",
        "A1062",
        "A1184"
      ]
    ],
    "openDate": "2016-08-13",
    "lastTxn": "2016-09-15",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1055",
        "amt": 99348,
        "ch": "RTGS",
        "time": "20:36",
        "branch": "Delhi",
        "txn_id": "T940"
      },
      {
        "dir": "in",
        "other": "A1148",
        "amt": 69490,
        "ch": "IMPS",
        "time": "01:11",
        "branch": "Mumbai",
        "txn_id": "T561"
      },
      {
        "dir": "out",
        "other": "A1073",
        "amt": 68753,
        "ch": "RTGS",
        "time": "17:24",
        "branch": "Mumbai",
        "txn_id": "T1653"
      },
      {
        "dir": "out",
        "other": "A1042",
        "amt": 67494,
        "ch": "RTGS",
        "time": "18:31",
        "branch": "Mumbai",
        "txn_id": "T1035"
      },
      {
        "dir": "out",
        "other": "A1066",
        "amt": 65574,
        "ch": "ATM",
        "time": "21:08",
        "branch": "Bangalore",
        "txn_id": "T866"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 53940,
        "ch": "IMPS",
        "time": "09:29",
        "branch": "Kolkata",
        "txn_id": "T273"
      },
      {
        "dir": "in",
        "other": "A1179",
        "amt": 53734,
        "ch": "ATM",
        "time": "06:12",
        "branch": "Chennai",
        "txn_id": "T1319"
      },
      {
        "dir": "in",
        "other": "A1003",
        "amt": 51538,
        "ch": "UPI",
        "time": "06:37",
        "branch": "Mumbai",
        "txn_id": "T994"
      }
    ]
  },
  {
    "id": "A1185",
    "name": "A1185",
    "type": "Freelancer",
    "age": 62,
    "risk": "clean",
    "riskScore": 38,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9669,804",
    "outflow": "\u20b9282,040",
    "connections": 18,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1185",
        "A1133",
        "A1180",
        "A1185"
      ]
    ],
    "openDate": "2015-08-01",
    "lastTxn": "2018-03-22",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1082",
        "amt": 222134,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Chennai",
        "txn_id": "T1920"
      },
      {
        "dir": "in",
        "other": "A1108",
        "amt": 94200,
        "ch": "IMPS",
        "time": "07:35",
        "branch": "Mumbai",
        "txn_id": "T211"
      },
      {
        "dir": "in",
        "other": "A1117",
        "amt": 86771,
        "ch": "UPI",
        "time": "16:34",
        "branch": "Bangalore",
        "txn_id": "T1093"
      },
      {
        "dir": "in",
        "other": "A1021",
        "amt": 74570,
        "ch": "NEFT",
        "time": "08:59",
        "branch": "Mumbai",
        "txn_id": "T1458"
      },
      {
        "dir": "out",
        "other": "A1165",
        "amt": 72044,
        "ch": "ATM",
        "time": "22:04",
        "branch": "Delhi",
        "txn_id": "T1773"
      },
      {
        "dir": "in",
        "other": "A1180",
        "amt": 62211,
        "ch": "IMPS",
        "time": "15:34",
        "branch": "Delhi",
        "txn_id": "T1421"
      },
      {
        "dir": "in",
        "other": "A1097",
        "amt": 61658,
        "ch": "UPI",
        "time": "12:16",
        "branch": "Mumbai",
        "txn_id": "T1890"
      },
      {
        "dir": "in",
        "other": "A1149",
        "amt": 58910,
        "ch": "UPI",
        "time": "18:55",
        "branch": "Bangalore",
        "txn_id": "T353"
      }
    ]
  },
  {
    "id": "A1186",
    "name": "A1186",
    "type": "Freelancer",
    "age": 19,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b915L",
    "inflow": "\u20b9485,136",
    "outflow": "\u20b9549,476",
    "connections": 19,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1186",
        "A1020",
        "A1138",
        "A1186"
      ],
      [
        "A1186",
        "A1020",
        "A1140",
        "A1186"
      ],
      [
        "A1186",
        "A1053",
        "A1141",
        "A1186"
      ]
    ],
    "openDate": "2024-03-17",
    "lastTxn": "2026-03-07",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1100",
        "amt": 145490,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1957"
      },
      {
        "dir": "out",
        "other": "A1053",
        "amt": 145490,
        "ch": "IMPS",
        "time": "11:10",
        "branch": "Mumbai",
        "txn_id": "T1958"
      },
      {
        "dir": "in",
        "other": "A1141",
        "amt": 90717,
        "ch": "UPI",
        "time": "18:52",
        "branch": "Chennai",
        "txn_id": "T1372"
      },
      {
        "dir": "out",
        "other": "A1139",
        "amt": 83861,
        "ch": "ATM",
        "time": "09:36",
        "branch": "Bangalore",
        "txn_id": "T293"
      },
      {
        "dir": "out",
        "other": "A1061",
        "amt": 74764,
        "ch": "NEFT",
        "time": "06:55",
        "branch": "Bangalore",
        "txn_id": "T643"
      },
      {
        "dir": "out",
        "other": "A1169",
        "amt": 66218,
        "ch": "ATM",
        "time": "05:15",
        "branch": "Chennai",
        "txn_id": "T814"
      },
      {
        "dir": "in",
        "other": "A1138",
        "amt": 56195,
        "ch": "IMPS",
        "time": "11:27",
        "branch": "Mumbai",
        "txn_id": "T1591"
      },
      {
        "dir": "in",
        "other": "A1156",
        "amt": 52857,
        "ch": "IMPS",
        "time": "11:26",
        "branch": "Chennai",
        "txn_id": "T1067"
      }
    ]
  },
  {
    "id": "A1187",
    "name": "A1187",
    "type": "Govt Employee",
    "age": 63,
    "risk": "suspicious",
    "riskScore": 45,
    "riskLevel": "Low",
    "income": "\u20b92L",
    "inflow": "\u20b9423,766",
    "outflow": "\u20b9435,492",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1187",
        "A1004",
        "A1178",
        "A1187"
      ],
      [
        "A1187",
        "A1022",
        "A1159",
        "A1187"
      ],
      [
        "A1187",
        "A1146",
        "A1024",
        "A1187"
      ]
    ],
    "openDate": "2021-11-24",
    "lastTxn": "2023-12-27",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1024",
        "amt": 98461,
        "ch": "ATM",
        "time": "13:25",
        "branch": "Mumbai",
        "txn_id": "T598"
      },
      {
        "dir": "out",
        "other": "A1078",
        "amt": 95476,
        "ch": "IMPS",
        "time": "06:11",
        "branch": "Chennai",
        "txn_id": "T896"
      },
      {
        "dir": "in",
        "other": "A1088",
        "amt": 87566,
        "ch": "NEFT",
        "time": "03:02",
        "branch": "Chennai",
        "txn_id": "T1163"
      },
      {
        "dir": "in",
        "other": "A1057",
        "amt": 74560,
        "ch": "ATM",
        "time": "07:17",
        "branch": "Bangalore",
        "txn_id": "T198"
      },
      {
        "dir": "out",
        "other": "A1040",
        "amt": 66225,
        "ch": "RTGS",
        "time": "02:03",
        "branch": "Chennai",
        "txn_id": "T1589"
      },
      {
        "dir": "in",
        "other": "A1178",
        "amt": 64026,
        "ch": "ATM",
        "time": "17:11",
        "branch": "Chennai",
        "txn_id": "T465"
      },
      {
        "dir": "in",
        "other": "A1154",
        "amt": 53257,
        "ch": "ATM",
        "time": "16:55",
        "branch": "Mumbai",
        "txn_id": "T1701"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 52790,
        "ch": "RTGS",
        "time": "01:31",
        "branch": "Chennai",
        "txn_id": "T1358"
      }
    ]
  },
  {
    "id": "A1188",
    "name": "A1188",
    "type": "Doctor",
    "age": 57,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b920L",
    "inflow": "\u20b9501,353",
    "outflow": "\u20b9556,777",
    "connections": 16,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1188",
        "A1072",
        "A1066",
        "A1188"
      ],
      [
        "A1188",
        "A1197",
        "A1104",
        "A1188"
      ],
      [
        "A1188",
        "A1140",
        "A1041",
        "A1188"
      ]
    ],
    "openDate": "2019-11-30",
    "lastTxn": "2020-12-17",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1083",
        "amt": 99069,
        "ch": "UPI",
        "time": "08:49",
        "branch": "Bangalore",
        "txn_id": "T757"
      },
      {
        "dir": "in",
        "other": "A1041",
        "amt": 98746,
        "ch": "IMPS",
        "time": "00:39",
        "branch": "Bangalore",
        "txn_id": "T1748"
      },
      {
        "dir": "out",
        "other": "A1140",
        "amt": 95207,
        "ch": "NEFT",
        "time": "20:39",
        "branch": "Mumbai",
        "txn_id": "T1378"
      },
      {
        "dir": "out",
        "other": "A1072",
        "amt": 94610,
        "ch": "NEFT",
        "time": "12:57",
        "branch": "Bangalore",
        "txn_id": "T746"
      },
      {
        "dir": "out",
        "other": "A1195",
        "amt": 92502,
        "ch": "RTGS",
        "time": "13:43",
        "branch": "Delhi",
        "txn_id": "T809"
      },
      {
        "dir": "out",
        "other": "A1163",
        "amt": 89083,
        "ch": "IMPS",
        "time": "04:55",
        "branch": "Bangalore",
        "txn_id": "T1858"
      },
      {
        "dir": "in",
        "other": "A1104",
        "amt": 82292,
        "ch": "RTGS",
        "time": "10:07",
        "branch": "Chennai",
        "txn_id": "T1835"
      },
      {
        "dir": "in",
        "other": "A1037",
        "amt": 81699,
        "ch": "ATM",
        "time": "04:13",
        "branch": "Chennai",
        "txn_id": "T368"
      }
    ]
  },
  {
    "id": "A1189",
    "name": "A1189",
    "type": "Student",
    "age": 29,
    "risk": "suspicious",
    "riskScore": 46,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9389,503",
    "outflow": "\u20b9640,817",
    "connections": 25,
    "dormant": false,
    "structuring": 2,
    "circles": [
      [
        "A1189",
        "A1015",
        "A1072",
        "A1189"
      ],
      [
        "A1189",
        "A1015",
        "A1108",
        "A1189"
      ],
      [
        "A1189",
        "A1134",
        "A1147",
        "A1189"
      ]
    ],
    "openDate": "2020-06-02",
    "lastTxn": "2022-08-04",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1124",
        "amt": 99287,
        "ch": "IMPS",
        "time": "22:57",
        "branch": "Bangalore",
        "txn_id": "T826"
      },
      {
        "dir": "out",
        "other": "A1100",
        "amt": 89800,
        "ch": "UPI",
        "time": "06:43",
        "branch": "Bangalore",
        "txn_id": "T1669"
      },
      {
        "dir": "in",
        "other": "A1132",
        "amt": 89593,
        "ch": "ATM",
        "time": "06:49",
        "branch": "Chennai",
        "txn_id": "T820"
      },
      {
        "dir": "out",
        "other": "A1101",
        "amt": 81291,
        "ch": "NEFT",
        "time": "16:03",
        "branch": "Bangalore",
        "txn_id": "T582"
      },
      {
        "dir": "in",
        "other": "A1195",
        "amt": 70074,
        "ch": "RTGS",
        "time": "05:44",
        "branch": "Kolkata",
        "txn_id": "T524"
      },
      {
        "dir": "out",
        "other": "A1154",
        "amt": 68395,
        "ch": "NEFT",
        "time": "01:33",
        "branch": "Mumbai",
        "txn_id": "T1155"
      },
      {
        "dir": "out",
        "other": "A1009",
        "amt": 60414,
        "ch": "NEFT",
        "time": "02:09",
        "branch": "Mumbai",
        "txn_id": "T671"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 50998,
        "ch": "ATM",
        "time": "05:38",
        "branch": "Bangalore",
        "txn_id": "T1313"
      }
    ]
  },
  {
    "id": "A1190",
    "name": "A1190",
    "type": "Student",
    "age": 28,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9456,649",
    "outflow": "\u20b9834,817",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1190",
        "A1060",
        "A1015",
        "A1190"
      ]
    ],
    "openDate": "2015-01-30",
    "lastTxn": "2015-11-01",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1065",
        "amt": 345748,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1909"
      },
      {
        "dir": "out",
        "other": "A1143",
        "amt": 344883,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1910"
      },
      {
        "dir": "out",
        "other": "A1040",
        "amt": 94155,
        "ch": "IMPS",
        "time": "02:35",
        "branch": "Kolkata",
        "txn_id": "T210"
      },
      {
        "dir": "out",
        "other": "A1196",
        "amt": 86720,
        "ch": "NEFT",
        "time": "19:56",
        "branch": "Chennai",
        "txn_id": "T216"
      },
      {
        "dir": "in",
        "other": "A1014",
        "amt": 73931,
        "ch": "UPI",
        "time": "07:33",
        "branch": "Chennai",
        "txn_id": "T1554"
      },
      {
        "dir": "out",
        "other": "A1025",
        "amt": 69723,
        "ch": "UPI",
        "time": "05:27",
        "branch": "Chennai",
        "txn_id": "T343"
      },
      {
        "dir": "out",
        "other": "A1060",
        "amt": 52819,
        "ch": "NEFT",
        "time": "15:11",
        "branch": "Delhi",
        "txn_id": "T802"
      },
      {
        "dir": "out",
        "other": "A1109",
        "amt": 44816,
        "ch": "NEFT",
        "time": "21:01",
        "branch": "Bangalore",
        "txn_id": "T1551"
      }
    ]
  },
  {
    "id": "A1191",
    "name": "A1191",
    "type": "Engineer",
    "age": 43,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b95L",
    "inflow": "\u20b9402,559",
    "outflow": "\u20b9315,950",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1191",
        "A1157",
        "A1152",
        "A1191"
      ],
      [
        "A1191",
        "A1049",
        "A1165",
        "A1191"
      ]
    ],
    "openDate": "2019-08-17",
    "lastTxn": "2020-09-01",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1066",
        "amt": 92856,
        "ch": "ATM",
        "time": "19:32",
        "branch": "Chennai",
        "txn_id": "T192"
      },
      {
        "dir": "in",
        "other": "A1089",
        "amt": 92024,
        "ch": "ATM",
        "time": "03:49",
        "branch": "Delhi",
        "txn_id": "T1762"
      },
      {
        "dir": "out",
        "other": "A1133",
        "amt": 88343,
        "ch": "RTGS",
        "time": "07:42",
        "branch": "Kolkata",
        "txn_id": "T516"
      },
      {
        "dir": "out",
        "other": "A1031",
        "amt": 87455,
        "ch": "NEFT",
        "time": "19:04",
        "branch": "Chennai",
        "txn_id": "T1582"
      },
      {
        "dir": "out",
        "other": "A1049",
        "amt": 62965,
        "ch": "NEFT",
        "time": "00:15",
        "branch": "Kolkata",
        "txn_id": "T1862"
      },
      {
        "dir": "in",
        "other": "A1050",
        "amt": 61680,
        "ch": "RTGS",
        "time": "05:28",
        "branch": "Kolkata",
        "txn_id": "T1117"
      },
      {
        "dir": "in",
        "other": "A1165",
        "amt": 60392,
        "ch": "RTGS",
        "time": "08:34",
        "branch": "Mumbai",
        "txn_id": "T841"
      },
      {
        "dir": "out",
        "other": "A1157",
        "amt": 51745,
        "ch": "IMPS",
        "time": "22:56",
        "branch": "Chennai",
        "txn_id": "T942"
      }
    ]
  },
  {
    "id": "A1192",
    "name": "A1192",
    "type": "Student",
    "age": 33,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b910L",
    "inflow": "\u20b9518,645",
    "outflow": "\u20b9779,567",
    "connections": 28,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1192",
        "A1108",
        "A1069",
        "A1192"
      ],
      [
        "A1192",
        "A1143",
        "A1009",
        "A1192"
      ],
      [
        "A1192",
        "A1023",
        "A1066",
        "A1192"
      ]
    ],
    "openDate": "2015-09-26",
    "lastTxn": "2015-12-14",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1110",
        "amt": 93310,
        "ch": "IMPS",
        "time": "15:56",
        "branch": "Mumbai",
        "txn_id": "T1816"
      },
      {
        "dir": "out",
        "other": "A1133",
        "amt": 91129,
        "ch": "UPI",
        "time": "21:59",
        "branch": "Bangalore",
        "txn_id": "T441"
      },
      {
        "dir": "out",
        "other": "A1127",
        "amt": 87808,
        "ch": "IMPS",
        "time": "23:11",
        "branch": "Mumbai",
        "txn_id": "T1371"
      },
      {
        "dir": "in",
        "other": "A1161",
        "amt": 87483,
        "ch": "UPI",
        "time": "10:15",
        "branch": "Bangalore",
        "txn_id": "T442"
      },
      {
        "dir": "in",
        "other": "A1050",
        "amt": 87403,
        "ch": "RTGS",
        "time": "00:05",
        "branch": "Bangalore",
        "txn_id": "T1296"
      },
      {
        "dir": "in",
        "other": "A1147",
        "amt": 72654,
        "ch": "RTGS",
        "time": "14:18",
        "branch": "Kolkata",
        "txn_id": "T1410"
      },
      {
        "dir": "out",
        "other": "A1104",
        "amt": 71981,
        "ch": "RTGS",
        "time": "16:44",
        "branch": "Chennai",
        "txn_id": "T331"
      },
      {
        "dir": "out",
        "other": "A1143",
        "amt": 64669,
        "ch": "UPI",
        "time": "13:40",
        "branch": "Chennai",
        "txn_id": "T700"
      }
    ]
  },
  {
    "id": "A1193",
    "name": "A1193",
    "type": "Doctor",
    "age": 20,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9742,067",
    "outflow": "\u20b9785,431",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1193",
        "A1025",
        "A1123",
        "A1193"
      ],
      [
        "A1193",
        "A1123",
        "A1193"
      ],
      [
        "A1193",
        "A1123",
        "A1014",
        "A1193"
      ]
    ],
    "openDate": "2017-06-18",
    "lastTxn": "2018-02-12",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1013",
        "amt": 361710,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Mumbai",
        "txn_id": "T1923"
      },
      {
        "dir": "in",
        "other": "A1123",
        "amt": 359064,
        "ch": "NEFT",
        "time": "10:01",
        "branch": "Bangalore",
        "txn_id": "T1922"
      },
      {
        "dir": "in",
        "other": "A1091",
        "amt": 98942,
        "ch": "RTGS",
        "time": "07:54",
        "branch": "Mumbai",
        "txn_id": "T760"
      },
      {
        "dir": "in",
        "other": "A1090",
        "amt": 78962,
        "ch": "IMPS",
        "time": "02:05",
        "branch": "Bangalore",
        "txn_id": "T973"
      },
      {
        "dir": "out",
        "other": "A1113",
        "amt": 78853,
        "ch": "RTGS",
        "time": "19:20",
        "branch": "Bangalore",
        "txn_id": "T1141"
      },
      {
        "dir": "in",
        "other": "A1029",
        "amt": 73639,
        "ch": "ATM",
        "time": "19:26",
        "branch": "Mumbai",
        "txn_id": "T1352"
      },
      {
        "dir": "out",
        "other": "A1123",
        "amt": 70820,
        "ch": "NEFT",
        "time": "15:46",
        "branch": "Mumbai",
        "txn_id": "T1391"
      },
      {
        "dir": "out",
        "other": "A1094",
        "amt": 67992,
        "ch": "RTGS",
        "time": "19:17",
        "branch": "Kolkata",
        "txn_id": "T228"
      }
    ]
  },
  {
    "id": "A1194",
    "name": "A1194",
    "type": "Doctor",
    "age": 63,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b95L",
    "inflow": "\u20b9271,913",
    "outflow": "\u20b9472,703",
    "connections": 13,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1194",
        "A1073",
        "A1194"
      ],
      [
        "A1194",
        "A1050",
        "A1163",
        "A1194"
      ],
      [
        "A1194",
        "A1050",
        "A1066",
        "A1194"
      ]
    ],
    "openDate": "2020-04-19",
    "lastTxn": "2020-10-02",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1066",
        "amt": 97525,
        "ch": "ATM",
        "time": "19:46",
        "branch": "Mumbai",
        "txn_id": "T1677"
      },
      {
        "dir": "in",
        "other": "A1073",
        "amt": 90323,
        "ch": "IMPS",
        "time": "00:42",
        "branch": "Chennai",
        "txn_id": "T1548"
      },
      {
        "dir": "out",
        "other": "A1099",
        "amt": 82238,
        "ch": "RTGS",
        "time": "06:27",
        "branch": "Delhi",
        "txn_id": "T827"
      },
      {
        "dir": "out",
        "other": "A1109",
        "amt": 81770,
        "ch": "RTGS",
        "time": "11:19",
        "branch": "Kolkata",
        "txn_id": "T421"
      },
      {
        "dir": "out",
        "other": "A1111",
        "amt": 72210,
        "ch": "UPI",
        "time": "02:45",
        "branch": "Kolkata",
        "txn_id": "T1840"
      },
      {
        "dir": "out",
        "other": "A1073",
        "amt": 71982,
        "ch": "ATM",
        "time": "00:10",
        "branch": "Chennai",
        "txn_id": "T1442"
      },
      {
        "dir": "in",
        "other": "A1163",
        "amt": 50443,
        "ch": "NEFT",
        "time": "22:13",
        "branch": "Kolkata",
        "txn_id": "T371"
      },
      {
        "dir": "out",
        "other": "A1016",
        "amt": 40525,
        "ch": "RTGS",
        "time": "18:30",
        "branch": "Delhi",
        "txn_id": "T323"
      }
    ]
  },
  {
    "id": "A1195",
    "name": "A1195",
    "type": "Govt Employee",
    "age": 20,
    "risk": "suspicious",
    "riskScore": 55,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9411,145",
    "outflow": "\u20b9339,327",
    "connections": 17,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1195",
        "A1189",
        "A1133",
        "A1195"
      ],
      [
        "A1195",
        "A1005",
        "A1078",
        "A1195"
      ]
    ],
    "openDate": "2022-02-20",
    "lastTxn": "2023-08-25",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1005",
        "amt": 96226,
        "ch": "UPI",
        "time": "07:40",
        "branch": "Mumbai",
        "txn_id": "T944"
      },
      {
        "dir": "in",
        "other": "A1163",
        "amt": 96099,
        "ch": "RTGS",
        "time": "07:14",
        "branch": "Chennai",
        "txn_id": "T289"
      },
      {
        "dir": "in",
        "other": "A1188",
        "amt": 92502,
        "ch": "RTGS",
        "time": "13:43",
        "branch": "Delhi",
        "txn_id": "T809"
      },
      {
        "dir": "in",
        "other": "A1133",
        "amt": 75685,
        "ch": "RTGS",
        "time": "07:16",
        "branch": "Delhi",
        "txn_id": "T556"
      },
      {
        "dir": "in",
        "other": "A1078",
        "amt": 70808,
        "ch": "RTGS",
        "time": "09:12",
        "branch": "Kolkata",
        "txn_id": "T352"
      },
      {
        "dir": "out",
        "other": "A1189",
        "amt": 70074,
        "ch": "RTGS",
        "time": "05:44",
        "branch": "Kolkata",
        "txn_id": "T524"
      },
      {
        "dir": "out",
        "other": "A1023",
        "amt": 64346,
        "ch": "UPI",
        "time": "04:14",
        "branch": "Chennai",
        "txn_id": "T1238"
      },
      {
        "dir": "out",
        "other": "A1054",
        "amt": 44016,
        "ch": "RTGS",
        "time": "05:51",
        "branch": "Bangalore",
        "txn_id": "T205"
      }
    ]
  },
  {
    "id": "A1196",
    "name": "A1196",
    "type": "Doctor",
    "age": 33,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b910L",
    "inflow": "\u20b9498,219",
    "outflow": "\u20b9308,200",
    "connections": 16,
    "dormant": false,
    "structuring": 0,
    "circles": [
      [
        "A1196",
        "A1130",
        "A1069",
        "A1196"
      ],
      [
        "A1196",
        "A1091",
        "A1069",
        "A1196"
      ],
      [
        "A1196",
        "A1091",
        "A1161",
        "A1196"
      ]
    ],
    "openDate": "2018-06-14",
    "lastTxn": "2020-06-27",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1130",
        "amt": 96709,
        "ch": "IMPS",
        "time": "10:03",
        "branch": "Bangalore",
        "txn_id": "T278"
      },
      {
        "dir": "in",
        "other": "A1115",
        "amt": 86981,
        "ch": "IMPS",
        "time": "10:26",
        "branch": "Kolkata",
        "txn_id": "T1444"
      },
      {
        "dir": "in",
        "other": "A1190",
        "amt": 86720,
        "ch": "NEFT",
        "time": "19:56",
        "branch": "Chennai",
        "txn_id": "T216"
      },
      {
        "dir": "in",
        "other": "A1133",
        "amt": 86634,
        "ch": "UPI",
        "time": "00:08",
        "branch": "Delhi",
        "txn_id": "T821"
      },
      {
        "dir": "out",
        "other": "A1071",
        "amt": 74149,
        "ch": "UPI",
        "time": "01:40",
        "branch": "Chennai",
        "txn_id": "T149"
      },
      {
        "dir": "in",
        "other": "A1084",
        "amt": 72746,
        "ch": "NEFT",
        "time": "12:29",
        "branch": "Bangalore",
        "txn_id": "T829"
      },
      {
        "dir": "in",
        "other": "A1072",
        "amt": 72281,
        "ch": "ATM",
        "time": "06:05",
        "branch": "Mumbai",
        "txn_id": "T1498"
      },
      {
        "dir": "out",
        "other": "A1017",
        "amt": 58875,
        "ch": "RTGS",
        "time": "21:11",
        "branch": "Mumbai",
        "txn_id": "T1344"
      }
    ]
  },
  {
    "id": "A1197",
    "name": "A1197",
    "type": "Govt Employee",
    "age": 59,
    "risk": "clean",
    "riskScore": 30,
    "riskLevel": "Low",
    "income": "\u20b95L",
    "inflow": "\u20b9320,554",
    "outflow": "\u20b9478,134",
    "connections": 14,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1197",
        "A1176",
        "A1197"
      ],
      [
        "A1197",
        "A1104",
        "A1188",
        "A1197"
      ]
    ],
    "openDate": "2019-10-08",
    "lastTxn": "2020-07-08",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1042",
        "amt": 98118,
        "ch": "UPI",
        "time": "12:11",
        "branch": "Bangalore",
        "txn_id": "T1383"
      },
      {
        "dir": "out",
        "other": "A1176",
        "amt": 95869,
        "ch": "IMPS",
        "time": "20:04",
        "branch": "Bangalore",
        "txn_id": "T161"
      },
      {
        "dir": "in",
        "other": "A1176",
        "amt": 88458,
        "ch": "NEFT",
        "time": "23:37",
        "branch": "Kolkata",
        "txn_id": "T1656"
      },
      {
        "dir": "out",
        "other": "A1104",
        "amt": 78411,
        "ch": "ATM",
        "time": "17:52",
        "branch": "Chennai",
        "txn_id": "T532"
      },
      {
        "dir": "in",
        "other": "A1056",
        "amt": 74986,
        "ch": "RTGS",
        "time": "16:02",
        "branch": "Bangalore",
        "txn_id": "T1694"
      },
      {
        "dir": "out",
        "other": "A1077",
        "amt": 69942,
        "ch": "UPI",
        "time": "20:15",
        "branch": "Kolkata",
        "txn_id": "T1529"
      },
      {
        "dir": "in",
        "other": "A1089",
        "amt": 50969,
        "ch": "ATM",
        "time": "00:58",
        "branch": "Bangalore",
        "txn_id": "T1696"
      },
      {
        "dir": "in",
        "other": "A1063",
        "amt": 48703,
        "ch": "UPI",
        "time": "12:30",
        "branch": "Kolkata",
        "txn_id": "T1971"
      }
    ]
  },
  {
    "id": "A1198",
    "name": "A1198",
    "type": "Student",
    "age": 41,
    "risk": "fraud",
    "riskScore": 75,
    "riskLevel": "Medium",
    "income": "\u20b915L",
    "inflow": "\u20b9309,209",
    "outflow": "\u20b91,094,671",
    "connections": 11,
    "dormant": true,
    "structuring": 1,
    "circles": [
      [
        "A1198",
        "A1057",
        "A1022",
        "A1198"
      ],
      [
        "A1198",
        "A1056",
        "A1122",
        "A1198"
      ]
    ],
    "openDate": "2015-06-25",
    "lastTxn": "2018-01-09",
    "recentTxns": [
      {
        "dir": "out",
        "other": "A1008",
        "amt": 880639,
        "ch": "RTGS",
        "time": "13:15",
        "branch": "Delhi",
        "txn_id": "T2028"
      },
      {
        "dir": "in",
        "other": "A1122",
        "amt": 79920,
        "ch": "IMPS",
        "time": "11:00",
        "branch": "Mumbai",
        "txn_id": "T1965"
      },
      {
        "dir": "out",
        "other": "A1056",
        "amt": 79920,
        "ch": "IMPS",
        "time": "11:05",
        "branch": "Mumbai",
        "txn_id": "T1966"
      },
      {
        "dir": "out",
        "other": "A1057",
        "amt": 64367,
        "ch": "IMPS",
        "time": "05:33",
        "branch": "Mumbai",
        "txn_id": "T941"
      },
      {
        "dir": "in",
        "other": "A1067",
        "amt": 62921,
        "ch": "NEFT",
        "time": "23:05",
        "branch": "Mumbai",
        "txn_id": "T191"
      },
      {
        "dir": "in",
        "other": "A1022",
        "amt": 55584,
        "ch": "UPI",
        "time": "05:23",
        "branch": "Bangalore",
        "txn_id": "T134"
      },
      {
        "dir": "in",
        "other": "A1011",
        "amt": 49927,
        "ch": "ATM",
        "time": "14:08",
        "branch": "Delhi",
        "txn_id": "T1670"
      },
      {
        "dir": "out",
        "other": "A1069",
        "amt": 45564,
        "ch": "UPI",
        "time": "11:30",
        "branch": "Kolkata",
        "txn_id": "T1570"
      }
    ]
  },
  {
    "id": "A1199",
    "name": "A1199",
    "type": "Govt Employee",
    "age": 42,
    "risk": "fraud",
    "riskScore": 85,
    "riskLevel": "High",
    "income": "\u20b920L",
    "inflow": "\u20b9135,335",
    "outflow": "\u20b9651,803",
    "connections": 16,
    "dormant": false,
    "structuring": 1,
    "circles": [
      [
        "A1199",
        "A1130",
        "A1144",
        "A1199"
      ],
      [
        "A1199",
        "A1049",
        "A1085",
        "A1199"
      ],
      [
        "A1199",
        "A1144",
        "A1199"
      ]
    ],
    "openDate": "2021-12-17",
    "lastTxn": "2024-01-04",
    "recentTxns": [
      {
        "dir": "in",
        "other": "A1085",
        "amt": 96918,
        "ch": "RTGS",
        "time": "23:16",
        "branch": "Kolkata",
        "txn_id": "T880"
      },
      {
        "dir": "out",
        "other": "A1143",
        "amt": 79149,
        "ch": "RTGS",
        "time": "22:42",
        "branch": "Bangalore",
        "txn_id": "T831"
      },
      {
        "dir": "out",
        "other": "A1074",
        "amt": 74186,
        "ch": "ATM",
        "time": "12:01",
        "branch": "Delhi",
        "txn_id": "T1168"
      },
      {
        "dir": "out",
        "other": "A1144",
        "amt": 72928,
        "ch": "NEFT",
        "time": "05:16",
        "branch": "Kolkata",
        "txn_id": "T448"
      },
      {
        "dir": "out",
        "other": "A1006",
        "amt": 70356,
        "ch": "IMPS",
        "time": "04:59",
        "branch": "Kolkata",
        "txn_id": "T471"
      },
      {
        "dir": "out",
        "other": "A1049",
        "amt": 62728,
        "ch": "ATM",
        "time": "16:41",
        "branch": "Kolkata",
        "txn_id": "T1685"
      },
      {
        "dir": "out",
        "other": "A1078",
        "amt": 54165,
        "ch": "IMPS",
        "time": "23:48",
        "branch": "Chennai",
        "txn_id": "T777"
      },
      {
        "dir": "out",
        "other": "A1088",
        "amt": 53894,
        "ch": "IMPS",
        "time": "08:25",
        "branch": "Bangalore",
        "txn_id": "T1855"
      }
    ]
  }
];

const realTransactions = [
  {
    "id": "T101",
    "source": "A1180",
    "target": "A1099",
    "amount": 20382,
    "channel": "ATM",
    "time": "06:04",
    "branch": "Chennai"
  },
  {
    "id": "T102",
    "source": "A1057",
    "target": "A1002",
    "amount": 38121,
    "channel": "NEFT",
    "time": "19:34",
    "branch": "Chennai"
  },
  {
    "id": "T103",
    "source": "A1008",
    "target": "A1062",
    "amount": 7815,
    "channel": "ATM",
    "time": "00:35",
    "branch": "Chennai"
  },
  {
    "id": "T104",
    "source": "A1001",
    "target": "A1173",
    "amount": 86919,
    "channel": "UPI",
    "time": "04:56",
    "branch": "Delhi"
  },
  {
    "id": "T105",
    "source": "A1145",
    "target": "A1002",
    "amount": 33990,
    "channel": "RTGS",
    "time": "01:25",
    "branch": "Mumbai"
  },
  {
    "id": "T106",
    "source": "A1084",
    "target": "A1018",
    "amount": 47772,
    "channel": "ATM",
    "time": "14:36",
    "branch": "Delhi"
  },
  {
    "id": "T107",
    "source": "A1047",
    "target": "A1181",
    "amount": 42731,
    "channel": "IMPS",
    "time": "12:27",
    "branch": "Mumbai"
  },
  {
    "id": "T108",
    "source": "A1118",
    "target": "A1097",
    "amount": 50092,
    "channel": "IMPS",
    "time": "05:34",
    "branch": "Mumbai"
  },
  {
    "id": "T109",
    "source": "A1175",
    "target": "A1120",
    "amount": 95095,
    "channel": "UPI",
    "time": "03:46",
    "branch": "Chennai"
  },
  {
    "id": "T110",
    "source": "A1106",
    "target": "A1044",
    "amount": 18284,
    "channel": "ATM",
    "time": "06:15",
    "branch": "Chennai"
  },
  {
    "id": "T111",
    "source": "A1001",
    "target": "A1153",
    "amount": 9496,
    "channel": "NEFT",
    "time": "06:22",
    "branch": "Bangalore"
  },
  {
    "id": "T112",
    "source": "A1113",
    "target": "A1058",
    "amount": 19646,
    "channel": "NEFT",
    "time": "19:30",
    "branch": "Mumbai"
  },
  {
    "id": "T113",
    "source": "A1149",
    "target": "A1092",
    "amount": 59591,
    "channel": "RTGS",
    "time": "02:31",
    "branch": "Kolkata"
  },
  {
    "id": "T114",
    "source": "A1148",
    "target": "A1111",
    "amount": 8726,
    "channel": "UPI",
    "time": "18:34",
    "branch": "Chennai"
  },
  {
    "id": "T115",
    "source": "A1027",
    "target": "A1046",
    "amount": 84852,
    "channel": "UPI",
    "time": "04:53",
    "branch": "Mumbai"
  },
  {
    "id": "T116",
    "source": "A1080",
    "target": "A1163",
    "amount": 79906,
    "channel": "RTGS",
    "time": "21:19",
    "branch": "Mumbai"
  },
  {
    "id": "T117",
    "source": "A1196",
    "target": "A1080",
    "amount": 28157,
    "channel": "RTGS",
    "time": "11:50",
    "branch": "Kolkata"
  },
  {
    "id": "T118",
    "source": "A1083",
    "target": "A1150",
    "amount": 511,
    "channel": "NEFT",
    "time": "07:01",
    "branch": "Kolkata"
  },
  {
    "id": "T119",
    "source": "A1146",
    "target": "A1128",
    "amount": 50695,
    "channel": "UPI",
    "time": "01:11",
    "branch": "Delhi"
  },
  {
    "id": "T120",
    "source": "A1010",
    "target": "A1145",
    "amount": 27245,
    "channel": "NEFT",
    "time": "13:23",
    "branch": "Bangalore"
  },
  {
    "id": "T121",
    "source": "A1079",
    "target": "A1102",
    "amount": 29846,
    "channel": "UPI",
    "time": "00:27",
    "branch": "Kolkata"
  },
  {
    "id": "T122",
    "source": "A1043",
    "target": "A1095",
    "amount": 15259,
    "channel": "ATM",
    "time": "13:23",
    "branch": "Chennai"
  },
  {
    "id": "T123",
    "source": "A1175",
    "target": "A1120",
    "amount": 91989,
    "channel": "RTGS",
    "time": "12:04",
    "branch": "Bangalore"
  },
  {
    "id": "T124",
    "source": "A1173",
    "target": "A1071",
    "amount": 29631,
    "channel": "NEFT",
    "time": "06:00",
    "branch": "Chennai"
  },
  {
    "id": "T125",
    "source": "A1046",
    "target": "A1036",
    "amount": 51170,
    "channel": "IMPS",
    "time": "21:36",
    "branch": "Chennai"
  },
  {
    "id": "T126",
    "source": "A1147",
    "target": "A1189",
    "amount": 22871,
    "channel": "NEFT",
    "time": "23:41",
    "branch": "Bangalore"
  },
  {
    "id": "T127",
    "source": "A1068",
    "target": "A1116",
    "amount": 10426,
    "channel": "NEFT",
    "time": "10:28",
    "branch": "Bangalore"
  },
  {
    "id": "T128",
    "source": "A1135",
    "target": "A1051",
    "amount": 79327,
    "channel": "UPI",
    "time": "09:59",
    "branch": "Delhi"
  },
  {
    "id": "T129",
    "source": "A1161",
    "target": "A1079",
    "amount": 86698,
    "channel": "NEFT",
    "time": "02:38",
    "branch": "Chennai"
  },
  {
    "id": "T130",
    "source": "A1153",
    "target": "A1010",
    "amount": 14889,
    "channel": "UPI",
    "time": "03:11",
    "branch": "Mumbai"
  },
  {
    "id": "T131",
    "source": "A1107",
    "target": "A1089",
    "amount": 76288,
    "channel": "RTGS",
    "time": "10:49",
    "branch": "Chennai"
  },
  {
    "id": "T132",
    "source": "A1121",
    "target": "A1065",
    "amount": 84552,
    "channel": "IMPS",
    "time": "05:42",
    "branch": "Kolkata"
  },
  {
    "id": "T133",
    "source": "A1055",
    "target": "A1176",
    "amount": 80792,
    "channel": "IMPS",
    "time": "17:12",
    "branch": "Delhi"
  },
  {
    "id": "T134",
    "source": "A1022",
    "target": "A1198",
    "amount": 55584,
    "channel": "UPI",
    "time": "05:23",
    "branch": "Bangalore"
  },
  {
    "id": "T135",
    "source": "A1052",
    "target": "A1088",
    "amount": 72471,
    "channel": "ATM",
    "time": "16:50",
    "branch": "Delhi"
  },
  {
    "id": "T136",
    "source": "A1105",
    "target": "A1164",
    "amount": 58550,
    "channel": "ATM",
    "time": "04:32",
    "branch": "Delhi"
  },
  {
    "id": "T137",
    "source": "A1054",
    "target": "A1017",
    "amount": 6113,
    "channel": "NEFT",
    "time": "15:50",
    "branch": "Bangalore"
  },
  {
    "id": "T138",
    "source": "A1148",
    "target": "A1193",
    "amount": 56679,
    "channel": "NEFT",
    "time": "16:08",
    "branch": "Delhi"
  },
  {
    "id": "T139",
    "source": "A1073",
    "target": "A1142",
    "amount": 54124,
    "channel": "ATM",
    "time": "16:04",
    "branch": "Delhi"
  },
  {
    "id": "T140",
    "source": "A1097",
    "target": "A1051",
    "amount": 88122,
    "channel": "IMPS",
    "time": "18:51",
    "branch": "Bangalore"
  },
  {
    "id": "T141",
    "source": "A1128",
    "target": "A1111",
    "amount": 92995,
    "channel": "RTGS",
    "time": "03:22",
    "branch": "Mumbai"
  },
  {
    "id": "T142",
    "source": "A1045",
    "target": "A1174",
    "amount": 46031,
    "channel": "RTGS",
    "time": "12:55",
    "branch": "Delhi"
  },
  {
    "id": "T143",
    "source": "A1064",
    "target": "A1150",
    "amount": 64740,
    "channel": "UPI",
    "time": "07:10",
    "branch": "Delhi"
  },
  {
    "id": "T144",
    "source": "A1176",
    "target": "A1043",
    "amount": 66304,
    "channel": "ATM",
    "time": "10:40",
    "branch": "Delhi"
  },
  {
    "id": "T145",
    "source": "A1052",
    "target": "A1189",
    "amount": 21363,
    "channel": "UPI",
    "time": "14:07",
    "branch": "Bangalore"
  },
  {
    "id": "T146",
    "source": "A1179",
    "target": "A1004",
    "amount": 90724,
    "channel": "ATM",
    "time": "11:57",
    "branch": "Chennai"
  },
  {
    "id": "T147",
    "source": "A1003",
    "target": "A1188",
    "amount": 78055,
    "channel": "RTGS",
    "time": "10:45",
    "branch": "Delhi"
  },
  {
    "id": "T148",
    "source": "A1149",
    "target": "A1126",
    "amount": 7537,
    "channel": "UPI",
    "time": "01:31",
    "branch": "Delhi"
  },
  {
    "id": "T149",
    "source": "A1196",
    "target": "A1071",
    "amount": 74149,
    "channel": "UPI",
    "time": "01:40",
    "branch": "Chennai"
  },
  {
    "id": "T150",
    "source": "A1132",
    "target": "A1076",
    "amount": 58803,
    "channel": "IMPS",
    "time": "18:17",
    "branch": "Chennai"
  },
  {
    "id": "T151",
    "source": "A1035",
    "target": "A1147",
    "amount": 2281,
    "channel": "RTGS",
    "time": "17:05",
    "branch": "Bangalore"
  },
  {
    "id": "T152",
    "source": "A1110",
    "target": "A1162",
    "amount": 99519,
    "channel": "ATM",
    "time": "19:36",
    "branch": "Mumbai"
  },
  {
    "id": "T153",
    "source": "A1011",
    "target": "A1050",
    "amount": 64718,
    "channel": "UPI",
    "time": "13:54",
    "branch": "Mumbai"
  },
  {
    "id": "T154",
    "source": "A1169",
    "target": "A1006",
    "amount": 15658,
    "channel": "ATM",
    "time": "12:27",
    "branch": "Bangalore"
  },
  {
    "id": "T155",
    "source": "A1002",
    "target": "A1140",
    "amount": 66990,
    "channel": "ATM",
    "time": "20:27",
    "branch": "Bangalore"
  },
  {
    "id": "T156",
    "source": "A1045",
    "target": "A1068",
    "amount": 45497,
    "channel": "UPI",
    "time": "14:45",
    "branch": "Kolkata"
  },
  {
    "id": "T157",
    "source": "A1168",
    "target": "A1023",
    "amount": 10086,
    "channel": "RTGS",
    "time": "22:43",
    "branch": "Bangalore"
  },
  {
    "id": "T158",
    "source": "A1018",
    "target": "A1186",
    "amount": 28406,
    "channel": "IMPS",
    "time": "03:01",
    "branch": "Delhi"
  },
  {
    "id": "T159",
    "source": "A1069",
    "target": "A1162",
    "amount": 73015,
    "channel": "UPI",
    "time": "17:31",
    "branch": "Delhi"
  },
  {
    "id": "T160",
    "source": "A1175",
    "target": "A1157",
    "amount": 5601,
    "channel": "IMPS",
    "time": "09:06",
    "branch": "Chennai"
  },
  {
    "id": "T161",
    "source": "A1197",
    "target": "A1176",
    "amount": 95869,
    "channel": "IMPS",
    "time": "20:04",
    "branch": "Bangalore"
  },
  {
    "id": "T162",
    "source": "A1101",
    "target": "A1157",
    "amount": 62725,
    "channel": "UPI",
    "time": "05:40",
    "branch": "Kolkata"
  },
  {
    "id": "T163",
    "source": "A1097",
    "target": "A1147",
    "amount": 78442,
    "channel": "NEFT",
    "time": "03:29",
    "branch": "Mumbai"
  },
  {
    "id": "T164",
    "source": "A1149",
    "target": "A1024",
    "amount": 64421,
    "channel": "ATM",
    "time": "21:44",
    "branch": "Delhi"
  },
  {
    "id": "T165",
    "source": "A1048",
    "target": "A1003",
    "amount": 14146,
    "channel": "ATM",
    "time": "08:35",
    "branch": "Mumbai"
  },
  {
    "id": "T166",
    "source": "A1178",
    "target": "A1008",
    "amount": 18010,
    "channel": "RTGS",
    "time": "12:30",
    "branch": "Delhi"
  },
  {
    "id": "T167",
    "source": "A1027",
    "target": "A1001",
    "amount": 21166,
    "channel": "NEFT",
    "time": "05:56",
    "branch": "Delhi"
  },
  {
    "id": "T168",
    "source": "A1123",
    "target": "A1051",
    "amount": 89114,
    "channel": "UPI",
    "time": "18:39",
    "branch": "Mumbai"
  },
  {
    "id": "T169",
    "source": "A1011",
    "target": "A1005",
    "amount": 20122,
    "channel": "UPI",
    "time": "17:22",
    "branch": "Chennai"
  },
  {
    "id": "T170",
    "source": "A1008",
    "target": "A1015",
    "amount": 17681,
    "channel": "UPI",
    "time": "18:02",
    "branch": "Chennai"
  },
  {
    "id": "T171",
    "source": "A1091",
    "target": "A1034",
    "amount": 79617,
    "channel": "UPI",
    "time": "09:42",
    "branch": "Kolkata"
  },
  {
    "id": "T172",
    "source": "A1019",
    "target": "A1078",
    "amount": 99845,
    "channel": "ATM",
    "time": "21:41",
    "branch": "Mumbai"
  },
  {
    "id": "T173",
    "source": "A1016",
    "target": "A1058",
    "amount": 2127,
    "channel": "IMPS",
    "time": "18:02",
    "branch": "Bangalore"
  },
  {
    "id": "T174",
    "source": "A1126",
    "target": "A1059",
    "amount": 10776,
    "channel": "NEFT",
    "time": "13:55",
    "branch": "Kolkata"
  },
  {
    "id": "T175",
    "source": "A1177",
    "target": "A1027",
    "amount": 73280,
    "channel": "RTGS",
    "time": "23:34",
    "branch": "Chennai"
  },
  {
    "id": "T176",
    "source": "A1072",
    "target": "A1067",
    "amount": 63798,
    "channel": "IMPS",
    "time": "07:50",
    "branch": "Bangalore"
  },
  {
    "id": "T177",
    "source": "A1060",
    "target": "A1044",
    "amount": 62376,
    "channel": "IMPS",
    "time": "04:54",
    "branch": "Bangalore"
  },
  {
    "id": "T178",
    "source": "A1100",
    "target": "A1042",
    "amount": 36755,
    "channel": "UPI",
    "time": "18:03",
    "branch": "Bangalore"
  },
  {
    "id": "T179",
    "source": "A1044",
    "target": "A1140",
    "amount": 83019,
    "channel": "UPI",
    "time": "12:40",
    "branch": "Mumbai"
  },
  {
    "id": "T180",
    "source": "A1025",
    "target": "A1068",
    "amount": 66418,
    "channel": "RTGS",
    "time": "12:54",
    "branch": "Delhi"
  },
  {
    "id": "T181",
    "source": "A1139",
    "target": "A1104",
    "amount": 65883,
    "channel": "NEFT",
    "time": "17:46",
    "branch": "Kolkata"
  },
  {
    "id": "T182",
    "source": "A1046",
    "target": "A1001",
    "amount": 40728,
    "channel": "UPI",
    "time": "07:44",
    "branch": "Kolkata"
  },
  {
    "id": "T183",
    "source": "A1140",
    "target": "A1085",
    "amount": 3996,
    "channel": "ATM",
    "time": "07:49",
    "branch": "Mumbai"
  },
  {
    "id": "T184",
    "source": "A1003",
    "target": "A1091",
    "amount": 89765,
    "channel": "UPI",
    "time": "07:34",
    "branch": "Mumbai"
  },
  {
    "id": "T185",
    "source": "A1025",
    "target": "A1157",
    "amount": 880,
    "channel": "RTGS",
    "time": "11:13",
    "branch": "Mumbai"
  },
  {
    "id": "T186",
    "source": "A1091",
    "target": "A1057",
    "amount": 88503,
    "channel": "IMPS",
    "time": "05:10",
    "branch": "Chennai"
  },
  {
    "id": "T187",
    "source": "A1110",
    "target": "A1150",
    "amount": 32311,
    "channel": "IMPS",
    "time": "22:28",
    "branch": "Delhi"
  },
  {
    "id": "T188",
    "source": "A1098",
    "target": "A1124",
    "amount": 95629,
    "channel": "ATM",
    "time": "21:26",
    "branch": "Mumbai"
  },
  {
    "id": "T189",
    "source": "A1069",
    "target": "A1104",
    "amount": 58204,
    "channel": "IMPS",
    "time": "14:12",
    "branch": "Kolkata"
  },
  {
    "id": "T190",
    "source": "A1148",
    "target": "A1076",
    "amount": 64407,
    "channel": "UPI",
    "time": "08:17",
    "branch": "Delhi"
  },
  {
    "id": "T191",
    "source": "A1067",
    "target": "A1198",
    "amount": 62921,
    "channel": "NEFT",
    "time": "23:05",
    "branch": "Mumbai"
  },
  {
    "id": "T192",
    "source": "A1066",
    "target": "A1191",
    "amount": 92856,
    "channel": "ATM",
    "time": "19:32",
    "branch": "Chennai"
  },
  {
    "id": "T193",
    "source": "A1017",
    "target": "A1174",
    "amount": 20621,
    "channel": "IMPS",
    "time": "12:51",
    "branch": "Chennai"
  },
  {
    "id": "T194",
    "source": "A1137",
    "target": "A1067",
    "amount": 43062,
    "channel": "RTGS",
    "time": "18:26",
    "branch": "Chennai"
  },
  {
    "id": "T195",
    "source": "A1170",
    "target": "A1054",
    "amount": 99725,
    "channel": "NEFT",
    "time": "11:08",
    "branch": "Bangalore"
  },
  {
    "id": "T196",
    "source": "A1157",
    "target": "A1079",
    "amount": 33625,
    "channel": "IMPS",
    "time": "02:10",
    "branch": "Chennai"
  },
  {
    "id": "T197",
    "source": "A1071",
    "target": "A1118",
    "amount": 99028,
    "channel": "IMPS",
    "time": "08:25",
    "branch": "Delhi"
  },
  {
    "id": "T198",
    "source": "A1057",
    "target": "A1187",
    "amount": 74560,
    "channel": "ATM",
    "time": "07:17",
    "branch": "Bangalore"
  },
  {
    "id": "T199",
    "source": "A1139",
    "target": "A1078",
    "amount": 78319,
    "channel": "UPI",
    "time": "10:37",
    "branch": "Kolkata"
  },
  {
    "id": "T200",
    "source": "A1150",
    "target": "A1125",
    "amount": 68452,
    "channel": "RTGS",
    "time": "07:48",
    "branch": "Kolkata"
  },
  {
    "id": "T201",
    "source": "A1171",
    "target": "A1113",
    "amount": 20718,
    "channel": "IMPS",
    "time": "11:48",
    "branch": "Bangalore"
  },
  {
    "id": "T202",
    "source": "A1068",
    "target": "A1043",
    "amount": 11869,
    "channel": "UPI",
    "time": "08:31",
    "branch": "Kolkata"
  },
  {
    "id": "T203",
    "source": "A1035",
    "target": "A1148",
    "amount": 67331,
    "channel": "RTGS",
    "time": "07:04",
    "branch": "Bangalore"
  },
  {
    "id": "T204",
    "source": "A1058",
    "target": "A1086",
    "amount": 7457,
    "channel": "NEFT",
    "time": "01:06",
    "branch": "Delhi"
  },
  {
    "id": "T205",
    "source": "A1195",
    "target": "A1054",
    "amount": 44016,
    "channel": "RTGS",
    "time": "05:51",
    "branch": "Bangalore"
  },
  {
    "id": "T206",
    "source": "A1091",
    "target": "A1193",
    "amount": 31253,
    "channel": "UPI",
    "time": "19:15",
    "branch": "Delhi"
  },
  {
    "id": "T207",
    "source": "A1142",
    "target": "A1101",
    "amount": 52729,
    "channel": "RTGS",
    "time": "16:56",
    "branch": "Chennai"
  },
  {
    "id": "T208",
    "source": "A1152",
    "target": "A1100",
    "amount": 98210,
    "channel": "NEFT",
    "time": "04:37",
    "branch": "Chennai"
  },
  {
    "id": "T209",
    "source": "A1019",
    "target": "A1094",
    "amount": 3341,
    "channel": "UPI",
    "time": "04:28",
    "branch": "Delhi"
  },
  {
    "id": "T210",
    "source": "A1190",
    "target": "A1040",
    "amount": 94155,
    "channel": "IMPS",
    "time": "02:35",
    "branch": "Kolkata"
  },
  {
    "id": "T211",
    "source": "A1108",
    "target": "A1185",
    "amount": 94200,
    "channel": "IMPS",
    "time": "07:35",
    "branch": "Mumbai"
  },
  {
    "id": "T212",
    "source": "A1092",
    "target": "A1051",
    "amount": 56924,
    "channel": "NEFT",
    "time": "00:59",
    "branch": "Mumbai"
  },
  {
    "id": "T213",
    "source": "A1127",
    "target": "A1135",
    "amount": 95868,
    "channel": "ATM",
    "time": "20:50",
    "branch": "Kolkata"
  },
  {
    "id": "T214",
    "source": "A1064",
    "target": "A1008",
    "amount": 25665,
    "channel": "ATM",
    "time": "06:16",
    "branch": "Chennai"
  },
  {
    "id": "T215",
    "source": "A1132",
    "target": "A1087",
    "amount": 25548,
    "channel": "NEFT",
    "time": "08:53",
    "branch": "Chennai"
  },
  {
    "id": "T216",
    "source": "A1190",
    "target": "A1196",
    "amount": 86720,
    "channel": "NEFT",
    "time": "19:56",
    "branch": "Chennai"
  },
  {
    "id": "T217",
    "source": "A1187",
    "target": "A1195",
    "amount": 31607,
    "channel": "ATM",
    "time": "14:05",
    "branch": "Kolkata"
  },
  {
    "id": "T218",
    "source": "A1082",
    "target": "A1115",
    "amount": 72986,
    "channel": "IMPS",
    "time": "05:35",
    "branch": "Kolkata"
  },
  {
    "id": "T219",
    "source": "A1160",
    "target": "A1042",
    "amount": 57336,
    "channel": "RTGS",
    "time": "07:22",
    "branch": "Kolkata"
  },
  {
    "id": "T220",
    "source": "A1071",
    "target": "A1070",
    "amount": 31666,
    "channel": "ATM",
    "time": "13:45",
    "branch": "Kolkata"
  },
  {
    "id": "T221",
    "source": "A1053",
    "target": "A1151",
    "amount": 57509,
    "channel": "ATM",
    "time": "12:49",
    "branch": "Mumbai"
  },
  {
    "id": "T222",
    "source": "A1040",
    "target": "A1177",
    "amount": 88478,
    "channel": "ATM",
    "time": "09:15",
    "branch": "Mumbai"
  },
  {
    "id": "T223",
    "source": "A1191",
    "target": "A1073",
    "amount": 2658,
    "channel": "IMPS",
    "time": "02:04",
    "branch": "Chennai"
  },
  {
    "id": "T224",
    "source": "A1116",
    "target": "A1107",
    "amount": 1303,
    "channel": "UPI",
    "time": "10:46",
    "branch": "Delhi"
  },
  {
    "id": "T225",
    "source": "A1192",
    "target": "A1023",
    "amount": 42246,
    "channel": "RTGS",
    "time": "21:47",
    "branch": "Bangalore"
  },
  {
    "id": "T226",
    "source": "A1143",
    "target": "A1090",
    "amount": 32933,
    "channel": "RTGS",
    "time": "14:43",
    "branch": "Mumbai"
  },
  {
    "id": "T227",
    "source": "A1030",
    "target": "A1109",
    "amount": 91914,
    "channel": "RTGS",
    "time": "03:18",
    "branch": "Kolkata"
  },
  {
    "id": "T228",
    "source": "A1193",
    "target": "A1094",
    "amount": 67992,
    "channel": "RTGS",
    "time": "19:17",
    "branch": "Kolkata"
  },
  {
    "id": "T229",
    "source": "A1117",
    "target": "A1131",
    "amount": 43187,
    "channel": "NEFT",
    "time": "16:30",
    "branch": "Kolkata"
  },
  {
    "id": "T230",
    "source": "A1146",
    "target": "A1145",
    "amount": 71632,
    "channel": "RTGS",
    "time": "04:33",
    "branch": "Chennai"
  },
  {
    "id": "T231",
    "source": "A1047",
    "target": "A1030",
    "amount": 29377,
    "channel": "ATM",
    "time": "21:01",
    "branch": "Mumbai"
  },
  {
    "id": "T232",
    "source": "A1104",
    "target": "A1164",
    "amount": 73912,
    "channel": "RTGS",
    "time": "18:30",
    "branch": "Delhi"
  },
  {
    "id": "T233",
    "source": "A1067",
    "target": "A1006",
    "amount": 32582,
    "channel": "UPI",
    "time": "11:24",
    "branch": "Bangalore"
  },
  {
    "id": "T234",
    "source": "A1019",
    "target": "A1011",
    "amount": 59710,
    "channel": "ATM",
    "time": "01:02",
    "branch": "Delhi"
  },
  {
    "id": "T235",
    "source": "A1137",
    "target": "A1032",
    "amount": 52793,
    "channel": "IMPS",
    "time": "21:32",
    "branch": "Mumbai"
  },
  {
    "id": "T236",
    "source": "A1002",
    "target": "A1162",
    "amount": 22032,
    "channel": "NEFT",
    "time": "19:47",
    "branch": "Bangalore"
  },
  {
    "id": "T237",
    "source": "A1042",
    "target": "A1074",
    "amount": 44724,
    "channel": "IMPS",
    "time": "03:07",
    "branch": "Delhi"
  },
  {
    "id": "T238",
    "source": "A1132",
    "target": "A1099",
    "amount": 89128,
    "channel": "IMPS",
    "time": "00:15",
    "branch": "Mumbai"
  },
  {
    "id": "T239",
    "source": "A1015",
    "target": "A1066",
    "amount": 17926,
    "channel": "UPI",
    "time": "18:27",
    "branch": "Kolkata"
  },
  {
    "id": "T240",
    "source": "A1031",
    "target": "A1091",
    "amount": 23096,
    "channel": "UPI",
    "time": "12:58",
    "branch": "Kolkata"
  },
  {
    "id": "T241",
    "source": "A1139",
    "target": "A1164",
    "amount": 82769,
    "channel": "UPI",
    "time": "17:47",
    "branch": "Delhi"
  },
  {
    "id": "T242",
    "source": "A1167",
    "target": "A1094",
    "amount": 80302,
    "channel": "NEFT",
    "time": "14:56",
    "branch": "Delhi"
  },
  {
    "id": "T243",
    "source": "A1159",
    "target": "A1164",
    "amount": 75629,
    "channel": "IMPS",
    "time": "05:37",
    "branch": "Kolkata"
  },
  {
    "id": "T244",
    "source": "A1133",
    "target": "A1171",
    "amount": 80551,
    "channel": "UPI",
    "time": "16:04",
    "branch": "Chennai"
  },
  {
    "id": "T245",
    "source": "A1085",
    "target": "A1184",
    "amount": 42284,
    "channel": "UPI",
    "time": "00:49",
    "branch": "Kolkata"
  },
  {
    "id": "T246",
    "source": "A1005",
    "target": "A1183",
    "amount": 53644,
    "channel": "RTGS",
    "time": "11:37",
    "branch": "Chennai"
  },
  {
    "id": "T247",
    "source": "A1126",
    "target": "A1114",
    "amount": 2899,
    "channel": "NEFT",
    "time": "05:38",
    "branch": "Bangalore"
  },
  {
    "id": "T248",
    "source": "A1157",
    "target": "A1040",
    "amount": 51765,
    "channel": "RTGS",
    "time": "08:32",
    "branch": "Delhi"
  },
  {
    "id": "T249",
    "source": "A1197",
    "target": "A1065",
    "amount": 10841,
    "channel": "RTGS",
    "time": "07:17",
    "branch": "Chennai"
  },
  {
    "id": "T250",
    "source": "A1118",
    "target": "A1111",
    "amount": 64548,
    "channel": "ATM",
    "time": "18:08",
    "branch": "Delhi"
  },
  {
    "id": "T251",
    "source": "A1125",
    "target": "A1022",
    "amount": 80874,
    "channel": "NEFT",
    "time": "09:37",
    "branch": "Kolkata"
  },
  {
    "id": "T252",
    "source": "A1077",
    "target": "A1051",
    "amount": 82401,
    "channel": "ATM",
    "time": "22:13",
    "branch": "Chennai"
  },
  {
    "id": "T253",
    "source": "A1118",
    "target": "A1063",
    "amount": 89445,
    "channel": "RTGS",
    "time": "21:17",
    "branch": "Bangalore"
  },
  {
    "id": "T254",
    "source": "A1026",
    "target": "A1118",
    "amount": 27648,
    "channel": "RTGS",
    "time": "08:52",
    "branch": "Kolkata"
  },
  {
    "id": "T255",
    "source": "A1078",
    "target": "A1068",
    "amount": 54950,
    "channel": "RTGS",
    "time": "12:30",
    "branch": "Delhi"
  },
  {
    "id": "T256",
    "source": "A1115",
    "target": "A1056",
    "amount": 44550,
    "channel": "IMPS",
    "time": "10:49",
    "branch": "Mumbai"
  },
  {
    "id": "T257",
    "source": "A1139",
    "target": "A1070",
    "amount": 71952,
    "channel": "ATM",
    "time": "22:36",
    "branch": "Kolkata"
  },
  {
    "id": "T258",
    "source": "A1180",
    "target": "A1147",
    "amount": 78690,
    "channel": "UPI",
    "time": "11:42",
    "branch": "Kolkata"
  },
  {
    "id": "T259",
    "source": "A1070",
    "target": "A1027",
    "amount": 84502,
    "channel": "IMPS",
    "time": "01:11",
    "branch": "Kolkata"
  },
  {
    "id": "T260",
    "source": "A1104",
    "target": "A1024",
    "amount": 44111,
    "channel": "NEFT",
    "time": "01:24",
    "branch": "Kolkata"
  },
  {
    "id": "T261",
    "source": "A1066",
    "target": "A1044",
    "amount": 52854,
    "channel": "ATM",
    "time": "11:29",
    "branch": "Delhi"
  },
  {
    "id": "T262",
    "source": "A1155",
    "target": "A1140",
    "amount": 37593,
    "channel": "IMPS",
    "time": "23:09",
    "branch": "Kolkata"
  },
  {
    "id": "T263",
    "source": "A1028",
    "target": "A1075",
    "amount": 53584,
    "channel": "UPI",
    "time": "00:36",
    "branch": "Bangalore"
  },
  {
    "id": "T264",
    "source": "A1016",
    "target": "A1076",
    "amount": 90286,
    "channel": "ATM",
    "time": "08:37",
    "branch": "Mumbai"
  },
  {
    "id": "T265",
    "source": "A1103",
    "target": "A1106",
    "amount": 62537,
    "channel": "NEFT",
    "time": "00:43",
    "branch": "Delhi"
  },
  {
    "id": "T266",
    "source": "A1155",
    "target": "A1119",
    "amount": 14687,
    "channel": "NEFT",
    "time": "14:41",
    "branch": "Mumbai"
  },
  {
    "id": "T267",
    "source": "A1145",
    "target": "A1052",
    "amount": 99672,
    "channel": "NEFT",
    "time": "23:48",
    "branch": "Bangalore"
  },
  {
    "id": "T268",
    "source": "A1084",
    "target": "A1059",
    "amount": 76677,
    "channel": "NEFT",
    "time": "20:41",
    "branch": "Mumbai"
  },
  {
    "id": "T269",
    "source": "A1122",
    "target": "A1061",
    "amount": 88997,
    "channel": "ATM",
    "time": "23:23",
    "branch": "Chennai"
  },
  {
    "id": "T270",
    "source": "A1146",
    "target": "A1137",
    "amount": 77444,
    "channel": "NEFT",
    "time": "21:42",
    "branch": "Bangalore"
  },
  {
    "id": "T271",
    "source": "A1152",
    "target": "A1015",
    "amount": 64439,
    "channel": "RTGS",
    "time": "17:42",
    "branch": "Bangalore"
  },
  {
    "id": "T272",
    "source": "A1048",
    "target": "A1025",
    "amount": 43387,
    "channel": "RTGS",
    "time": "21:44",
    "branch": "Kolkata"
  },
  {
    "id": "T273",
    "source": "A1072",
    "target": "A1184",
    "amount": 53940,
    "channel": "IMPS",
    "time": "09:29",
    "branch": "Kolkata"
  },
  {
    "id": "T274",
    "source": "A1159",
    "target": "A1187",
    "amount": 4345,
    "channel": "UPI",
    "time": "02:18",
    "branch": "Mumbai"
  },
  {
    "id": "T275",
    "source": "A1101",
    "target": "A1046",
    "amount": 24929,
    "channel": "ATM",
    "time": "18:42",
    "branch": "Delhi"
  },
  {
    "id": "T276",
    "source": "A1185",
    "target": "A1133",
    "amount": 49536,
    "channel": "ATM",
    "time": "22:54",
    "branch": "Chennai"
  },
  {
    "id": "T277",
    "source": "A1057",
    "target": "A1022",
    "amount": 84815,
    "channel": "UPI",
    "time": "00:51",
    "branch": "Kolkata"
  },
  {
    "id": "T278",
    "source": "A1196",
    "target": "A1130",
    "amount": 96709,
    "channel": "IMPS",
    "time": "10:03",
    "branch": "Bangalore"
  },
  {
    "id": "T279",
    "source": "A1020",
    "target": "A1164",
    "amount": 85603,
    "channel": "RTGS",
    "time": "02:30",
    "branch": "Delhi"
  },
  {
    "id": "T280",
    "source": "A1129",
    "target": "A1107",
    "amount": 15355,
    "channel": "IMPS",
    "time": "19:19",
    "branch": "Delhi"
  },
  {
    "id": "T281",
    "source": "A1065",
    "target": "A1127",
    "amount": 81441,
    "channel": "UPI",
    "time": "03:44",
    "branch": "Mumbai"
  },
  {
    "id": "T282",
    "source": "A1064",
    "target": "A1131",
    "amount": 81624,
    "channel": "ATM",
    "time": "19:13",
    "branch": "Kolkata"
  },
  {
    "id": "T283",
    "source": "A1075",
    "target": "A1018",
    "amount": 98769,
    "channel": "UPI",
    "time": "12:08",
    "branch": "Chennai"
  },
  {
    "id": "T284",
    "source": "A1152",
    "target": "A1048",
    "amount": 67249,
    "channel": "IMPS",
    "time": "05:18",
    "branch": "Mumbai"
  },
  {
    "id": "T285",
    "source": "A1036",
    "target": "A1074",
    "amount": 16713,
    "channel": "UPI",
    "time": "02:36",
    "branch": "Delhi"
  },
  {
    "id": "T286",
    "source": "A1072",
    "target": "A1166",
    "amount": 8503,
    "channel": "RTGS",
    "time": "11:54",
    "branch": "Bangalore"
  },
  {
    "id": "T287",
    "source": "A1066",
    "target": "A1112",
    "amount": 64904,
    "channel": "IMPS",
    "time": "16:11",
    "branch": "Bangalore"
  },
  {
    "id": "T288",
    "source": "A1093",
    "target": "A1108",
    "amount": 26307,
    "channel": "NEFT",
    "time": "20:47",
    "branch": "Mumbai"
  },
  {
    "id": "T289",
    "source": "A1163",
    "target": "A1195",
    "amount": 96099,
    "channel": "RTGS",
    "time": "07:14",
    "branch": "Chennai"
  },
  {
    "id": "T290",
    "source": "A1000",
    "target": "A1071",
    "amount": 33380,
    "channel": "NEFT",
    "time": "10:09",
    "branch": "Mumbai"
  },
  {
    "id": "T291",
    "source": "A1108",
    "target": "A1131",
    "amount": 25385,
    "channel": "IMPS",
    "time": "18:27",
    "branch": "Kolkata"
  },
  {
    "id": "T292",
    "source": "A1059",
    "target": "A1177",
    "amount": 98754,
    "channel": "RTGS",
    "time": "07:18",
    "branch": "Bangalore"
  },
  {
    "id": "T293",
    "source": "A1186",
    "target": "A1139",
    "amount": 83861,
    "channel": "ATM",
    "time": "09:36",
    "branch": "Bangalore"
  },
  {
    "id": "T294",
    "source": "A1012",
    "target": "A1071",
    "amount": 57781,
    "channel": "NEFT",
    "time": "20:27",
    "branch": "Chennai"
  },
  {
    "id": "T295",
    "source": "A1093",
    "target": "A1045",
    "amount": 58764,
    "channel": "RTGS",
    "time": "08:37",
    "branch": "Chennai"
  },
  {
    "id": "T296",
    "source": "A1077",
    "target": "A1023",
    "amount": 93820,
    "channel": "IMPS",
    "time": "19:49",
    "branch": "Delhi"
  },
  {
    "id": "T297",
    "source": "A1173",
    "target": "A1182",
    "amount": 56764,
    "channel": "UPI",
    "time": "19:17",
    "branch": "Bangalore"
  },
  {
    "id": "T298",
    "source": "A1047",
    "target": "A1065",
    "amount": 17970,
    "channel": "ATM",
    "time": "22:52",
    "branch": "Delhi"
  },
  {
    "id": "T299",
    "source": "A1049",
    "target": "A1156",
    "amount": 78012,
    "channel": "NEFT",
    "time": "00:57",
    "branch": "Chennai"
  },
  {
    "id": "T300",
    "source": "A1063",
    "target": "A1019",
    "amount": 20573,
    "channel": "IMPS",
    "time": "20:29",
    "branch": "Mumbai"
  },
  {
    "id": "T301",
    "source": "A1080",
    "target": "A1154",
    "amount": 9368,
    "channel": "NEFT",
    "time": "23:38",
    "branch": "Chennai"
  },
  {
    "id": "T302",
    "source": "A1024",
    "target": "A1036",
    "amount": 77566,
    "channel": "ATM",
    "time": "13:51",
    "branch": "Kolkata"
  },
  {
    "id": "T303",
    "source": "A1136",
    "target": "A1065",
    "amount": 77960,
    "channel": "NEFT",
    "time": "12:35",
    "branch": "Mumbai"
  },
  {
    "id": "T304",
    "source": "A1077",
    "target": "A1112",
    "amount": 76091,
    "channel": "RTGS",
    "time": "18:18",
    "branch": "Mumbai"
  },
  {
    "id": "T305",
    "source": "A1157",
    "target": "A1116",
    "amount": 20733,
    "channel": "ATM",
    "time": "08:21",
    "branch": "Mumbai"
  },
  {
    "id": "T306",
    "source": "A1027",
    "target": "A1004",
    "amount": 25719,
    "channel": "RTGS",
    "time": "23:33",
    "branch": "Delhi"
  },
  {
    "id": "T307",
    "source": "A1056",
    "target": "A1048",
    "amount": 56061,
    "channel": "NEFT",
    "time": "10:29",
    "branch": "Delhi"
  },
  {
    "id": "T308",
    "source": "A1067",
    "target": "A1145",
    "amount": 42086,
    "channel": "RTGS",
    "time": "03:22",
    "branch": "Chennai"
  },
  {
    "id": "T309",
    "source": "A1137",
    "target": "A1158",
    "amount": 95964,
    "channel": "RTGS",
    "time": "02:30",
    "branch": "Bangalore"
  },
  {
    "id": "T310",
    "source": "A1171",
    "target": "A1179",
    "amount": 75602,
    "channel": "NEFT",
    "time": "05:32",
    "branch": "Bangalore"
  },
  {
    "id": "T311",
    "source": "A1008",
    "target": "A1113",
    "amount": 7062,
    "channel": "IMPS",
    "time": "05:56",
    "branch": "Bangalore"
  },
  {
    "id": "T312",
    "source": "A1004",
    "target": "A1110",
    "amount": 40611,
    "channel": "IMPS",
    "time": "05:30",
    "branch": "Chennai"
  },
  {
    "id": "T313",
    "source": "A1059",
    "target": "A1066",
    "amount": 51508,
    "channel": "RTGS",
    "time": "14:12",
    "branch": "Mumbai"
  },
  {
    "id": "T314",
    "source": "A1047",
    "target": "A1041",
    "amount": 48528,
    "channel": "NEFT",
    "time": "22:22",
    "branch": "Kolkata"
  },
  {
    "id": "T315",
    "source": "A1154",
    "target": "A1150",
    "amount": 91747,
    "channel": "NEFT",
    "time": "08:50",
    "branch": "Kolkata"
  },
  {
    "id": "T316",
    "source": "A1165",
    "target": "A1145",
    "amount": 65494,
    "channel": "ATM",
    "time": "17:18",
    "branch": "Bangalore"
  },
  {
    "id": "T317",
    "source": "A1118",
    "target": "A1158",
    "amount": 37820,
    "channel": "ATM",
    "time": "05:27",
    "branch": "Delhi"
  },
  {
    "id": "T318",
    "source": "A1188",
    "target": "A1049",
    "amount": 21937,
    "channel": "NEFT",
    "time": "00:02",
    "branch": "Chennai"
  },
  {
    "id": "T319",
    "source": "A1108",
    "target": "A1189",
    "amount": 6715,
    "channel": "NEFT",
    "time": "20:41",
    "branch": "Bangalore"
  },
  {
    "id": "T320",
    "source": "A1014",
    "target": "A1000",
    "amount": 32793,
    "channel": "RTGS",
    "time": "19:42",
    "branch": "Delhi"
  },
  {
    "id": "T321",
    "source": "A1090",
    "target": "A1107",
    "amount": 86692,
    "channel": "ATM",
    "time": "23:24",
    "branch": "Delhi"
  },
  {
    "id": "T322",
    "source": "A1041",
    "target": "A1086",
    "amount": 77672,
    "channel": "UPI",
    "time": "02:45",
    "branch": "Mumbai"
  },
  {
    "id": "T323",
    "source": "A1194",
    "target": "A1016",
    "amount": 40525,
    "channel": "RTGS",
    "time": "18:30",
    "branch": "Delhi"
  },
  {
    "id": "T324",
    "source": "A1077",
    "target": "A1078",
    "amount": 91859,
    "channel": "NEFT",
    "time": "04:48",
    "branch": "Delhi"
  },
  {
    "id": "T325",
    "source": "A1061",
    "target": "A1162",
    "amount": 71540,
    "channel": "ATM",
    "time": "09:34",
    "branch": "Kolkata"
  },
  {
    "id": "T326",
    "source": "A1115",
    "target": "A1048",
    "amount": 36815,
    "channel": "IMPS",
    "time": "06:50",
    "branch": "Chennai"
  },
  {
    "id": "T327",
    "source": "A1115",
    "target": "A1069",
    "amount": 64646,
    "channel": "UPI",
    "time": "21:06",
    "branch": "Kolkata"
  },
  {
    "id": "T328",
    "source": "A1065",
    "target": "A1181",
    "amount": 29993,
    "channel": "NEFT",
    "time": "18:34",
    "branch": "Mumbai"
  },
  {
    "id": "T329",
    "source": "A1129",
    "target": "A1180",
    "amount": 25945,
    "channel": "IMPS",
    "time": "17:04",
    "branch": "Mumbai"
  },
  {
    "id": "T330",
    "source": "A1183",
    "target": "A1021",
    "amount": 6293,
    "channel": "IMPS",
    "time": "03:33",
    "branch": "Chennai"
  },
  {
    "id": "T331",
    "source": "A1192",
    "target": "A1104",
    "amount": 71981,
    "channel": "RTGS",
    "time": "16:44",
    "branch": "Chennai"
  },
  {
    "id": "T332",
    "source": "A1103",
    "target": "A1174",
    "amount": 58786,
    "channel": "NEFT",
    "time": "21:35",
    "branch": "Mumbai"
  },
  {
    "id": "T333",
    "source": "A1071",
    "target": "A1033",
    "amount": 79076,
    "channel": "IMPS",
    "time": "07:20",
    "branch": "Kolkata"
  },
  {
    "id": "T334",
    "source": "A1158",
    "target": "A1124",
    "amount": 70461,
    "channel": "ATM",
    "time": "07:10",
    "branch": "Mumbai"
  },
  {
    "id": "T335",
    "source": "A1052",
    "target": "A1031",
    "amount": 71535,
    "channel": "ATM",
    "time": "19:47",
    "branch": "Bangalore"
  },
  {
    "id": "T336",
    "source": "A1097",
    "target": "A1122",
    "amount": 99273,
    "channel": "IMPS",
    "time": "04:59",
    "branch": "Bangalore"
  },
  {
    "id": "T337",
    "source": "A1059",
    "target": "A1171",
    "amount": 94492,
    "channel": "RTGS",
    "time": "01:02",
    "branch": "Bangalore"
  },
  {
    "id": "T338",
    "source": "A1185",
    "target": "A1023",
    "amount": 22570,
    "channel": "RTGS",
    "time": "09:48",
    "branch": "Mumbai"
  },
  {
    "id": "T339",
    "source": "A1125",
    "target": "A1019",
    "amount": 26738,
    "channel": "IMPS",
    "time": "16:57",
    "branch": "Chennai"
  },
  {
    "id": "T340",
    "source": "A1159",
    "target": "A1081",
    "amount": 4211,
    "channel": "ATM",
    "time": "01:55",
    "branch": "Kolkata"
  },
  {
    "id": "T341",
    "source": "A1070",
    "target": "A1169",
    "amount": 77450,
    "channel": "ATM",
    "time": "16:33",
    "branch": "Kolkata"
  },
  {
    "id": "T342",
    "source": "A1146",
    "target": "A1025",
    "amount": 85885,
    "channel": "IMPS",
    "time": "18:03",
    "branch": "Bangalore"
  },
  {
    "id": "T343",
    "source": "A1190",
    "target": "A1025",
    "amount": 69723,
    "channel": "UPI",
    "time": "05:27",
    "branch": "Chennai"
  },
  {
    "id": "T344",
    "source": "A1062",
    "target": "A1081",
    "amount": 2735,
    "channel": "NEFT",
    "time": "18:33",
    "branch": "Kolkata"
  },
  {
    "id": "T345",
    "source": "A1154",
    "target": "A1099",
    "amount": 74352,
    "channel": "RTGS",
    "time": "12:35",
    "branch": "Mumbai"
  },
  {
    "id": "T346",
    "source": "A1008",
    "target": "A1024",
    "amount": 32886,
    "channel": "ATM",
    "time": "04:36",
    "branch": "Chennai"
  },
  {
    "id": "T347",
    "source": "A1092",
    "target": "A1154",
    "amount": 35015,
    "channel": "ATM",
    "time": "11:56",
    "branch": "Kolkata"
  },
  {
    "id": "T348",
    "source": "A1173",
    "target": "A1039",
    "amount": 61374,
    "channel": "UPI",
    "time": "14:31",
    "branch": "Bangalore"
  },
  {
    "id": "T349",
    "source": "A1097",
    "target": "A1042",
    "amount": 44726,
    "channel": "UPI",
    "time": "00:18",
    "branch": "Delhi"
  },
  {
    "id": "T350",
    "source": "A1119",
    "target": "A1179",
    "amount": 44765,
    "channel": "NEFT",
    "time": "09:36",
    "branch": "Mumbai"
  },
  {
    "id": "T351",
    "source": "A1039",
    "target": "A1163",
    "amount": 2688,
    "channel": "ATM",
    "time": "18:51",
    "branch": "Kolkata"
  },
  {
    "id": "T352",
    "source": "A1078",
    "target": "A1195",
    "amount": 70808,
    "channel": "RTGS",
    "time": "09:12",
    "branch": "Kolkata"
  },
  {
    "id": "T353",
    "source": "A1149",
    "target": "A1185",
    "amount": 58910,
    "channel": "UPI",
    "time": "18:55",
    "branch": "Bangalore"
  },
  {
    "id": "T354",
    "source": "A1199",
    "target": "A1130",
    "amount": 13468,
    "channel": "UPI",
    "time": "11:37",
    "branch": "Chennai"
  },
  {
    "id": "T355",
    "source": "A1031",
    "target": "A1082",
    "amount": 22161,
    "channel": "IMPS",
    "time": "00:22",
    "branch": "Mumbai"
  },
  {
    "id": "T356",
    "source": "A1113",
    "target": "A1076",
    "amount": 68065,
    "channel": "NEFT",
    "time": "18:43",
    "branch": "Delhi"
  },
  {
    "id": "T357",
    "source": "A1100",
    "target": "A1032",
    "amount": 21588,
    "channel": "ATM",
    "time": "06:55",
    "branch": "Delhi"
  },
  {
    "id": "T358",
    "source": "A1092",
    "target": "A1114",
    "amount": 49377,
    "channel": "NEFT",
    "time": "00:26",
    "branch": "Mumbai"
  },
  {
    "id": "T359",
    "source": "A1076",
    "target": "A1113",
    "amount": 62844,
    "channel": "RTGS",
    "time": "14:12",
    "branch": "Kolkata"
  },
  {
    "id": "T360",
    "source": "A1128",
    "target": "A1150",
    "amount": 66106,
    "channel": "RTGS",
    "time": "16:36",
    "branch": "Bangalore"
  },
  {
    "id": "T361",
    "source": "A1037",
    "target": "A1109",
    "amount": 49605,
    "channel": "RTGS",
    "time": "07:18",
    "branch": "Bangalore"
  },
  {
    "id": "T362",
    "source": "A1004",
    "target": "A1178",
    "amount": 89313,
    "channel": "ATM",
    "time": "10:05",
    "branch": "Kolkata"
  },
  {
    "id": "T363",
    "source": "A1034",
    "target": "A1110",
    "amount": 20356,
    "channel": "UPI",
    "time": "00:07",
    "branch": "Delhi"
  },
  {
    "id": "T364",
    "source": "A1093",
    "target": "A1016",
    "amount": 53811,
    "channel": "UPI",
    "time": "13:00",
    "branch": "Chennai"
  },
  {
    "id": "T365",
    "source": "A1116",
    "target": "A1165",
    "amount": 43507,
    "channel": "UPI",
    "time": "15:55",
    "branch": "Bangalore"
  },
  {
    "id": "T366",
    "source": "A1181",
    "target": "A1137",
    "amount": 42157,
    "channel": "UPI",
    "time": "13:25",
    "branch": "Chennai"
  },
  {
    "id": "T367",
    "source": "A1158",
    "target": "A1125",
    "amount": 41633,
    "channel": "ATM",
    "time": "05:18",
    "branch": "Delhi"
  },
  {
    "id": "T368",
    "source": "A1037",
    "target": "A1188",
    "amount": 81699,
    "channel": "ATM",
    "time": "04:13",
    "branch": "Chennai"
  },
  {
    "id": "T369",
    "source": "A1171",
    "target": "A1089",
    "amount": 67954,
    "channel": "UPI",
    "time": "07:41",
    "branch": "Kolkata"
  },
  {
    "id": "T370",
    "source": "A1085",
    "target": "A1029",
    "amount": 58190,
    "channel": "NEFT",
    "time": "18:15",
    "branch": "Bangalore"
  },
  {
    "id": "T371",
    "source": "A1163",
    "target": "A1194",
    "amount": 50443,
    "channel": "NEFT",
    "time": "22:13",
    "branch": "Kolkata"
  },
  {
    "id": "T372",
    "source": "A1033",
    "target": "A1127",
    "amount": 51344,
    "channel": "IMPS",
    "time": "13:38",
    "branch": "Bangalore"
  },
  {
    "id": "T373",
    "source": "A1169",
    "target": "A1044",
    "amount": 47865,
    "channel": "RTGS",
    "time": "15:15",
    "branch": "Kolkata"
  },
  {
    "id": "T374",
    "source": "A1082",
    "target": "A1154",
    "amount": 15384,
    "channel": "UPI",
    "time": "02:30",
    "branch": "Mumbai"
  },
  {
    "id": "T375",
    "source": "A1056",
    "target": "A1174",
    "amount": 49124,
    "channel": "IMPS",
    "time": "21:35",
    "branch": "Chennai"
  },
  {
    "id": "T376",
    "source": "A1116",
    "target": "A1047",
    "amount": 24705,
    "channel": "RTGS",
    "time": "15:34",
    "branch": "Mumbai"
  },
  {
    "id": "T377",
    "source": "A1047",
    "target": "A1133",
    "amount": 22952,
    "channel": "RTGS",
    "time": "04:05",
    "branch": "Bangalore"
  },
  {
    "id": "T378",
    "source": "A1028",
    "target": "A1083",
    "amount": 47687,
    "channel": "NEFT",
    "time": "17:00",
    "branch": "Kolkata"
  },
  {
    "id": "T379",
    "source": "A1082",
    "target": "A1100",
    "amount": 55538,
    "channel": "IMPS",
    "time": "15:47",
    "branch": "Bangalore"
  },
  {
    "id": "T380",
    "source": "A1100",
    "target": "A1156",
    "amount": 23128,
    "channel": "RTGS",
    "time": "14:01",
    "branch": "Delhi"
  },
  {
    "id": "T381",
    "source": "A1179",
    "target": "A1135",
    "amount": 49821,
    "channel": "RTGS",
    "time": "09:16",
    "branch": "Kolkata"
  },
  {
    "id": "T382",
    "source": "A1020",
    "target": "A1138",
    "amount": 16054,
    "channel": "RTGS",
    "time": "14:02",
    "branch": "Bangalore"
  },
  {
    "id": "T383",
    "source": "A1021",
    "target": "A1160",
    "amount": 18425,
    "channel": "IMPS",
    "time": "05:36",
    "branch": "Bangalore"
  },
  {
    "id": "T384",
    "source": "A1053",
    "target": "A1067",
    "amount": 2555,
    "channel": "RTGS",
    "time": "01:16",
    "branch": "Kolkata"
  },
  {
    "id": "T385",
    "source": "A1013",
    "target": "A1160",
    "amount": 87014,
    "channel": "IMPS",
    "time": "06:03",
    "branch": "Kolkata"
  },
  {
    "id": "T386",
    "source": "A1192",
    "target": "A1021",
    "amount": 29186,
    "channel": "ATM",
    "time": "07:38",
    "branch": "Mumbai"
  },
  {
    "id": "T387",
    "source": "A1126",
    "target": "A1035",
    "amount": 52603,
    "channel": "RTGS",
    "time": "11:29",
    "branch": "Chennai"
  },
  {
    "id": "T388",
    "source": "A1032",
    "target": "A1059",
    "amount": 79325,
    "channel": "NEFT",
    "time": "14:24",
    "branch": "Bangalore"
  },
  {
    "id": "T389",
    "source": "A1199",
    "target": "A1079",
    "amount": 53387,
    "channel": "NEFT",
    "time": "10:23",
    "branch": "Chennai"
  },
  {
    "id": "T390",
    "source": "A1093",
    "target": "A1175",
    "amount": 41429,
    "channel": "RTGS",
    "time": "02:19",
    "branch": "Kolkata"
  },
  {
    "id": "T391",
    "source": "A1022",
    "target": "A1142",
    "amount": 13210,
    "channel": "UPI",
    "time": "03:57",
    "branch": "Bangalore"
  },
  {
    "id": "T392",
    "source": "A1148",
    "target": "A1056",
    "amount": 18905,
    "channel": "RTGS",
    "time": "13:12",
    "branch": "Delhi"
  },
  {
    "id": "T393",
    "source": "A1167",
    "target": "A1070",
    "amount": 29108,
    "channel": "NEFT",
    "time": "19:34",
    "branch": "Kolkata"
  },
  {
    "id": "T394",
    "source": "A1036",
    "target": "A1028",
    "amount": 63607,
    "channel": "ATM",
    "time": "16:33",
    "branch": "Mumbai"
  },
  {
    "id": "T395",
    "source": "A1104",
    "target": "A1019",
    "amount": 28465,
    "channel": "NEFT",
    "time": "02:19",
    "branch": "Chennai"
  },
  {
    "id": "T396",
    "source": "A1102",
    "target": "A1018",
    "amount": 89052,
    "channel": "NEFT",
    "time": "18:51",
    "branch": "Mumbai"
  },
  {
    "id": "T397",
    "source": "A1029",
    "target": "A1173",
    "amount": 38883,
    "channel": "ATM",
    "time": "22:27",
    "branch": "Kolkata"
  },
  {
    "id": "T398",
    "source": "A1002",
    "target": "A1153",
    "amount": 51614,
    "channel": "IMPS",
    "time": "23:08",
    "branch": "Kolkata"
  },
  {
    "id": "T399",
    "source": "A1125",
    "target": "A1062",
    "amount": 6163,
    "channel": "ATM",
    "time": "11:19",
    "branch": "Chennai"
  },
  {
    "id": "T400",
    "source": "A1047",
    "target": "A1044",
    "amount": 20147,
    "channel": "RTGS",
    "time": "11:50",
    "branch": "Delhi"
  },
  {
    "id": "T401",
    "source": "A1033",
    "target": "A1109",
    "amount": 26245,
    "channel": "RTGS",
    "time": "17:09",
    "branch": "Bangalore"
  },
  {
    "id": "T402",
    "source": "A1038",
    "target": "A1186",
    "amount": 50814,
    "channel": "UPI",
    "time": "06:28",
    "branch": "Delhi"
  },
  {
    "id": "T403",
    "source": "A1001",
    "target": "A1136",
    "amount": 35038,
    "channel": "NEFT",
    "time": "06:01",
    "branch": "Bangalore"
  },
  {
    "id": "T404",
    "source": "A1126",
    "target": "A1022",
    "amount": 39406,
    "channel": "UPI",
    "time": "08:09",
    "branch": "Mumbai"
  },
  {
    "id": "T405",
    "source": "A1073",
    "target": "A1019",
    "amount": 20719,
    "channel": "ATM",
    "time": "15:19",
    "branch": "Bangalore"
  },
  {
    "id": "T406",
    "source": "A1130",
    "target": "A1069",
    "amount": 65703,
    "channel": "ATM",
    "time": "06:08",
    "branch": "Mumbai"
  },
  {
    "id": "T407",
    "source": "A1138",
    "target": "A1174",
    "amount": 89301,
    "channel": "RTGS",
    "time": "10:42",
    "branch": "Delhi"
  },
  {
    "id": "T408",
    "source": "A1015",
    "target": "A1145",
    "amount": 57081,
    "channel": "IMPS",
    "time": "21:25",
    "branch": "Kolkata"
  },
  {
    "id": "T409",
    "source": "A1088",
    "target": "A1002",
    "amount": 84868,
    "channel": "UPI",
    "time": "04:36",
    "branch": "Mumbai"
  },
  {
    "id": "T410",
    "source": "A1040",
    "target": "A1020",
    "amount": 94234,
    "channel": "UPI",
    "time": "11:53",
    "branch": "Chennai"
  },
  {
    "id": "T411",
    "source": "A1103",
    "target": "A1151",
    "amount": 63262,
    "channel": "RTGS",
    "time": "06:54",
    "branch": "Chennai"
  },
  {
    "id": "T412",
    "source": "A1186",
    "target": "A1015",
    "amount": 19372,
    "channel": "UPI",
    "time": "13:06",
    "branch": "Chennai"
  },
  {
    "id": "T413",
    "source": "A1100",
    "target": "A1054",
    "amount": 18721,
    "channel": "IMPS",
    "time": "05:07",
    "branch": "Delhi"
  },
  {
    "id": "T414",
    "source": "A1180",
    "target": "A1047",
    "amount": 2626,
    "channel": "NEFT",
    "time": "19:06",
    "branch": "Chennai"
  },
  {
    "id": "T415",
    "source": "A1024",
    "target": "A1093",
    "amount": 59816,
    "channel": "NEFT",
    "time": "20:42",
    "branch": "Delhi"
  },
  {
    "id": "T416",
    "source": "A1195",
    "target": "A1108",
    "amount": 16101,
    "channel": "RTGS",
    "time": "10:05",
    "branch": "Bangalore"
  },
  {
    "id": "T417",
    "source": "A1185",
    "target": "A1112",
    "amount": 13208,
    "channel": "UPI",
    "time": "02:27",
    "branch": "Bangalore"
  },
  {
    "id": "T418",
    "source": "A1155",
    "target": "A1031",
    "amount": 26799,
    "channel": "NEFT",
    "time": "08:51",
    "branch": "Mumbai"
  },
  {
    "id": "T419",
    "source": "A1053",
    "target": "A1000",
    "amount": 96344,
    "channel": "UPI",
    "time": "10:36",
    "branch": "Delhi"
  },
  {
    "id": "T420",
    "source": "A1054",
    "target": "A1050",
    "amount": 99419,
    "channel": "IMPS",
    "time": "12:25",
    "branch": "Bangalore"
  },
  {
    "id": "T421",
    "source": "A1194",
    "target": "A1109",
    "amount": 81770,
    "channel": "RTGS",
    "time": "11:19",
    "branch": "Kolkata"
  },
  {
    "id": "T422",
    "source": "A1164",
    "target": "A1161",
    "amount": 75417,
    "channel": "ATM",
    "time": "14:24",
    "branch": "Mumbai"
  },
  {
    "id": "T423",
    "source": "A1056",
    "target": "A1081",
    "amount": 44811,
    "channel": "UPI",
    "time": "19:46",
    "branch": "Bangalore"
  },
  {
    "id": "T424",
    "source": "A1008",
    "target": "A1085",
    "amount": 75813,
    "channel": "UPI",
    "time": "10:39",
    "branch": "Bangalore"
  },
  {
    "id": "T425",
    "source": "A1008",
    "target": "A1160",
    "amount": 88289,
    "channel": "RTGS",
    "time": "10:53",
    "branch": "Mumbai"
  },
  {
    "id": "T426",
    "source": "A1069",
    "target": "A1196",
    "amount": 11299,
    "channel": "IMPS",
    "time": "09:33",
    "branch": "Bangalore"
  },
  {
    "id": "T427",
    "source": "A1005",
    "target": "A1078",
    "amount": 19839,
    "channel": "IMPS",
    "time": "22:39",
    "branch": "Delhi"
  },
  {
    "id": "T428",
    "source": "A1008",
    "target": "A1127",
    "amount": 99117,
    "channel": "RTGS",
    "time": "07:53",
    "branch": "Kolkata"
  },
  {
    "id": "T429",
    "source": "A1134",
    "target": "A1027",
    "amount": 63815,
    "channel": "NEFT",
    "time": "03:11",
    "branch": "Kolkata"
  },
  {
    "id": "T430",
    "source": "A1055",
    "target": "A1133",
    "amount": 27587,
    "channel": "ATM",
    "time": "08:47",
    "branch": "Chennai"
  },
  {
    "id": "T431",
    "source": "A1131",
    "target": "A1022",
    "amount": 54325,
    "channel": "NEFT",
    "time": "17:07",
    "branch": "Kolkata"
  },
  {
    "id": "T432",
    "source": "A1188",
    "target": "A1197",
    "amount": 41630,
    "channel": "IMPS",
    "time": "16:36",
    "branch": "Delhi"
  },
  {
    "id": "T433",
    "source": "A1036",
    "target": "A1084",
    "amount": 77815,
    "channel": "IMPS",
    "time": "02:13",
    "branch": "Bangalore"
  },
  {
    "id": "T434",
    "source": "A1180",
    "target": "A1036",
    "amount": 61579,
    "channel": "ATM",
    "time": "10:21",
    "branch": "Bangalore"
  },
  {
    "id": "T435",
    "source": "A1028",
    "target": "A1079",
    "amount": 86659,
    "channel": "NEFT",
    "time": "23:33",
    "branch": "Delhi"
  },
  {
    "id": "T436",
    "source": "A1177",
    "target": "A1161",
    "amount": 78299,
    "channel": "NEFT",
    "time": "16:39",
    "branch": "Delhi"
  },
  {
    "id": "T437",
    "source": "A1003",
    "target": "A1107",
    "amount": 57806,
    "channel": "IMPS",
    "time": "14:01",
    "branch": "Bangalore"
  },
  {
    "id": "T438",
    "source": "A1111",
    "target": "A1128",
    "amount": 67691,
    "channel": "UPI",
    "time": "19:17",
    "branch": "Bangalore"
  },
  {
    "id": "T439",
    "source": "A1024",
    "target": "A1130",
    "amount": 21100,
    "channel": "RTGS",
    "time": "17:03",
    "branch": "Chennai"
  },
  {
    "id": "T440",
    "source": "A1001",
    "target": "A1135",
    "amount": 21675,
    "channel": "IMPS",
    "time": "09:28",
    "branch": "Kolkata"
  },
  {
    "id": "T441",
    "source": "A1192",
    "target": "A1133",
    "amount": 91129,
    "channel": "UPI",
    "time": "21:59",
    "branch": "Bangalore"
  },
  {
    "id": "T442",
    "source": "A1161",
    "target": "A1192",
    "amount": 87483,
    "channel": "UPI",
    "time": "10:15",
    "branch": "Bangalore"
  },
  {
    "id": "T443",
    "source": "A1134",
    "target": "A1045",
    "amount": 72666,
    "channel": "UPI",
    "time": "06:16",
    "branch": "Delhi"
  },
  {
    "id": "T444",
    "source": "A1002",
    "target": "A1019",
    "amount": 47838,
    "channel": "IMPS",
    "time": "02:31",
    "branch": "Mumbai"
  },
  {
    "id": "T445",
    "source": "A1028",
    "target": "A1112",
    "amount": 65556,
    "channel": "IMPS",
    "time": "20:36",
    "branch": "Delhi"
  },
  {
    "id": "T446",
    "source": "A1144",
    "target": "A1199",
    "amount": 25592,
    "channel": "IMPS",
    "time": "04:41",
    "branch": "Mumbai"
  },
  {
    "id": "T447",
    "source": "A1026",
    "target": "A1140",
    "amount": 97294,
    "channel": "UPI",
    "time": "19:03",
    "branch": "Chennai"
  },
  {
    "id": "T448",
    "source": "A1199",
    "target": "A1144",
    "amount": 72928,
    "channel": "NEFT",
    "time": "05:16",
    "branch": "Kolkata"
  },
  {
    "id": "T449",
    "source": "A1130",
    "target": "A1024",
    "amount": 43551,
    "channel": "RTGS",
    "time": "09:55",
    "branch": "Mumbai"
  },
  {
    "id": "T450",
    "source": "A1116",
    "target": "A1040",
    "amount": 56338,
    "channel": "ATM",
    "time": "17:19",
    "branch": "Kolkata"
  },
  {
    "id": "T451",
    "source": "A1154",
    "target": "A1162",
    "amount": 55534,
    "channel": "ATM",
    "time": "20:00",
    "branch": "Delhi"
  },
  {
    "id": "T452",
    "source": "A1037",
    "target": "A1122",
    "amount": 24248,
    "channel": "ATM",
    "time": "13:58",
    "branch": "Mumbai"
  },
  {
    "id": "T453",
    "source": "A1000",
    "target": "A1196",
    "amount": 20107,
    "channel": "ATM",
    "time": "22:47",
    "branch": "Mumbai"
  },
  {
    "id": "T454",
    "source": "A1124",
    "target": "A1055",
    "amount": 81522,
    "channel": "RTGS",
    "time": "08:09",
    "branch": "Delhi"
  },
  {
    "id": "T455",
    "source": "A1064",
    "target": "A1034",
    "amount": 60955,
    "channel": "NEFT",
    "time": "22:33",
    "branch": "Mumbai"
  },
  {
    "id": "T456",
    "source": "A1108",
    "target": "A1137",
    "amount": 52041,
    "channel": "ATM",
    "time": "15:34",
    "branch": "Bangalore"
  },
  {
    "id": "T457",
    "source": "A1028",
    "target": "A1140",
    "amount": 55910,
    "channel": "NEFT",
    "time": "05:48",
    "branch": "Bangalore"
  },
  {
    "id": "T458",
    "source": "A1143",
    "target": "A1019",
    "amount": 14095,
    "channel": "UPI",
    "time": "23:43",
    "branch": "Mumbai"
  },
  {
    "id": "T459",
    "source": "A1199",
    "target": "A1107",
    "amount": 22989,
    "channel": "NEFT",
    "time": "06:36",
    "branch": "Bangalore"
  },
  {
    "id": "T460",
    "source": "A1158",
    "target": "A1092",
    "amount": 80055,
    "channel": "IMPS",
    "time": "13:37",
    "branch": "Delhi"
  },
  {
    "id": "T461",
    "source": "A1070",
    "target": "A1132",
    "amount": 94126,
    "channel": "NEFT",
    "time": "08:20",
    "branch": "Kolkata"
  },
  {
    "id": "T462",
    "source": "A1014",
    "target": "A1146",
    "amount": 3616,
    "channel": "RTGS",
    "time": "00:45",
    "branch": "Kolkata"
  },
  {
    "id": "T463",
    "source": "A1077",
    "target": "A1183",
    "amount": 77487,
    "channel": "ATM",
    "time": "11:13",
    "branch": "Chennai"
  },
  {
    "id": "T464",
    "source": "A1043",
    "target": "A1006",
    "amount": 44571,
    "channel": "ATM",
    "time": "22:23",
    "branch": "Delhi"
  },
  {
    "id": "T465",
    "source": "A1178",
    "target": "A1187",
    "amount": 64026,
    "channel": "ATM",
    "time": "17:11",
    "branch": "Chennai"
  },
  {
    "id": "T466",
    "source": "A1060",
    "target": "A1026",
    "amount": 64998,
    "channel": "NEFT",
    "time": "00:51",
    "branch": "Kolkata"
  },
  {
    "id": "T467",
    "source": "A1109",
    "target": "A1072",
    "amount": 14303,
    "channel": "NEFT",
    "time": "07:00",
    "branch": "Chennai"
  },
  {
    "id": "T468",
    "source": "A1124",
    "target": "A1088",
    "amount": 46739,
    "channel": "RTGS",
    "time": "18:19",
    "branch": "Delhi"
  },
  {
    "id": "T469",
    "source": "A1034",
    "target": "A1056",
    "amount": 82421,
    "channel": "UPI",
    "time": "23:59",
    "branch": "Delhi"
  },
  {
    "id": "T470",
    "source": "A1118",
    "target": "A1006",
    "amount": 39372,
    "channel": "RTGS",
    "time": "16:45",
    "branch": "Chennai"
  },
  {
    "id": "T471",
    "source": "A1199",
    "target": "A1006",
    "amount": 70356,
    "channel": "IMPS",
    "time": "04:59",
    "branch": "Kolkata"
  },
  {
    "id": "T472",
    "source": "A1174",
    "target": "A1114",
    "amount": 3725,
    "channel": "NEFT",
    "time": "05:35",
    "branch": "Mumbai"
  },
  {
    "id": "T473",
    "source": "A1077",
    "target": "A1034",
    "amount": 65276,
    "channel": "NEFT",
    "time": "04:55",
    "branch": "Bangalore"
  },
  {
    "id": "T474",
    "source": "A1178",
    "target": "A1126",
    "amount": 81528,
    "channel": "UPI",
    "time": "13:48",
    "branch": "Chennai"
  },
  {
    "id": "T475",
    "source": "A1177",
    "target": "A1175",
    "amount": 81508,
    "channel": "ATM",
    "time": "07:12",
    "branch": "Kolkata"
  },
  {
    "id": "T476",
    "source": "A1135",
    "target": "A1182",
    "amount": 54165,
    "channel": "IMPS",
    "time": "22:02",
    "branch": "Bangalore"
  },
  {
    "id": "T477",
    "source": "A1047",
    "target": "A1026",
    "amount": 59824,
    "channel": "RTGS",
    "time": "01:27",
    "branch": "Bangalore"
  },
  {
    "id": "T478",
    "source": "A1121",
    "target": "A1125",
    "amount": 11514,
    "channel": "NEFT",
    "time": "17:47",
    "branch": "Delhi"
  },
  {
    "id": "T479",
    "source": "A1158",
    "target": "A1035",
    "amount": 33923,
    "channel": "RTGS",
    "time": "05:17",
    "branch": "Bangalore"
  },
  {
    "id": "T480",
    "source": "A1023",
    "target": "A1066",
    "amount": 42157,
    "channel": "IMPS",
    "time": "15:55",
    "branch": "Mumbai"
  },
  {
    "id": "T481",
    "source": "A1005",
    "target": "A1012",
    "amount": 36173,
    "channel": "UPI",
    "time": "02:44",
    "branch": "Delhi"
  },
  {
    "id": "T482",
    "source": "A1098",
    "target": "A1103",
    "amount": 53500,
    "channel": "UPI",
    "time": "12:08",
    "branch": "Kolkata"
  },
  {
    "id": "T483",
    "source": "A1090",
    "target": "A1021",
    "amount": 94299,
    "channel": "ATM",
    "time": "21:53",
    "branch": "Delhi"
  },
  {
    "id": "T484",
    "source": "A1169",
    "target": "A1051",
    "amount": 67779,
    "channel": "ATM",
    "time": "14:40",
    "branch": "Delhi"
  },
  {
    "id": "T485",
    "source": "A1194",
    "target": "A1161",
    "amount": 25341,
    "channel": "RTGS",
    "time": "04:31",
    "branch": "Delhi"
  },
  {
    "id": "T486",
    "source": "A1062",
    "target": "A1157",
    "amount": 66415,
    "channel": "ATM",
    "time": "05:30",
    "branch": "Mumbai"
  },
  {
    "id": "T487",
    "source": "A1192",
    "target": "A1108",
    "amount": 43738,
    "channel": "UPI",
    "time": "10:34",
    "branch": "Chennai"
  },
  {
    "id": "T488",
    "source": "A1059",
    "target": "A1084",
    "amount": 45639,
    "channel": "IMPS",
    "time": "23:07",
    "branch": "Bangalore"
  },
  {
    "id": "T489",
    "source": "A1117",
    "target": "A1118",
    "amount": 32560,
    "channel": "NEFT",
    "time": "20:58",
    "branch": "Mumbai"
  },
  {
    "id": "T490",
    "source": "A1189",
    "target": "A1134",
    "amount": 4678,
    "channel": "IMPS",
    "time": "08:44",
    "branch": "Bangalore"
  },
  {
    "id": "T491",
    "source": "A1018",
    "target": "A1121",
    "amount": 760,
    "channel": "ATM",
    "time": "17:16",
    "branch": "Bangalore"
  },
  {
    "id": "T492",
    "source": "A1146",
    "target": "A1060",
    "amount": 54810,
    "channel": "ATM",
    "time": "19:45",
    "branch": "Delhi"
  },
  {
    "id": "T493",
    "source": "A1137",
    "target": "A1188",
    "amount": 79241,
    "channel": "RTGS",
    "time": "02:36",
    "branch": "Kolkata"
  },
  {
    "id": "T494",
    "source": "A1088",
    "target": "A1072",
    "amount": 17634,
    "channel": "ATM",
    "time": "00:03",
    "branch": "Delhi"
  },
  {
    "id": "T495",
    "source": "A1136",
    "target": "A1179",
    "amount": 46184,
    "channel": "ATM",
    "time": "08:42",
    "branch": "Bangalore"
  },
  {
    "id": "T496",
    "source": "A1155",
    "target": "A1158",
    "amount": 58727,
    "channel": "UPI",
    "time": "22:17",
    "branch": "Kolkata"
  },
  {
    "id": "T497",
    "source": "A1185",
    "target": "A1006",
    "amount": 1867,
    "channel": "RTGS",
    "time": "05:34",
    "branch": "Mumbai"
  },
  {
    "id": "T498",
    "source": "A1118",
    "target": "A1080",
    "amount": 96930,
    "channel": "IMPS",
    "time": "10:46",
    "branch": "Delhi"
  },
  {
    "id": "T499",
    "source": "A1041",
    "target": "A1088",
    "amount": 36667,
    "channel": "IMPS",
    "time": "05:24",
    "branch": "Delhi"
  },
  {
    "id": "T500",
    "source": "A1095",
    "target": "A1173",
    "amount": 38368,
    "channel": "ATM",
    "time": "09:08",
    "branch": "Chennai"
  },
  {
    "id": "T501",
    "source": "A1065",
    "target": "A1022",
    "amount": 7237,
    "channel": "UPI",
    "time": "12:02",
    "branch": "Chennai"
  },
  {
    "id": "T502",
    "source": "A1067",
    "target": "A1092",
    "amount": 48360,
    "channel": "ATM",
    "time": "03:00",
    "branch": "Bangalore"
  },
  {
    "id": "T503",
    "source": "A1123",
    "target": "A1056",
    "amount": 92583,
    "channel": "ATM",
    "time": "07:17",
    "branch": "Bangalore"
  },
  {
    "id": "T504",
    "source": "A1062",
    "target": "A1095",
    "amount": 81191,
    "channel": "ATM",
    "time": "22:38",
    "branch": "Bangalore"
  },
  {
    "id": "T505",
    "source": "A1158",
    "target": "A1025",
    "amount": 92917,
    "channel": "NEFT",
    "time": "23:00",
    "branch": "Chennai"
  },
  {
    "id": "T506",
    "source": "A1019",
    "target": "A1024",
    "amount": 6061,
    "channel": "IMPS",
    "time": "19:01",
    "branch": "Kolkata"
  },
  {
    "id": "T507",
    "source": "A1037",
    "target": "A1101",
    "amount": 58056,
    "channel": "UPI",
    "time": "07:39",
    "branch": "Bangalore"
  },
  {
    "id": "T508",
    "source": "A1086",
    "target": "A1126",
    "amount": 33624,
    "channel": "ATM",
    "time": "08:25",
    "branch": "Chennai"
  },
  {
    "id": "T509",
    "source": "A1135",
    "target": "A1174",
    "amount": 15041,
    "channel": "ATM",
    "time": "09:37",
    "branch": "Kolkata"
  },
  {
    "id": "T510",
    "source": "A1120",
    "target": "A1122",
    "amount": 525,
    "channel": "NEFT",
    "time": "14:09",
    "branch": "Bangalore"
  },
  {
    "id": "T511",
    "source": "A1049",
    "target": "A1016",
    "amount": 93105,
    "channel": "UPI",
    "time": "04:59",
    "branch": "Kolkata"
  },
  {
    "id": "T512",
    "source": "A1091",
    "target": "A1155",
    "amount": 84840,
    "channel": "RTGS",
    "time": "09:05",
    "branch": "Bangalore"
  },
  {
    "id": "T513",
    "source": "A1145",
    "target": "A1015",
    "amount": 71418,
    "channel": "ATM",
    "time": "07:55",
    "branch": "Mumbai"
  },
  {
    "id": "T514",
    "source": "A1036",
    "target": "A1135",
    "amount": 46040,
    "channel": "UPI",
    "time": "05:26",
    "branch": "Chennai"
  },
  {
    "id": "T515",
    "source": "A1103",
    "target": "A1049",
    "amount": 69478,
    "channel": "RTGS",
    "time": "21:46",
    "branch": "Mumbai"
  },
  {
    "id": "T516",
    "source": "A1191",
    "target": "A1133",
    "amount": 88343,
    "channel": "RTGS",
    "time": "07:42",
    "branch": "Kolkata"
  },
  {
    "id": "T517",
    "source": "A1154",
    "target": "A1180",
    "amount": 93898,
    "channel": "ATM",
    "time": "12:40",
    "branch": "Bangalore"
  },
  {
    "id": "T518",
    "source": "A1068",
    "target": "A1024",
    "amount": 45792,
    "channel": "RTGS",
    "time": "15:57",
    "branch": "Chennai"
  },
  {
    "id": "T519",
    "source": "A1097",
    "target": "A1125",
    "amount": 75194,
    "channel": "NEFT",
    "time": "18:12",
    "branch": "Kolkata"
  },
  {
    "id": "T520",
    "source": "A1138",
    "target": "A1145",
    "amount": 84986,
    "channel": "NEFT",
    "time": "10:35",
    "branch": "Delhi"
  },
  {
    "id": "T521",
    "source": "A1036",
    "target": "A1156",
    "amount": 68733,
    "channel": "RTGS",
    "time": "00:21",
    "branch": "Bangalore"
  },
  {
    "id": "T522",
    "source": "A1114",
    "target": "A1092",
    "amount": 15809,
    "channel": "ATM",
    "time": "05:10",
    "branch": "Mumbai"
  },
  {
    "id": "T523",
    "source": "A1087",
    "target": "A1118",
    "amount": 91851,
    "channel": "UPI",
    "time": "18:56",
    "branch": "Kolkata"
  },
  {
    "id": "T524",
    "source": "A1195",
    "target": "A1189",
    "amount": 70074,
    "channel": "RTGS",
    "time": "05:44",
    "branch": "Kolkata"
  },
  {
    "id": "T525",
    "source": "A1053",
    "target": "A1072",
    "amount": 26673,
    "channel": "UPI",
    "time": "17:44",
    "branch": "Mumbai"
  },
  {
    "id": "T526",
    "source": "A1002",
    "target": "A1088",
    "amount": 36269,
    "channel": "NEFT",
    "time": "09:30",
    "branch": "Chennai"
  },
  {
    "id": "T527",
    "source": "A1111",
    "target": "A1128",
    "amount": 27609,
    "channel": "IMPS",
    "time": "05:29",
    "branch": "Kolkata"
  },
  {
    "id": "T528",
    "source": "A1089",
    "target": "A1053",
    "amount": 22859,
    "channel": "UPI",
    "time": "13:23",
    "branch": "Delhi"
  },
  {
    "id": "T529",
    "source": "A1079",
    "target": "A1017",
    "amount": 96380,
    "channel": "NEFT",
    "time": "09:41",
    "branch": "Kolkata"
  },
  {
    "id": "T530",
    "source": "A1083",
    "target": "A1126",
    "amount": 54013,
    "channel": "UPI",
    "time": "20:41",
    "branch": "Bangalore"
  },
  {
    "id": "T531",
    "source": "A1153",
    "target": "A1077",
    "amount": 98146,
    "channel": "UPI",
    "time": "01:46",
    "branch": "Kolkata"
  },
  {
    "id": "T532",
    "source": "A1197",
    "target": "A1104",
    "amount": 78411,
    "channel": "ATM",
    "time": "17:52",
    "branch": "Chennai"
  },
  {
    "id": "T533",
    "source": "A1168",
    "target": "A1125",
    "amount": 55976,
    "channel": "NEFT",
    "time": "22:42",
    "branch": "Kolkata"
  },
  {
    "id": "T534",
    "source": "A1048",
    "target": "A1092",
    "amount": 15158,
    "channel": "UPI",
    "time": "14:25",
    "branch": "Kolkata"
  },
  {
    "id": "T535",
    "source": "A1103",
    "target": "A1173",
    "amount": 44887,
    "channel": "NEFT",
    "time": "09:50",
    "branch": "Bangalore"
  },
  {
    "id": "T536",
    "source": "A1115",
    "target": "A1060",
    "amount": 93616,
    "channel": "IMPS",
    "time": "02:15",
    "branch": "Bangalore"
  },
  {
    "id": "T537",
    "source": "A1039",
    "target": "A1063",
    "amount": 99578,
    "channel": "IMPS",
    "time": "07:12",
    "branch": "Bangalore"
  },
  {
    "id": "T538",
    "source": "A1049",
    "target": "A1069",
    "amount": 53797,
    "channel": "ATM",
    "time": "10:03",
    "branch": "Delhi"
  },
  {
    "id": "T539",
    "source": "A1015",
    "target": "A1064",
    "amount": 71420,
    "channel": "UPI",
    "time": "05:27",
    "branch": "Bangalore"
  },
  {
    "id": "T540",
    "source": "A1138",
    "target": "A1132",
    "amount": 50440,
    "channel": "NEFT",
    "time": "16:51",
    "branch": "Delhi"
  },
  {
    "id": "T541",
    "source": "A1162",
    "target": "A1157",
    "amount": 30552,
    "channel": "UPI",
    "time": "05:07",
    "branch": "Mumbai"
  },
  {
    "id": "T542",
    "source": "A1111",
    "target": "A1033",
    "amount": 11928,
    "channel": "RTGS",
    "time": "14:36",
    "branch": "Chennai"
  },
  {
    "id": "T543",
    "source": "A1138",
    "target": "A1165",
    "amount": 51825,
    "channel": "UPI",
    "time": "09:51",
    "branch": "Kolkata"
  },
  {
    "id": "T544",
    "source": "A1128",
    "target": "A1065",
    "amount": 12454,
    "channel": "RTGS",
    "time": "17:06",
    "branch": "Mumbai"
  },
  {
    "id": "T545",
    "source": "A1053",
    "target": "A1001",
    "amount": 48261,
    "channel": "IMPS",
    "time": "21:09",
    "branch": "Delhi"
  },
  {
    "id": "T546",
    "source": "A1050",
    "target": "A1135",
    "amount": 66153,
    "channel": "IMPS",
    "time": "08:46",
    "branch": "Chennai"
  },
  {
    "id": "T547",
    "source": "A1116",
    "target": "A1155",
    "amount": 35433,
    "channel": "ATM",
    "time": "09:27",
    "branch": "Mumbai"
  },
  {
    "id": "T548",
    "source": "A1046",
    "target": "A1149",
    "amount": 65195,
    "channel": "IMPS",
    "time": "14:53",
    "branch": "Bangalore"
  },
  {
    "id": "T549",
    "source": "A1004",
    "target": "A1031",
    "amount": 88689,
    "channel": "RTGS",
    "time": "00:13",
    "branch": "Mumbai"
  },
  {
    "id": "T550",
    "source": "A1064",
    "target": "A1137",
    "amount": 84308,
    "channel": "IMPS",
    "time": "07:52",
    "branch": "Mumbai"
  },
  {
    "id": "T551",
    "source": "A1132",
    "target": "A1181",
    "amount": 5586,
    "channel": "ATM",
    "time": "12:10",
    "branch": "Bangalore"
  },
  {
    "id": "T552",
    "source": "A1116",
    "target": "A1076",
    "amount": 57984,
    "channel": "RTGS",
    "time": "02:21",
    "branch": "Delhi"
  },
  {
    "id": "T553",
    "source": "A1042",
    "target": "A1114",
    "amount": 33182,
    "channel": "UPI",
    "time": "23:10",
    "branch": "Bangalore"
  },
  {
    "id": "T554",
    "source": "A1160",
    "target": "A1072",
    "amount": 5521,
    "channel": "IMPS",
    "time": "20:53",
    "branch": "Mumbai"
  },
  {
    "id": "T555",
    "source": "A1111",
    "target": "A1141",
    "amount": 51930,
    "channel": "IMPS",
    "time": "01:22",
    "branch": "Bangalore"
  },
  {
    "id": "T556",
    "source": "A1133",
    "target": "A1195",
    "amount": 75685,
    "channel": "RTGS",
    "time": "07:16",
    "branch": "Delhi"
  },
  {
    "id": "T557",
    "source": "A1069",
    "target": "A1132",
    "amount": 23301,
    "channel": "ATM",
    "time": "16:34",
    "branch": "Chennai"
  },
  {
    "id": "T558",
    "source": "A1173",
    "target": "A1145",
    "amount": 45975,
    "channel": "RTGS",
    "time": "05:54",
    "branch": "Mumbai"
  },
  {
    "id": "T559",
    "source": "A1168",
    "target": "A1055",
    "amount": 70934,
    "channel": "IMPS",
    "time": "03:16",
    "branch": "Chennai"
  },
  {
    "id": "T560",
    "source": "A1033",
    "target": "A1140",
    "amount": 34800,
    "channel": "RTGS",
    "time": "06:28",
    "branch": "Chennai"
  },
  {
    "id": "T561",
    "source": "A1148",
    "target": "A1184",
    "amount": 69490,
    "channel": "IMPS",
    "time": "01:11",
    "branch": "Mumbai"
  },
  {
    "id": "T562",
    "source": "A1069",
    "target": "A1097",
    "amount": 25592,
    "channel": "IMPS",
    "time": "18:31",
    "branch": "Mumbai"
  },
  {
    "id": "T563",
    "source": "A1050",
    "target": "A1181",
    "amount": 2593,
    "channel": "IMPS",
    "time": "09:48",
    "branch": "Chennai"
  },
  {
    "id": "T564",
    "source": "A1126",
    "target": "A1168",
    "amount": 4812,
    "channel": "NEFT",
    "time": "20:12",
    "branch": "Bangalore"
  },
  {
    "id": "T565",
    "source": "A1027",
    "target": "A1136",
    "amount": 69988,
    "channel": "IMPS",
    "time": "02:09",
    "branch": "Bangalore"
  },
  {
    "id": "T566",
    "source": "A1182",
    "target": "A1104",
    "amount": 89671,
    "channel": "IMPS",
    "time": "08:48",
    "branch": "Delhi"
  },
  {
    "id": "T567",
    "source": "A1115",
    "target": "A1120",
    "amount": 62681,
    "channel": "UPI",
    "time": "19:45",
    "branch": "Bangalore"
  },
  {
    "id": "T568",
    "source": "A1140",
    "target": "A1042",
    "amount": 11851,
    "channel": "ATM",
    "time": "00:05",
    "branch": "Delhi"
  },
  {
    "id": "T569",
    "source": "A1052",
    "target": "A1044",
    "amount": 89384,
    "channel": "IMPS",
    "time": "09:19",
    "branch": "Kolkata"
  },
  {
    "id": "T570",
    "source": "A1045",
    "target": "A1011",
    "amount": 58203,
    "channel": "NEFT",
    "time": "13:07",
    "branch": "Mumbai"
  },
  {
    "id": "T571",
    "source": "A1082",
    "target": "A1134",
    "amount": 72849,
    "channel": "NEFT",
    "time": "11:25",
    "branch": "Bangalore"
  },
  {
    "id": "T572",
    "source": "A1015",
    "target": "A1072",
    "amount": 21888,
    "channel": "UPI",
    "time": "07:22",
    "branch": "Bangalore"
  },
  {
    "id": "T573",
    "source": "A1182",
    "target": "A1030",
    "amount": 57539,
    "channel": "ATM",
    "time": "20:20",
    "branch": "Mumbai"
  },
  {
    "id": "T574",
    "source": "A1160",
    "target": "A1093",
    "amount": 11791,
    "channel": "ATM",
    "time": "16:50",
    "branch": "Kolkata"
  },
  {
    "id": "T575",
    "source": "A1180",
    "target": "A1147",
    "amount": 26099,
    "channel": "ATM",
    "time": "07:33",
    "branch": "Mumbai"
  },
  {
    "id": "T576",
    "source": "A1151",
    "target": "A1082",
    "amount": 36430,
    "channel": "UPI",
    "time": "16:56",
    "branch": "Kolkata"
  },
  {
    "id": "T577",
    "source": "A1003",
    "target": "A1024",
    "amount": 34318,
    "channel": "RTGS",
    "time": "20:25",
    "branch": "Kolkata"
  },
  {
    "id": "T578",
    "source": "A1139",
    "target": "A1105",
    "amount": 74464,
    "channel": "RTGS",
    "time": "06:26",
    "branch": "Bangalore"
  },
  {
    "id": "T579",
    "source": "A1045",
    "target": "A1184",
    "amount": 30208,
    "channel": "NEFT",
    "time": "17:57",
    "branch": "Delhi"
  },
  {
    "id": "T580",
    "source": "A1004",
    "target": "A1102",
    "amount": 15893,
    "channel": "IMPS",
    "time": "02:33",
    "branch": "Mumbai"
  },
  {
    "id": "T581",
    "source": "A1099",
    "target": "A1031",
    "amount": 26907,
    "channel": "IMPS",
    "time": "05:07",
    "branch": "Kolkata"
  },
  {
    "id": "T582",
    "source": "A1189",
    "target": "A1101",
    "amount": 81291,
    "channel": "NEFT",
    "time": "16:03",
    "branch": "Bangalore"
  },
  {
    "id": "T583",
    "source": "A1082",
    "target": "A1163",
    "amount": 91682,
    "channel": "UPI",
    "time": "01:28",
    "branch": "Delhi"
  },
  {
    "id": "T584",
    "source": "A1042",
    "target": "A1048",
    "amount": 44448,
    "channel": "ATM",
    "time": "17:16",
    "branch": "Chennai"
  },
  {
    "id": "T585",
    "source": "A1183",
    "target": "A1157",
    "amount": 23775,
    "channel": "UPI",
    "time": "07:48",
    "branch": "Chennai"
  },
  {
    "id": "T586",
    "source": "A1153",
    "target": "A1106",
    "amount": 86194,
    "channel": "ATM",
    "time": "01:55",
    "branch": "Delhi"
  },
  {
    "id": "T587",
    "source": "A1189",
    "target": "A1133",
    "amount": 14093,
    "channel": "NEFT",
    "time": "22:57",
    "branch": "Chennai"
  },
  {
    "id": "T588",
    "source": "A1101",
    "target": "A1081",
    "amount": 17584,
    "channel": "UPI",
    "time": "02:49",
    "branch": "Chennai"
  },
  {
    "id": "T589",
    "source": "A1157",
    "target": "A1040",
    "amount": 55394,
    "channel": "RTGS",
    "time": "13:46",
    "branch": "Delhi"
  },
  {
    "id": "T590",
    "source": "A1098",
    "target": "A1008",
    "amount": 33763,
    "channel": "ATM",
    "time": "23:11",
    "branch": "Delhi"
  },
  {
    "id": "T591",
    "source": "A1083",
    "target": "A1161",
    "amount": 84642,
    "channel": "IMPS",
    "time": "12:59",
    "branch": "Mumbai"
  },
  {
    "id": "T592",
    "source": "A1153",
    "target": "A1118",
    "amount": 84930,
    "channel": "NEFT",
    "time": "17:29",
    "branch": "Kolkata"
  },
  {
    "id": "T593",
    "source": "A1164",
    "target": "A1070",
    "amount": 27145,
    "channel": "IMPS",
    "time": "05:31",
    "branch": "Bangalore"
  },
  {
    "id": "T594",
    "source": "A1022",
    "target": "A1087",
    "amount": 61190,
    "channel": "UPI",
    "time": "20:47",
    "branch": "Mumbai"
  },
  {
    "id": "T595",
    "source": "A1096",
    "target": "A1037",
    "amount": 78237,
    "channel": "NEFT",
    "time": "14:53",
    "branch": "Chennai"
  },
  {
    "id": "T596",
    "source": "A1046",
    "target": "A1037",
    "amount": 35835,
    "channel": "NEFT",
    "time": "11:36",
    "branch": "Chennai"
  },
  {
    "id": "T597",
    "source": "A1095",
    "target": "A1118",
    "amount": 69677,
    "channel": "IMPS",
    "time": "18:17",
    "branch": "Bangalore"
  },
  {
    "id": "T598",
    "source": "A1024",
    "target": "A1187",
    "amount": 98461,
    "channel": "ATM",
    "time": "13:25",
    "branch": "Mumbai"
  },
  {
    "id": "T599",
    "source": "A1072",
    "target": "A1079",
    "amount": 83738,
    "channel": "ATM",
    "time": "18:59",
    "branch": "Mumbai"
  },
  {
    "id": "T600",
    "source": "A1037",
    "target": "A1071",
    "amount": 44795,
    "channel": "ATM",
    "time": "15:50",
    "branch": "Delhi"
  },
  {
    "id": "T601",
    "source": "A1180",
    "target": "A1065",
    "amount": 74003,
    "channel": "UPI",
    "time": "07:49",
    "branch": "Bangalore"
  },
  {
    "id": "T602",
    "source": "A1107",
    "target": "A1004",
    "amount": 66451,
    "channel": "ATM",
    "time": "22:03",
    "branch": "Delhi"
  },
  {
    "id": "T603",
    "source": "A1086",
    "target": "A1103",
    "amount": 11601,
    "channel": "NEFT",
    "time": "17:39",
    "branch": "Delhi"
  },
  {
    "id": "T604",
    "source": "A1072",
    "target": "A1043",
    "amount": 27649,
    "channel": "ATM",
    "time": "16:42",
    "branch": "Chennai"
  },
  {
    "id": "T605",
    "source": "A1113",
    "target": "A1173",
    "amount": 86247,
    "channel": "NEFT",
    "time": "06:23",
    "branch": "Bangalore"
  },
  {
    "id": "T606",
    "source": "A1062",
    "target": "A1009",
    "amount": 74667,
    "channel": "UPI",
    "time": "07:39",
    "branch": "Delhi"
  },
  {
    "id": "T607",
    "source": "A1021",
    "target": "A1020",
    "amount": 41543,
    "channel": "RTGS",
    "time": "06:28",
    "branch": "Delhi"
  },
  {
    "id": "T608",
    "source": "A1194",
    "target": "A1095",
    "amount": 35618,
    "channel": "NEFT",
    "time": "08:23",
    "branch": "Kolkata"
  },
  {
    "id": "T609",
    "source": "A1082",
    "target": "A1076",
    "amount": 87844,
    "channel": "NEFT",
    "time": "15:57",
    "branch": "Chennai"
  },
  {
    "id": "T610",
    "source": "A1057",
    "target": "A1006",
    "amount": 93528,
    "channel": "NEFT",
    "time": "19:49",
    "branch": "Chennai"
  },
  {
    "id": "T611",
    "source": "A1116",
    "target": "A1124",
    "amount": 56293,
    "channel": "IMPS",
    "time": "23:32",
    "branch": "Bangalore"
  },
  {
    "id": "T612",
    "source": "A1040",
    "target": "A1011",
    "amount": 15970,
    "channel": "RTGS",
    "time": "12:56",
    "branch": "Kolkata"
  },
  {
    "id": "T613",
    "source": "A1169",
    "target": "A1162",
    "amount": 43914,
    "channel": "ATM",
    "time": "07:40",
    "branch": "Mumbai"
  },
  {
    "id": "T614",
    "source": "A1102",
    "target": "A1024",
    "amount": 39444,
    "channel": "NEFT",
    "time": "19:19",
    "branch": "Bangalore"
  },
  {
    "id": "T615",
    "source": "A1172",
    "target": "A1096",
    "amount": 6237,
    "channel": "UPI",
    "time": "14:25",
    "branch": "Chennai"
  },
  {
    "id": "T616",
    "source": "A1081",
    "target": "A1105",
    "amount": 97871,
    "channel": "NEFT",
    "time": "17:29",
    "branch": "Chennai"
  },
  {
    "id": "T617",
    "source": "A1049",
    "target": "A1174",
    "amount": 7140,
    "channel": "UPI",
    "time": "03:34",
    "branch": "Mumbai"
  },
  {
    "id": "T618",
    "source": "A1000",
    "target": "A1050",
    "amount": 8638,
    "channel": "NEFT",
    "time": "22:28",
    "branch": "Mumbai"
  },
  {
    "id": "T619",
    "source": "A1096",
    "target": "A1154",
    "amount": 88265,
    "channel": "UPI",
    "time": "13:37",
    "branch": "Delhi"
  },
  {
    "id": "T620",
    "source": "A1157",
    "target": "A1124",
    "amount": 86925,
    "channel": "UPI",
    "time": "09:27",
    "branch": "Chennai"
  },
  {
    "id": "T621",
    "source": "A1151",
    "target": "A1029",
    "amount": 14493,
    "channel": "NEFT",
    "time": "17:43",
    "branch": "Delhi"
  },
  {
    "id": "T622",
    "source": "A1008",
    "target": "A1056",
    "amount": 59333,
    "channel": "IMPS",
    "time": "22:44",
    "branch": "Delhi"
  },
  {
    "id": "T623",
    "source": "A1150",
    "target": "A1167",
    "amount": 33970,
    "channel": "ATM",
    "time": "13:32",
    "branch": "Chennai"
  },
  {
    "id": "T624",
    "source": "A1065",
    "target": "A1041",
    "amount": 12744,
    "channel": "IMPS",
    "time": "19:10",
    "branch": "Bangalore"
  },
  {
    "id": "T625",
    "source": "A1011",
    "target": "A1069",
    "amount": 71178,
    "channel": "IMPS",
    "time": "07:39",
    "branch": "Bangalore"
  },
  {
    "id": "T626",
    "source": "A1074",
    "target": "A1038",
    "amount": 26946,
    "channel": "RTGS",
    "time": "14:04",
    "branch": "Bangalore"
  },
  {
    "id": "T627",
    "source": "A1104",
    "target": "A1133",
    "amount": 33901,
    "channel": "UPI",
    "time": "01:42",
    "branch": "Bangalore"
  },
  {
    "id": "T628",
    "source": "A1108",
    "target": "A1055",
    "amount": 34298,
    "channel": "ATM",
    "time": "11:46",
    "branch": "Mumbai"
  },
  {
    "id": "T629",
    "source": "A1041",
    "target": "A1138",
    "amount": 27586,
    "channel": "RTGS",
    "time": "20:54",
    "branch": "Bangalore"
  },
  {
    "id": "T630",
    "source": "A1170",
    "target": "A1111",
    "amount": 31647,
    "channel": "NEFT",
    "time": "10:50",
    "branch": "Chennai"
  },
  {
    "id": "T631",
    "source": "A1189",
    "target": "A1029",
    "amount": 2556,
    "channel": "RTGS",
    "time": "16:06",
    "branch": "Chennai"
  },
  {
    "id": "T632",
    "source": "A1058",
    "target": "A1056",
    "amount": 41937,
    "channel": "IMPS",
    "time": "01:57",
    "branch": "Bangalore"
  },
  {
    "id": "T633",
    "source": "A1142",
    "target": "A1126",
    "amount": 63383,
    "channel": "ATM",
    "time": "08:41",
    "branch": "Delhi"
  },
  {
    "id": "T634",
    "source": "A1003",
    "target": "A1124",
    "amount": 31083,
    "channel": "ATM",
    "time": "19:25",
    "branch": "Chennai"
  },
  {
    "id": "T635",
    "source": "A1152",
    "target": "A1129",
    "amount": 99610,
    "channel": "RTGS",
    "time": "06:34",
    "branch": "Mumbai"
  },
  {
    "id": "T636",
    "source": "A1199",
    "target": "A1086",
    "amount": 1249,
    "channel": "IMPS",
    "time": "23:54",
    "branch": "Mumbai"
  },
  {
    "id": "T637",
    "source": "A1113",
    "target": "A1118",
    "amount": 24406,
    "channel": "ATM",
    "time": "23:49",
    "branch": "Bangalore"
  },
  {
    "id": "T638",
    "source": "A1024",
    "target": "A1000",
    "amount": 90431,
    "channel": "ATM",
    "time": "18:30",
    "branch": "Delhi"
  },
  {
    "id": "T639",
    "source": "A1049",
    "target": "A1056",
    "amount": 8004,
    "channel": "UPI",
    "time": "14:21",
    "branch": "Chennai"
  },
  {
    "id": "T640",
    "source": "A1163",
    "target": "A1155",
    "amount": 75658,
    "channel": "IMPS",
    "time": "21:05",
    "branch": "Mumbai"
  },
  {
    "id": "T641",
    "source": "A1096",
    "target": "A1029",
    "amount": 82103,
    "channel": "NEFT",
    "time": "19:30",
    "branch": "Mumbai"
  },
  {
    "id": "T642",
    "source": "A1007",
    "target": "A1132",
    "amount": 90506,
    "channel": "UPI",
    "time": "15:14",
    "branch": "Kolkata"
  },
  {
    "id": "T643",
    "source": "A1186",
    "target": "A1061",
    "amount": 74764,
    "channel": "NEFT",
    "time": "06:55",
    "branch": "Bangalore"
  },
  {
    "id": "T644",
    "source": "A1144",
    "target": "A1188",
    "amount": 20654,
    "channel": "UPI",
    "time": "18:27",
    "branch": "Kolkata"
  },
  {
    "id": "T645",
    "source": "A1096",
    "target": "A1009",
    "amount": 92235,
    "channel": "UPI",
    "time": "02:30",
    "branch": "Chennai"
  },
  {
    "id": "T646",
    "source": "A1103",
    "target": "A1004",
    "amount": 77300,
    "channel": "ATM",
    "time": "08:09",
    "branch": "Chennai"
  },
  {
    "id": "T647",
    "source": "A1165",
    "target": "A1052",
    "amount": 42276,
    "channel": "IMPS",
    "time": "06:07",
    "branch": "Bangalore"
  },
  {
    "id": "T648",
    "source": "A1030",
    "target": "A1109",
    "amount": 54752,
    "channel": "IMPS",
    "time": "18:12",
    "branch": "Mumbai"
  },
  {
    "id": "T649",
    "source": "A1102",
    "target": "A1096",
    "amount": 27254,
    "channel": "ATM",
    "time": "03:04",
    "branch": "Kolkata"
  },
  {
    "id": "T650",
    "source": "A1151",
    "target": "A1133",
    "amount": 90753,
    "channel": "RTGS",
    "time": "01:13",
    "branch": "Mumbai"
  },
  {
    "id": "T651",
    "source": "A1097",
    "target": "A1072",
    "amount": 90643,
    "channel": "RTGS",
    "time": "13:16",
    "branch": "Bangalore"
  },
  {
    "id": "T652",
    "source": "A1162",
    "target": "A1033",
    "amount": 73583,
    "channel": "NEFT",
    "time": "07:35",
    "branch": "Mumbai"
  },
  {
    "id": "T653",
    "source": "A1141",
    "target": "A1099",
    "amount": 84514,
    "channel": "RTGS",
    "time": "08:50",
    "branch": "Chennai"
  },
  {
    "id": "T654",
    "source": "A1036",
    "target": "A1147",
    "amount": 45141,
    "channel": "ATM",
    "time": "13:21",
    "branch": "Bangalore"
  },
  {
    "id": "T655",
    "source": "A1088",
    "target": "A1156",
    "amount": 29021,
    "channel": "ATM",
    "time": "07:32",
    "branch": "Mumbai"
  },
  {
    "id": "T656",
    "source": "A1150",
    "target": "A1086",
    "amount": 46178,
    "channel": "UPI",
    "time": "02:31",
    "branch": "Chennai"
  },
  {
    "id": "T657",
    "source": "A1017",
    "target": "A1056",
    "amount": 1928,
    "channel": "NEFT",
    "time": "10:26",
    "branch": "Chennai"
  },
  {
    "id": "T658",
    "source": "A1115",
    "target": "A1066",
    "amount": 36097,
    "channel": "RTGS",
    "time": "07:34",
    "branch": "Delhi"
  },
  {
    "id": "T659",
    "source": "A1111",
    "target": "A1086",
    "amount": 75299,
    "channel": "RTGS",
    "time": "19:01",
    "branch": "Mumbai"
  },
  {
    "id": "T660",
    "source": "A1195",
    "target": "A1065",
    "amount": 9681,
    "channel": "ATM",
    "time": "08:00",
    "branch": "Delhi"
  },
  {
    "id": "T661",
    "source": "A1086",
    "target": "A1114",
    "amount": 20486,
    "channel": "NEFT",
    "time": "14:52",
    "branch": "Mumbai"
  },
  {
    "id": "T662",
    "source": "A1134",
    "target": "A1129",
    "amount": 70536,
    "channel": "RTGS",
    "time": "05:02",
    "branch": "Delhi"
  },
  {
    "id": "T663",
    "source": "A1111",
    "target": "A1112",
    "amount": 59271,
    "channel": "ATM",
    "time": "15:42",
    "branch": "Chennai"
  },
  {
    "id": "T664",
    "source": "A1114",
    "target": "A1009",
    "amount": 58564,
    "channel": "IMPS",
    "time": "05:07",
    "branch": "Kolkata"
  },
  {
    "id": "T665",
    "source": "A1061",
    "target": "A1114",
    "amount": 87442,
    "channel": "ATM",
    "time": "02:18",
    "branch": "Kolkata"
  },
  {
    "id": "T666",
    "source": "A1164",
    "target": "A1131",
    "amount": 82381,
    "channel": "UPI",
    "time": "18:14",
    "branch": "Kolkata"
  },
  {
    "id": "T667",
    "source": "A1141",
    "target": "A1053",
    "amount": 25124,
    "channel": "ATM",
    "time": "04:03",
    "branch": "Kolkata"
  },
  {
    "id": "T668",
    "source": "A1032",
    "target": "A1081",
    "amount": 24544,
    "channel": "NEFT",
    "time": "03:25",
    "branch": "Chennai"
  },
  {
    "id": "T669",
    "source": "A1057",
    "target": "A1091",
    "amount": 26743,
    "channel": "IMPS",
    "time": "17:19",
    "branch": "Kolkata"
  },
  {
    "id": "T670",
    "source": "A1054",
    "target": "A1069",
    "amount": 69344,
    "channel": "ATM",
    "time": "22:15",
    "branch": "Kolkata"
  },
  {
    "id": "T671",
    "source": "A1189",
    "target": "A1009",
    "amount": 60414,
    "channel": "NEFT",
    "time": "02:09",
    "branch": "Mumbai"
  },
  {
    "id": "T672",
    "source": "A1015",
    "target": "A1021",
    "amount": 25050,
    "channel": "ATM",
    "time": "09:33",
    "branch": "Mumbai"
  },
  {
    "id": "T673",
    "source": "A1087",
    "target": "A1069",
    "amount": 29163,
    "channel": "NEFT",
    "time": "15:56",
    "branch": "Mumbai"
  },
  {
    "id": "T674",
    "source": "A1184",
    "target": "A1068",
    "amount": 3647,
    "channel": "ATM",
    "time": "20:10",
    "branch": "Mumbai"
  },
  {
    "id": "T675",
    "source": "A1050",
    "target": "A1000",
    "amount": 81975,
    "channel": "IMPS",
    "time": "02:41",
    "branch": "Mumbai"
  },
  {
    "id": "T676",
    "source": "A1162",
    "target": "A1061",
    "amount": 95442,
    "channel": "IMPS",
    "time": "17:48",
    "branch": "Mumbai"
  },
  {
    "id": "T677",
    "source": "A1012",
    "target": "A1035",
    "amount": 34380,
    "channel": "NEFT",
    "time": "22:33",
    "branch": "Bangalore"
  },
  {
    "id": "T678",
    "source": "A1072",
    "target": "A1134",
    "amount": 71971,
    "channel": "IMPS",
    "time": "04:22",
    "branch": "Chennai"
  },
  {
    "id": "T679",
    "source": "A1096",
    "target": "A1168",
    "amount": 7720,
    "channel": "IMPS",
    "time": "19:00",
    "branch": "Chennai"
  },
  {
    "id": "T680",
    "source": "A1082",
    "target": "A1135",
    "amount": 96206,
    "channel": "UPI",
    "time": "01:18",
    "branch": "Kolkata"
  },
  {
    "id": "T681",
    "source": "A1126",
    "target": "A1014",
    "amount": 14056,
    "channel": "UPI",
    "time": "02:17",
    "branch": "Delhi"
  },
  {
    "id": "T682",
    "source": "A1007",
    "target": "A1050",
    "amount": 94349,
    "channel": "RTGS",
    "time": "15:26",
    "branch": "Chennai"
  },
  {
    "id": "T683",
    "source": "A1135",
    "target": "A1086",
    "amount": 48390,
    "channel": "RTGS",
    "time": "04:31",
    "branch": "Chennai"
  },
  {
    "id": "T684",
    "source": "A1185",
    "target": "A1193",
    "amount": 14028,
    "channel": "RTGS",
    "time": "15:21",
    "branch": "Chennai"
  },
  {
    "id": "T685",
    "source": "A1050",
    "target": "A1064",
    "amount": 79444,
    "channel": "UPI",
    "time": "05:07",
    "branch": "Mumbai"
  },
  {
    "id": "T686",
    "source": "A1085",
    "target": "A1124",
    "amount": 73347,
    "channel": "RTGS",
    "time": "15:47",
    "branch": "Delhi"
  },
  {
    "id": "T687",
    "source": "A1071",
    "target": "A1018",
    "amount": 20324,
    "channel": "ATM",
    "time": "02:20",
    "branch": "Delhi"
  },
  {
    "id": "T688",
    "source": "A1008",
    "target": "A1068",
    "amount": 2849,
    "channel": "RTGS",
    "time": "01:07",
    "branch": "Chennai"
  },
  {
    "id": "T689",
    "source": "A1169",
    "target": "A1084",
    "amount": 78350,
    "channel": "IMPS",
    "time": "12:58",
    "branch": "Mumbai"
  },
  {
    "id": "T690",
    "source": "A1044",
    "target": "A1012",
    "amount": 9295,
    "channel": "UPI",
    "time": "12:50",
    "branch": "Delhi"
  },
  {
    "id": "T691",
    "source": "A1142",
    "target": "A1136",
    "amount": 59715,
    "channel": "NEFT",
    "time": "13:54",
    "branch": "Kolkata"
  },
  {
    "id": "T692",
    "source": "A1096",
    "target": "A1169",
    "amount": 56008,
    "channel": "NEFT",
    "time": "16:57",
    "branch": "Bangalore"
  },
  {
    "id": "T693",
    "source": "A1040",
    "target": "A1127",
    "amount": 49323,
    "channel": "UPI",
    "time": "07:23",
    "branch": "Bangalore"
  },
  {
    "id": "T694",
    "source": "A1027",
    "target": "A1029",
    "amount": 95976,
    "channel": "ATM",
    "time": "00:21",
    "branch": "Bangalore"
  },
  {
    "id": "T695",
    "source": "A1117",
    "target": "A1131",
    "amount": 48548,
    "channel": "RTGS",
    "time": "20:48",
    "branch": "Mumbai"
  },
  {
    "id": "T696",
    "source": "A1199",
    "target": "A1106",
    "amount": 47683,
    "channel": "IMPS",
    "time": "16:01",
    "branch": "Kolkata"
  },
  {
    "id": "T697",
    "source": "A1177",
    "target": "A1102",
    "amount": 85934,
    "channel": "ATM",
    "time": "19:55",
    "branch": "Bangalore"
  },
  {
    "id": "T698",
    "source": "A1022",
    "target": "A1065",
    "amount": 74068,
    "channel": "UPI",
    "time": "14:53",
    "branch": "Chennai"
  },
  {
    "id": "T699",
    "source": "A1028",
    "target": "A1162",
    "amount": 33148,
    "channel": "NEFT",
    "time": "02:50",
    "branch": "Bangalore"
  },
  {
    "id": "T700",
    "source": "A1192",
    "target": "A1143",
    "amount": 64669,
    "channel": "UPI",
    "time": "13:40",
    "branch": "Chennai"
  },
  {
    "id": "T701",
    "source": "A1067",
    "target": "A1149",
    "amount": 52768,
    "channel": "RTGS",
    "time": "06:39",
    "branch": "Chennai"
  },
  {
    "id": "T702",
    "source": "A1027",
    "target": "A1134",
    "amount": 46381,
    "channel": "IMPS",
    "time": "14:28",
    "branch": "Bangalore"
  },
  {
    "id": "T703",
    "source": "A1046",
    "target": "A1038",
    "amount": 98907,
    "channel": "RTGS",
    "time": "15:04",
    "branch": "Chennai"
  },
  {
    "id": "T704",
    "source": "A1106",
    "target": "A1013",
    "amount": 58218,
    "channel": "IMPS",
    "time": "02:24",
    "branch": "Bangalore"
  },
  {
    "id": "T705",
    "source": "A1122",
    "target": "A1046",
    "amount": 64502,
    "channel": "NEFT",
    "time": "10:51",
    "branch": "Chennai"
  },
  {
    "id": "T706",
    "source": "A1051",
    "target": "A1149",
    "amount": 16996,
    "channel": "RTGS",
    "time": "06:05",
    "branch": "Chennai"
  },
  {
    "id": "T707",
    "source": "A1071",
    "target": "A1002",
    "amount": 58251,
    "channel": "RTGS",
    "time": "20:57",
    "branch": "Delhi"
  },
  {
    "id": "T708",
    "source": "A1050",
    "target": "A1066",
    "amount": 82867,
    "channel": "RTGS",
    "time": "04:49",
    "branch": "Mumbai"
  },
  {
    "id": "T709",
    "source": "A1160",
    "target": "A1020",
    "amount": 58594,
    "channel": "ATM",
    "time": "07:51",
    "branch": "Delhi"
  },
  {
    "id": "T710",
    "source": "A1162",
    "target": "A1126",
    "amount": 80362,
    "channel": "NEFT",
    "time": "17:56",
    "branch": "Mumbai"
  },
  {
    "id": "T711",
    "source": "A1142",
    "target": "A1157",
    "amount": 28932,
    "channel": "RTGS",
    "time": "07:56",
    "branch": "Delhi"
  },
  {
    "id": "T712",
    "source": "A1144",
    "target": "A1127",
    "amount": 82886,
    "channel": "NEFT",
    "time": "04:43",
    "branch": "Chennai"
  },
  {
    "id": "T713",
    "source": "A1189",
    "target": "A1033",
    "amount": 39768,
    "channel": "RTGS",
    "time": "06:13",
    "branch": "Bangalore"
  },
  {
    "id": "T714",
    "source": "A1074",
    "target": "A1125",
    "amount": 93422,
    "channel": "UPI",
    "time": "13:36",
    "branch": "Kolkata"
  },
  {
    "id": "T715",
    "source": "A1077",
    "target": "A1172",
    "amount": 10012,
    "channel": "NEFT",
    "time": "21:23",
    "branch": "Kolkata"
  },
  {
    "id": "T716",
    "source": "A1165",
    "target": "A1008",
    "amount": 44819,
    "channel": "ATM",
    "time": "01:44",
    "branch": "Kolkata"
  },
  {
    "id": "T717",
    "source": "A1077",
    "target": "A1025",
    "amount": 73537,
    "channel": "UPI",
    "time": "12:28",
    "branch": "Kolkata"
  },
  {
    "id": "T718",
    "source": "A1058",
    "target": "A1124",
    "amount": 49065,
    "channel": "RTGS",
    "time": "09:47",
    "branch": "Kolkata"
  },
  {
    "id": "T719",
    "source": "A1145",
    "target": "A1068",
    "amount": 3592,
    "channel": "ATM",
    "time": "16:49",
    "branch": "Chennai"
  },
  {
    "id": "T720",
    "source": "A1064",
    "target": "A1069",
    "amount": 4644,
    "channel": "IMPS",
    "time": "06:34",
    "branch": "Mumbai"
  },
  {
    "id": "T721",
    "source": "A1001",
    "target": "A1028",
    "amount": 33928,
    "channel": "NEFT",
    "time": "20:12",
    "branch": "Chennai"
  },
  {
    "id": "T722",
    "source": "A1045",
    "target": "A1176",
    "amount": 88207,
    "channel": "ATM",
    "time": "03:27",
    "branch": "Chennai"
  },
  {
    "id": "T723",
    "source": "A1186",
    "target": "A1107",
    "amount": 1781,
    "channel": "UPI",
    "time": "04:56",
    "branch": "Bangalore"
  },
  {
    "id": "T724",
    "source": "A1079",
    "target": "A1094",
    "amount": 79056,
    "channel": "NEFT",
    "time": "02:35",
    "branch": "Bangalore"
  },
  {
    "id": "T725",
    "source": "A1139",
    "target": "A1134",
    "amount": 21661,
    "channel": "UPI",
    "time": "15:59",
    "branch": "Chennai"
  },
  {
    "id": "T726",
    "source": "A1089",
    "target": "A1156",
    "amount": 35914,
    "channel": "UPI",
    "time": "18:23",
    "branch": "Bangalore"
  },
  {
    "id": "T727",
    "source": "A1134",
    "target": "A1159",
    "amount": 36690,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Chennai"
  },
  {
    "id": "T728",
    "source": "A1091",
    "target": "A1136",
    "amount": 87107,
    "channel": "ATM",
    "time": "02:51",
    "branch": "Mumbai"
  },
  {
    "id": "T729",
    "source": "A1011",
    "target": "A1031",
    "amount": 40047,
    "channel": "IMPS",
    "time": "04:58",
    "branch": "Bangalore"
  },
  {
    "id": "T730",
    "source": "A1080",
    "target": "A1022",
    "amount": 48853,
    "channel": "RTGS",
    "time": "11:56",
    "branch": "Kolkata"
  },
  {
    "id": "T731",
    "source": "A1122",
    "target": "A1066",
    "amount": 3295,
    "channel": "RTGS",
    "time": "15:34",
    "branch": "Mumbai"
  },
  {
    "id": "T732",
    "source": "A1051",
    "target": "A1161",
    "amount": 93536,
    "channel": "NEFT",
    "time": "21:32",
    "branch": "Bangalore"
  },
  {
    "id": "T733",
    "source": "A1181",
    "target": "A1173",
    "amount": 5298,
    "channel": "ATM",
    "time": "09:56",
    "branch": "Chennai"
  },
  {
    "id": "T734",
    "source": "A1009",
    "target": "A1130",
    "amount": 56074,
    "channel": "UPI",
    "time": "13:49",
    "branch": "Mumbai"
  },
  {
    "id": "T735",
    "source": "A1085",
    "target": "A1139",
    "amount": 60311,
    "channel": "ATM",
    "time": "19:48",
    "branch": "Kolkata"
  },
  {
    "id": "T736",
    "source": "A1121",
    "target": "A1007",
    "amount": 83161,
    "channel": "IMPS",
    "time": "10:03",
    "branch": "Bangalore"
  },
  {
    "id": "T737",
    "source": "A1001",
    "target": "A1170",
    "amount": 3510,
    "channel": "NEFT",
    "time": "04:38",
    "branch": "Mumbai"
  },
  {
    "id": "T738",
    "source": "A1047",
    "target": "A1090",
    "amount": 19246,
    "channel": "RTGS",
    "time": "20:55",
    "branch": "Chennai"
  },
  {
    "id": "T739",
    "source": "A1036",
    "target": "A1134",
    "amount": 48447,
    "channel": "RTGS",
    "time": "13:35",
    "branch": "Kolkata"
  },
  {
    "id": "T740",
    "source": "A1012",
    "target": "A1199",
    "amount": 12825,
    "channel": "NEFT",
    "time": "14:04",
    "branch": "Mumbai"
  },
  {
    "id": "T741",
    "source": "A1166",
    "target": "A1020",
    "amount": 44264,
    "channel": "NEFT",
    "time": "17:34",
    "branch": "Delhi"
  },
  {
    "id": "T742",
    "source": "A1036",
    "target": "A1136",
    "amount": 12923,
    "channel": "RTGS",
    "time": "14:27",
    "branch": "Mumbai"
  },
  {
    "id": "T743",
    "source": "A1019",
    "target": "A1127",
    "amount": 59662,
    "channel": "UPI",
    "time": "02:39",
    "branch": "Mumbai"
  },
  {
    "id": "T744",
    "source": "A1043",
    "target": "A1050",
    "amount": 9394,
    "channel": "IMPS",
    "time": "23:50",
    "branch": "Kolkata"
  },
  {
    "id": "T745",
    "source": "A1080",
    "target": "A1013",
    "amount": 16993,
    "channel": "NEFT",
    "time": "13:03",
    "branch": "Mumbai"
  },
  {
    "id": "T746",
    "source": "A1188",
    "target": "A1072",
    "amount": 94610,
    "channel": "NEFT",
    "time": "12:57",
    "branch": "Bangalore"
  },
  {
    "id": "T747",
    "source": "A1024",
    "target": "A1058",
    "amount": 81616,
    "channel": "UPI",
    "time": "01:53",
    "branch": "Mumbai"
  },
  {
    "id": "T748",
    "source": "A1100",
    "target": "A1014",
    "amount": 52983,
    "channel": "UPI",
    "time": "21:20",
    "branch": "Kolkata"
  },
  {
    "id": "T749",
    "source": "A1148",
    "target": "A1136",
    "amount": 95703,
    "channel": "UPI",
    "time": "00:32",
    "branch": "Kolkata"
  },
  {
    "id": "T750",
    "source": "A1065",
    "target": "A1194",
    "amount": 24234,
    "channel": "IMPS",
    "time": "07:27",
    "branch": "Kolkata"
  },
  {
    "id": "T751",
    "source": "A1065",
    "target": "A1001",
    "amount": 57493,
    "channel": "NEFT",
    "time": "05:42",
    "branch": "Chennai"
  },
  {
    "id": "T752",
    "source": "A1097",
    "target": "A1000",
    "amount": 90490,
    "channel": "UPI",
    "time": "03:39",
    "branch": "Bangalore"
  },
  {
    "id": "T753",
    "source": "A1140",
    "target": "A1019",
    "amount": 25019,
    "channel": "NEFT",
    "time": "09:06",
    "branch": "Mumbai"
  },
  {
    "id": "T754",
    "source": "A1102",
    "target": "A1116",
    "amount": 21529,
    "channel": "IMPS",
    "time": "06:00",
    "branch": "Kolkata"
  },
  {
    "id": "T755",
    "source": "A1064",
    "target": "A1142",
    "amount": 90489,
    "channel": "NEFT",
    "time": "03:04",
    "branch": "Kolkata"
  },
  {
    "id": "T756",
    "source": "A1116",
    "target": "A1147",
    "amount": 18856,
    "channel": "IMPS",
    "time": "14:34",
    "branch": "Bangalore"
  },
  {
    "id": "T757",
    "source": "A1188",
    "target": "A1083",
    "amount": 99069,
    "channel": "UPI",
    "time": "08:49",
    "branch": "Bangalore"
  },
  {
    "id": "T758",
    "source": "A1014",
    "target": "A1193",
    "amount": 7919,
    "channel": "IMPS",
    "time": "16:47",
    "branch": "Kolkata"
  },
  {
    "id": "T759",
    "source": "A1089",
    "target": "A1015",
    "amount": 89154,
    "channel": "NEFT",
    "time": "16:52",
    "branch": "Chennai"
  },
  {
    "id": "T760",
    "source": "A1091",
    "target": "A1193",
    "amount": 98942,
    "channel": "RTGS",
    "time": "07:54",
    "branch": "Mumbai"
  },
  {
    "id": "T761",
    "source": "A1168",
    "target": "A1169",
    "amount": 27865,
    "channel": "UPI",
    "time": "13:51",
    "branch": "Chennai"
  },
  {
    "id": "T762",
    "source": "A1042",
    "target": "A1031",
    "amount": 28988,
    "channel": "RTGS",
    "time": "08:21",
    "branch": "Delhi"
  },
  {
    "id": "T763",
    "source": "A1168",
    "target": "A1087",
    "amount": 9568,
    "channel": "NEFT",
    "time": "13:49",
    "branch": "Kolkata"
  },
  {
    "id": "T764",
    "source": "A1042",
    "target": "A1129",
    "amount": 69580,
    "channel": "UPI",
    "time": "03:50",
    "branch": "Kolkata"
  },
  {
    "id": "T765",
    "source": "A1005",
    "target": "A1110",
    "amount": 44871,
    "channel": "IMPS",
    "time": "09:50",
    "branch": "Bangalore"
  },
  {
    "id": "T766",
    "source": "A1087",
    "target": "A1100",
    "amount": 8736,
    "channel": "IMPS",
    "time": "23:42",
    "branch": "Bangalore"
  },
  {
    "id": "T767",
    "source": "A1151",
    "target": "A1006",
    "amount": 51436,
    "channel": "RTGS",
    "time": "04:42",
    "branch": "Kolkata"
  },
  {
    "id": "T768",
    "source": "A1027",
    "target": "A1107",
    "amount": 56605,
    "channel": "IMPS",
    "time": "00:00",
    "branch": "Bangalore"
  },
  {
    "id": "T769",
    "source": "A1148",
    "target": "A1072",
    "amount": 87366,
    "channel": "IMPS",
    "time": "18:42",
    "branch": "Kolkata"
  },
  {
    "id": "T770",
    "source": "A1178",
    "target": "A1147",
    "amount": 65835,
    "channel": "NEFT",
    "time": "00:13",
    "branch": "Delhi"
  },
  {
    "id": "T771",
    "source": "A1171",
    "target": "A1057",
    "amount": 87914,
    "channel": "RTGS",
    "time": "05:22",
    "branch": "Chennai"
  },
  {
    "id": "T772",
    "source": "A1089",
    "target": "A1041",
    "amount": 79933,
    "channel": "IMPS",
    "time": "07:32",
    "branch": "Kolkata"
  },
  {
    "id": "T773",
    "source": "A1103",
    "target": "A1051",
    "amount": 13971,
    "channel": "UPI",
    "time": "05:30",
    "branch": "Mumbai"
  },
  {
    "id": "T774",
    "source": "A1148",
    "target": "A1120",
    "amount": 37572,
    "channel": "NEFT",
    "time": "08:14",
    "branch": "Mumbai"
  },
  {
    "id": "T775",
    "source": "A1056",
    "target": "A1123",
    "amount": 80271,
    "channel": "UPI",
    "time": "03:56",
    "branch": "Chennai"
  },
  {
    "id": "T776",
    "source": "A1016",
    "target": "A1124",
    "amount": 72025,
    "channel": "IMPS",
    "time": "10:19",
    "branch": "Mumbai"
  },
  {
    "id": "T777",
    "source": "A1199",
    "target": "A1078",
    "amount": 54165,
    "channel": "IMPS",
    "time": "23:48",
    "branch": "Chennai"
  },
  {
    "id": "T778",
    "source": "A1046",
    "target": "A1036",
    "amount": 52961,
    "channel": "ATM",
    "time": "17:32",
    "branch": "Delhi"
  },
  {
    "id": "T779",
    "source": "A1018",
    "target": "A1041",
    "amount": 33498,
    "channel": "NEFT",
    "time": "00:42",
    "branch": "Kolkata"
  },
  {
    "id": "T780",
    "source": "A1168",
    "target": "A1090",
    "amount": 47443,
    "channel": "IMPS",
    "time": "22:19",
    "branch": "Bangalore"
  },
  {
    "id": "T781",
    "source": "A1163",
    "target": "A1133",
    "amount": 44225,
    "channel": "NEFT",
    "time": "12:54",
    "branch": "Chennai"
  },
  {
    "id": "T782",
    "source": "A1045",
    "target": "A1017",
    "amount": 29319,
    "channel": "ATM",
    "time": "11:12",
    "branch": "Bangalore"
  },
  {
    "id": "T783",
    "source": "A1125",
    "target": "A1051",
    "amount": 12483,
    "channel": "IMPS",
    "time": "02:16",
    "branch": "Chennai"
  },
  {
    "id": "T784",
    "source": "A1104",
    "target": "A1160",
    "amount": 22178,
    "channel": "NEFT",
    "time": "15:10",
    "branch": "Bangalore"
  },
  {
    "id": "T785",
    "source": "A1010",
    "target": "A1026",
    "amount": 18963,
    "channel": "UPI",
    "time": "22:38",
    "branch": "Bangalore"
  },
  {
    "id": "T786",
    "source": "A1044",
    "target": "A1143",
    "amount": 9157,
    "channel": "NEFT",
    "time": "01:00",
    "branch": "Delhi"
  },
  {
    "id": "T787",
    "source": "A1088",
    "target": "A1137",
    "amount": 55494,
    "channel": "UPI",
    "time": "19:30",
    "branch": "Mumbai"
  },
  {
    "id": "T788",
    "source": "A1082",
    "target": "A1120",
    "amount": 40256,
    "channel": "RTGS",
    "time": "16:05",
    "branch": "Chennai"
  },
  {
    "id": "T789",
    "source": "A1172",
    "target": "A1112",
    "amount": 69445,
    "channel": "UPI",
    "time": "22:01",
    "branch": "Chennai"
  },
  {
    "id": "T790",
    "source": "A1024",
    "target": "A1075",
    "amount": 72147,
    "channel": "RTGS",
    "time": "02:43",
    "branch": "Bangalore"
  },
  {
    "id": "T791",
    "source": "A1129",
    "target": "A1041",
    "amount": 22462,
    "channel": "ATM",
    "time": "14:30",
    "branch": "Mumbai"
  },
  {
    "id": "T792",
    "source": "A1123",
    "target": "A1014",
    "amount": 83694,
    "channel": "RTGS",
    "time": "06:08",
    "branch": "Delhi"
  },
  {
    "id": "T793",
    "source": "A1095",
    "target": "A1030",
    "amount": 69347,
    "channel": "NEFT",
    "time": "18:23",
    "branch": "Bangalore"
  },
  {
    "id": "T794",
    "source": "A1128",
    "target": "A1112",
    "amount": 45493,
    "channel": "NEFT",
    "time": "18:38",
    "branch": "Mumbai"
  },
  {
    "id": "T795",
    "source": "A1016",
    "target": "A1092",
    "amount": 15983,
    "channel": "RTGS",
    "time": "12:06",
    "branch": "Delhi"
  },
  {
    "id": "T796",
    "source": "A1037",
    "target": "A1144",
    "amount": 59173,
    "channel": "ATM",
    "time": "22:42",
    "branch": "Bangalore"
  },
  {
    "id": "T797",
    "source": "A1142",
    "target": "A1093",
    "amount": 8779,
    "channel": "NEFT",
    "time": "20:32",
    "branch": "Bangalore"
  },
  {
    "id": "T798",
    "source": "A1092",
    "target": "A1088",
    "amount": 12653,
    "channel": "RTGS",
    "time": "17:33",
    "branch": "Kolkata"
  },
  {
    "id": "T799",
    "source": "A1079",
    "target": "A1091",
    "amount": 70725,
    "channel": "RTGS",
    "time": "16:17",
    "branch": "Bangalore"
  },
  {
    "id": "T800",
    "source": "A1066",
    "target": "A1062",
    "amount": 96273,
    "channel": "ATM",
    "time": "20:17",
    "branch": "Mumbai"
  },
  {
    "id": "T801",
    "source": "A1005",
    "target": "A1025",
    "amount": 45025,
    "channel": "NEFT",
    "time": "08:35",
    "branch": "Chennai"
  },
  {
    "id": "T802",
    "source": "A1190",
    "target": "A1060",
    "amount": 52819,
    "channel": "NEFT",
    "time": "15:11",
    "branch": "Delhi"
  },
  {
    "id": "T803",
    "source": "A1189",
    "target": "A1015",
    "amount": 7011,
    "channel": "NEFT",
    "time": "01:35",
    "branch": "Mumbai"
  },
  {
    "id": "T804",
    "source": "A1095",
    "target": "A1133",
    "amount": 33159,
    "channel": "NEFT",
    "time": "04:12",
    "branch": "Bangalore"
  },
  {
    "id": "T805",
    "source": "A1120",
    "target": "A1067",
    "amount": 64530,
    "channel": "RTGS",
    "time": "10:25",
    "branch": "Bangalore"
  },
  {
    "id": "T806",
    "source": "A1133",
    "target": "A1135",
    "amount": 42301,
    "channel": "NEFT",
    "time": "02:36",
    "branch": "Chennai"
  },
  {
    "id": "T807",
    "source": "A1137",
    "target": "A1052",
    "amount": 55722,
    "channel": "RTGS",
    "time": "18:25",
    "branch": "Delhi"
  },
  {
    "id": "T808",
    "source": "A1076",
    "target": "A1091",
    "amount": 20335,
    "channel": "IMPS",
    "time": "03:04",
    "branch": "Bangalore"
  },
  {
    "id": "T809",
    "source": "A1188",
    "target": "A1195",
    "amount": 92502,
    "channel": "RTGS",
    "time": "13:43",
    "branch": "Delhi"
  },
  {
    "id": "T810",
    "source": "A1064",
    "target": "A1052",
    "amount": 69182,
    "channel": "ATM",
    "time": "23:55",
    "branch": "Mumbai"
  },
  {
    "id": "T811",
    "source": "A1051",
    "target": "A1103",
    "amount": 96202,
    "channel": "ATM",
    "time": "03:13",
    "branch": "Mumbai"
  },
  {
    "id": "T812",
    "source": "A1086",
    "target": "A1067",
    "amount": 7571,
    "channel": "UPI",
    "time": "19:47",
    "branch": "Mumbai"
  },
  {
    "id": "T813",
    "source": "A1003",
    "target": "A1048",
    "amount": 47037,
    "channel": "NEFT",
    "time": "14:54",
    "branch": "Delhi"
  },
  {
    "id": "T814",
    "source": "A1186",
    "target": "A1169",
    "amount": 66218,
    "channel": "ATM",
    "time": "05:15",
    "branch": "Chennai"
  },
  {
    "id": "T815",
    "source": "A1099",
    "target": "A1121",
    "amount": 40980,
    "channel": "IMPS",
    "time": "08:31",
    "branch": "Bangalore"
  },
  {
    "id": "T816",
    "source": "A1163",
    "target": "A1103",
    "amount": 84518,
    "channel": "IMPS",
    "time": "01:57",
    "branch": "Kolkata"
  },
  {
    "id": "T817",
    "source": "A1061",
    "target": "A1161",
    "amount": 64170,
    "channel": "ATM",
    "time": "20:52",
    "branch": "Delhi"
  },
  {
    "id": "T818",
    "source": "A1020",
    "target": "A1025",
    "amount": 18925,
    "channel": "NEFT",
    "time": "08:08",
    "branch": "Delhi"
  },
  {
    "id": "T819",
    "source": "A1180",
    "target": "A1082",
    "amount": 39226,
    "channel": "RTGS",
    "time": "14:57",
    "branch": "Chennai"
  },
  {
    "id": "T820",
    "source": "A1132",
    "target": "A1189",
    "amount": 89593,
    "channel": "ATM",
    "time": "06:49",
    "branch": "Chennai"
  },
  {
    "id": "T821",
    "source": "A1133",
    "target": "A1196",
    "amount": 86634,
    "channel": "UPI",
    "time": "00:08",
    "branch": "Delhi"
  },
  {
    "id": "T822",
    "source": "A1176",
    "target": "A1059",
    "amount": 25357,
    "channel": "UPI",
    "time": "12:37",
    "branch": "Bangalore"
  },
  {
    "id": "T823",
    "source": "A1065",
    "target": "A1040",
    "amount": 59526,
    "channel": "ATM",
    "time": "16:59",
    "branch": "Delhi"
  },
  {
    "id": "T824",
    "source": "A1158",
    "target": "A1166",
    "amount": 79328,
    "channel": "IMPS",
    "time": "08:40",
    "branch": "Delhi"
  },
  {
    "id": "T825",
    "source": "A1168",
    "target": "A1107",
    "amount": 46817,
    "channel": "NEFT",
    "time": "10:35",
    "branch": "Chennai"
  },
  {
    "id": "T826",
    "source": "A1189",
    "target": "A1124",
    "amount": 99287,
    "channel": "IMPS",
    "time": "22:57",
    "branch": "Bangalore"
  },
  {
    "id": "T827",
    "source": "A1194",
    "target": "A1099",
    "amount": 82238,
    "channel": "RTGS",
    "time": "06:27",
    "branch": "Delhi"
  },
  {
    "id": "T828",
    "source": "A1127",
    "target": "A1182",
    "amount": 68470,
    "channel": "IMPS",
    "time": "07:42",
    "branch": "Chennai"
  },
  {
    "id": "T829",
    "source": "A1084",
    "target": "A1196",
    "amount": 72746,
    "channel": "NEFT",
    "time": "12:29",
    "branch": "Bangalore"
  },
  {
    "id": "T830",
    "source": "A1163",
    "target": "A1048",
    "amount": 55405,
    "channel": "NEFT",
    "time": "14:20",
    "branch": "Bangalore"
  },
  {
    "id": "T831",
    "source": "A1199",
    "target": "A1143",
    "amount": 79149,
    "channel": "RTGS",
    "time": "22:42",
    "branch": "Bangalore"
  },
  {
    "id": "T832",
    "source": "A1082",
    "target": "A1079",
    "amount": 79198,
    "channel": "ATM",
    "time": "18:36",
    "branch": "Kolkata"
  },
  {
    "id": "T833",
    "source": "A1110",
    "target": "A1099",
    "amount": 7662,
    "channel": "NEFT",
    "time": "12:00",
    "branch": "Mumbai"
  },
  {
    "id": "T834",
    "source": "A1193",
    "target": "A1116",
    "amount": 16366,
    "channel": "IMPS",
    "time": "19:50",
    "branch": "Chennai"
  },
  {
    "id": "T835",
    "source": "A1065",
    "target": "A1179",
    "amount": 26265,
    "channel": "ATM",
    "time": "16:46",
    "branch": "Mumbai"
  },
  {
    "id": "T836",
    "source": "A1129",
    "target": "A1026",
    "amount": 57765,
    "channel": "IMPS",
    "time": "00:02",
    "branch": "Mumbai"
  },
  {
    "id": "T837",
    "source": "A1043",
    "target": "A1060",
    "amount": 28048,
    "channel": "ATM",
    "time": "19:25",
    "branch": "Kolkata"
  },
  {
    "id": "T838",
    "source": "A1132",
    "target": "A1196",
    "amount": 7278,
    "channel": "UPI",
    "time": "11:37",
    "branch": "Delhi"
  },
  {
    "id": "T839",
    "source": "A1051",
    "target": "A1054",
    "amount": 31482,
    "channel": "UPI",
    "time": "07:31",
    "branch": "Bangalore"
  },
  {
    "id": "T840",
    "source": "A1093",
    "target": "A1107",
    "amount": 43201,
    "channel": "NEFT",
    "time": "07:44",
    "branch": "Mumbai"
  },
  {
    "id": "T841",
    "source": "A1165",
    "target": "A1191",
    "amount": 60392,
    "channel": "RTGS",
    "time": "08:34",
    "branch": "Mumbai"
  },
  {
    "id": "T842",
    "source": "A1128",
    "target": "A1089",
    "amount": 47228,
    "channel": "ATM",
    "time": "04:58",
    "branch": "Delhi"
  },
  {
    "id": "T843",
    "source": "A1028",
    "target": "A1124",
    "amount": 99153,
    "channel": "RTGS",
    "time": "15:48",
    "branch": "Kolkata"
  },
  {
    "id": "T844",
    "source": "A1133",
    "target": "A1180",
    "amount": 92751,
    "channel": "NEFT",
    "time": "06:42",
    "branch": "Delhi"
  },
  {
    "id": "T845",
    "source": "A1028",
    "target": "A1133",
    "amount": 39210,
    "channel": "RTGS",
    "time": "08:36",
    "branch": "Delhi"
  },
  {
    "id": "T846",
    "source": "A1056",
    "target": "A1142",
    "amount": 65698,
    "channel": "ATM",
    "time": "04:22",
    "branch": "Kolkata"
  },
  {
    "id": "T847",
    "source": "A1112",
    "target": "A1133",
    "amount": 29090,
    "channel": "NEFT",
    "time": "11:42",
    "branch": "Bangalore"
  },
  {
    "id": "T848",
    "source": "A1111",
    "target": "A1014",
    "amount": 65880,
    "channel": "RTGS",
    "time": "12:19",
    "branch": "Delhi"
  },
  {
    "id": "T849",
    "source": "A1087",
    "target": "A1068",
    "amount": 39874,
    "channel": "ATM",
    "time": "09:16",
    "branch": "Delhi"
  },
  {
    "id": "T850",
    "source": "A1154",
    "target": "A1078",
    "amount": 38600,
    "channel": "NEFT",
    "time": "05:52",
    "branch": "Kolkata"
  },
  {
    "id": "T851",
    "source": "A1177",
    "target": "A1083",
    "amount": 24325,
    "channel": "RTGS",
    "time": "13:40",
    "branch": "Mumbai"
  },
  {
    "id": "T852",
    "source": "A1194",
    "target": "A1032",
    "amount": 29057,
    "channel": "UPI",
    "time": "04:30",
    "branch": "Kolkata"
  },
  {
    "id": "T853",
    "source": "A1039",
    "target": "A1008",
    "amount": 97043,
    "channel": "ATM",
    "time": "22:18",
    "branch": "Kolkata"
  },
  {
    "id": "T854",
    "source": "A1031",
    "target": "A1141",
    "amount": 8542,
    "channel": "IMPS",
    "time": "11:16",
    "branch": "Delhi"
  },
  {
    "id": "T855",
    "source": "A1020",
    "target": "A1152",
    "amount": 27035,
    "channel": "RTGS",
    "time": "18:43",
    "branch": "Delhi"
  },
  {
    "id": "T856",
    "source": "A1095",
    "target": "A1116",
    "amount": 86195,
    "channel": "IMPS",
    "time": "10:00",
    "branch": "Mumbai"
  },
  {
    "id": "T857",
    "source": "A1074",
    "target": "A1036",
    "amount": 97848,
    "channel": "IMPS",
    "time": "22:51",
    "branch": "Kolkata"
  },
  {
    "id": "T858",
    "source": "A1172",
    "target": "A1019",
    "amount": 14714,
    "channel": "IMPS",
    "time": "21:42",
    "branch": "Chennai"
  },
  {
    "id": "T859",
    "source": "A1006",
    "target": "A1020",
    "amount": 20416,
    "channel": "IMPS",
    "time": "21:16",
    "branch": "Kolkata"
  },
  {
    "id": "T860",
    "source": "A1035",
    "target": "A1074",
    "amount": 11750,
    "channel": "NEFT",
    "time": "17:06",
    "branch": "Bangalore"
  },
  {
    "id": "T861",
    "source": "A1021",
    "target": "A1167",
    "amount": 78250,
    "channel": "IMPS",
    "time": "08:06",
    "branch": "Mumbai"
  },
  {
    "id": "T862",
    "source": "A1030",
    "target": "A1064",
    "amount": 25796,
    "channel": "ATM",
    "time": "08:39",
    "branch": "Chennai"
  },
  {
    "id": "T863",
    "source": "A1049",
    "target": "A1171",
    "amount": 34067,
    "channel": "ATM",
    "time": "17:41",
    "branch": "Chennai"
  },
  {
    "id": "T864",
    "source": "A1016",
    "target": "A1157",
    "amount": 98605,
    "channel": "IMPS",
    "time": "11:52",
    "branch": "Bangalore"
  },
  {
    "id": "T865",
    "source": "A1144",
    "target": "A1075",
    "amount": 86654,
    "channel": "ATM",
    "time": "11:26",
    "branch": "Chennai"
  },
  {
    "id": "T866",
    "source": "A1184",
    "target": "A1066",
    "amount": 65574,
    "channel": "ATM",
    "time": "21:08",
    "branch": "Bangalore"
  },
  {
    "id": "T867",
    "source": "A1064",
    "target": "A1059",
    "amount": 24034,
    "channel": "UPI",
    "time": "22:18",
    "branch": "Kolkata"
  },
  {
    "id": "T868",
    "source": "A1032",
    "target": "A1082",
    "amount": 65046,
    "channel": "RTGS",
    "time": "01:35",
    "branch": "Bangalore"
  },
  {
    "id": "T869",
    "source": "A1119",
    "target": "A1079",
    "amount": 90168,
    "channel": "UPI",
    "time": "23:51",
    "branch": "Mumbai"
  },
  {
    "id": "T870",
    "source": "A1047",
    "target": "A1127",
    "amount": 92063,
    "channel": "ATM",
    "time": "16:27",
    "branch": "Mumbai"
  },
  {
    "id": "T871",
    "source": "A1166",
    "target": "A1138",
    "amount": 90828,
    "channel": "NEFT",
    "time": "11:52",
    "branch": "Kolkata"
  },
  {
    "id": "T872",
    "source": "A1137",
    "target": "A1091",
    "amount": 93008,
    "channel": "RTGS",
    "time": "16:17",
    "branch": "Mumbai"
  },
  {
    "id": "T873",
    "source": "A1088",
    "target": "A1003",
    "amount": 18230,
    "channel": "ATM",
    "time": "16:51",
    "branch": "Delhi"
  },
  {
    "id": "T874",
    "source": "A1007",
    "target": "A1033",
    "amount": 85111,
    "channel": "UPI",
    "time": "11:40",
    "branch": "Delhi"
  },
  {
    "id": "T875",
    "source": "A1093",
    "target": "A1161",
    "amount": 81893,
    "channel": "UPI",
    "time": "03:16",
    "branch": "Kolkata"
  },
  {
    "id": "T876",
    "source": "A1053",
    "target": "A1185",
    "amount": 1584,
    "channel": "UPI",
    "time": "17:39",
    "branch": "Mumbai"
  },
  {
    "id": "T877",
    "source": "A1101",
    "target": "A1132",
    "amount": 4816,
    "channel": "IMPS",
    "time": "23:56",
    "branch": "Kolkata"
  },
  {
    "id": "T878",
    "source": "A1072",
    "target": "A1082",
    "amount": 81802,
    "channel": "RTGS",
    "time": "07:12",
    "branch": "Kolkata"
  },
  {
    "id": "T879",
    "source": "A1070",
    "target": "A1037",
    "amount": 33071,
    "channel": "NEFT",
    "time": "01:58",
    "branch": "Kolkata"
  },
  {
    "id": "T880",
    "source": "A1085",
    "target": "A1199",
    "amount": 96918,
    "channel": "RTGS",
    "time": "23:16",
    "branch": "Kolkata"
  },
  {
    "id": "T881",
    "source": "A1122",
    "target": "A1097",
    "amount": 41475,
    "channel": "NEFT",
    "time": "00:35",
    "branch": "Mumbai"
  },
  {
    "id": "T882",
    "source": "A1170",
    "target": "A1016",
    "amount": 92543,
    "channel": "IMPS",
    "time": "10:22",
    "branch": "Mumbai"
  },
  {
    "id": "T883",
    "source": "A1003",
    "target": "A1173",
    "amount": 9904,
    "channel": "NEFT",
    "time": "03:16",
    "branch": "Kolkata"
  },
  {
    "id": "T884",
    "source": "A1093",
    "target": "A1041",
    "amount": 31304,
    "channel": "ATM",
    "time": "03:35",
    "branch": "Bangalore"
  },
  {
    "id": "T885",
    "source": "A1153",
    "target": "A1142",
    "amount": 66764,
    "channel": "UPI",
    "time": "00:25",
    "branch": "Kolkata"
  },
  {
    "id": "T886",
    "source": "A1175",
    "target": "A1062",
    "amount": 74973,
    "channel": "NEFT",
    "time": "05:38",
    "branch": "Bangalore"
  },
  {
    "id": "T887",
    "source": "A1085",
    "target": "A1186",
    "amount": 13484,
    "channel": "ATM",
    "time": "21:24",
    "branch": "Mumbai"
  },
  {
    "id": "T888",
    "source": "A1087",
    "target": "A1111",
    "amount": 96220,
    "channel": "NEFT",
    "time": "06:55",
    "branch": "Bangalore"
  },
  {
    "id": "T889",
    "source": "A1017",
    "target": "A1122",
    "amount": 56620,
    "channel": "RTGS",
    "time": "06:13",
    "branch": "Delhi"
  },
  {
    "id": "T890",
    "source": "A1119",
    "target": "A1164",
    "amount": 97898,
    "channel": "UPI",
    "time": "02:23",
    "branch": "Chennai"
  },
  {
    "id": "T891",
    "source": "A1023",
    "target": "A1173",
    "amount": 45645,
    "channel": "UPI",
    "time": "21:23",
    "branch": "Kolkata"
  },
  {
    "id": "T892",
    "source": "A1056",
    "target": "A1019",
    "amount": 76129,
    "channel": "UPI",
    "time": "22:34",
    "branch": "Mumbai"
  },
  {
    "id": "T893",
    "source": "A1129",
    "target": "A1006",
    "amount": 45140,
    "channel": "UPI",
    "time": "12:49",
    "branch": "Chennai"
  },
  {
    "id": "T894",
    "source": "A1076",
    "target": "A1027",
    "amount": 79705,
    "channel": "ATM",
    "time": "03:05",
    "branch": "Mumbai"
  },
  {
    "id": "T895",
    "source": "A1159",
    "target": "A1160",
    "amount": 53729,
    "channel": "IMPS",
    "time": "06:57",
    "branch": "Chennai"
  },
  {
    "id": "T896",
    "source": "A1187",
    "target": "A1078",
    "amount": 95476,
    "channel": "IMPS",
    "time": "06:11",
    "branch": "Chennai"
  },
  {
    "id": "T897",
    "source": "A1057",
    "target": "A1163",
    "amount": 88727,
    "channel": "UPI",
    "time": "10:15",
    "branch": "Bangalore"
  },
  {
    "id": "T898",
    "source": "A1073",
    "target": "A1025",
    "amount": 90415,
    "channel": "UPI",
    "time": "23:26",
    "branch": "Mumbai"
  },
  {
    "id": "T899",
    "source": "A1056",
    "target": "A1120",
    "amount": 1248,
    "channel": "NEFT",
    "time": "13:32",
    "branch": "Delhi"
  },
  {
    "id": "T900",
    "source": "A1114",
    "target": "A1003",
    "amount": 95442,
    "channel": "RTGS",
    "time": "15:07",
    "branch": "Mumbai"
  },
  {
    "id": "T901",
    "source": "A1096",
    "target": "A1038",
    "amount": 72185,
    "channel": "IMPS",
    "time": "00:57",
    "branch": "Bangalore"
  },
  {
    "id": "T902",
    "source": "A1166",
    "target": "A1036",
    "amount": 29288,
    "channel": "IMPS",
    "time": "15:23",
    "branch": "Kolkata"
  },
  {
    "id": "T903",
    "source": "A1197",
    "target": "A1116",
    "amount": 13762,
    "channel": "NEFT",
    "time": "23:49",
    "branch": "Delhi"
  },
  {
    "id": "T904",
    "source": "A1110",
    "target": "A1040",
    "amount": 79086,
    "channel": "NEFT",
    "time": "23:37",
    "branch": "Bangalore"
  },
  {
    "id": "T905",
    "source": "A1156",
    "target": "A1112",
    "amount": 7574,
    "channel": "RTGS",
    "time": "23:01",
    "branch": "Mumbai"
  },
  {
    "id": "T906",
    "source": "A1075",
    "target": "A1113",
    "amount": 62567,
    "channel": "RTGS",
    "time": "11:38",
    "branch": "Bangalore"
  },
  {
    "id": "T907",
    "source": "A1007",
    "target": "A1067",
    "amount": 8310,
    "channel": "UPI",
    "time": "11:21",
    "branch": "Mumbai"
  },
  {
    "id": "T908",
    "source": "A1006",
    "target": "A1118",
    "amount": 61496,
    "channel": "RTGS",
    "time": "20:29",
    "branch": "Chennai"
  },
  {
    "id": "T909",
    "source": "A1109",
    "target": "A1115",
    "amount": 92684,
    "channel": "UPI",
    "time": "09:41",
    "branch": "Kolkata"
  },
  {
    "id": "T910",
    "source": "A1039",
    "target": "A1030",
    "amount": 89211,
    "channel": "NEFT",
    "time": "09:32",
    "branch": "Kolkata"
  },
  {
    "id": "T911",
    "source": "A1132",
    "target": "A1137",
    "amount": 68673,
    "channel": "RTGS",
    "time": "13:33",
    "branch": "Bangalore"
  },
  {
    "id": "T912",
    "source": "A1116",
    "target": "A1015",
    "amount": 51950,
    "channel": "NEFT",
    "time": "15:49",
    "branch": "Bangalore"
  },
  {
    "id": "T913",
    "source": "A1064",
    "target": "A1089",
    "amount": 28374,
    "channel": "NEFT",
    "time": "09:02",
    "branch": "Kolkata"
  },
  {
    "id": "T914",
    "source": "A1119",
    "target": "A1089",
    "amount": 34781,
    "channel": "RTGS",
    "time": "08:14",
    "branch": "Kolkata"
  },
  {
    "id": "T915",
    "source": "A1157",
    "target": "A1152",
    "amount": 90493,
    "channel": "IMPS",
    "time": "10:43",
    "branch": "Bangalore"
  },
  {
    "id": "T916",
    "source": "A1111",
    "target": "A1072",
    "amount": 68047,
    "channel": "IMPS",
    "time": "10:04",
    "branch": "Delhi"
  },
  {
    "id": "T917",
    "source": "A1163",
    "target": "A1054",
    "amount": 51436,
    "channel": "IMPS",
    "time": "22:13",
    "branch": "Mumbai"
  },
  {
    "id": "T918",
    "source": "A1079",
    "target": "A1120",
    "amount": 99457,
    "channel": "RTGS",
    "time": "05:41",
    "branch": "Chennai"
  },
  {
    "id": "T919",
    "source": "A1015",
    "target": "A1062",
    "amount": 90780,
    "channel": "IMPS",
    "time": "13:52",
    "branch": "Bangalore"
  },
  {
    "id": "T920",
    "source": "A1155",
    "target": "A1033",
    "amount": 74734,
    "channel": "ATM",
    "time": "14:08",
    "branch": "Kolkata"
  },
  {
    "id": "T921",
    "source": "A1069",
    "target": "A1075",
    "amount": 59585,
    "channel": "IMPS",
    "time": "20:41",
    "branch": "Delhi"
  },
  {
    "id": "T922",
    "source": "A1093",
    "target": "A1037",
    "amount": 4391,
    "channel": "IMPS",
    "time": "15:38",
    "branch": "Bangalore"
  },
  {
    "id": "T923",
    "source": "A1081",
    "target": "A1088",
    "amount": 1832,
    "channel": "RTGS",
    "time": "11:04",
    "branch": "Chennai"
  },
  {
    "id": "T924",
    "source": "A1150",
    "target": "A1094",
    "amount": 92840,
    "channel": "ATM",
    "time": "15:37",
    "branch": "Delhi"
  },
  {
    "id": "T925",
    "source": "A1154",
    "target": "A1128",
    "amount": 82683,
    "channel": "IMPS",
    "time": "09:48",
    "branch": "Chennai"
  },
  {
    "id": "T926",
    "source": "A1090",
    "target": "A1025",
    "amount": 97787,
    "channel": "RTGS",
    "time": "03:57",
    "branch": "Chennai"
  },
  {
    "id": "T927",
    "source": "A1088",
    "target": "A1135",
    "amount": 94691,
    "channel": "IMPS",
    "time": "16:07",
    "branch": "Chennai"
  },
  {
    "id": "T928",
    "source": "A1154",
    "target": "A1134",
    "amount": 40520,
    "channel": "RTGS",
    "time": "03:34",
    "branch": "Chennai"
  },
  {
    "id": "T929",
    "source": "A1003",
    "target": "A1025",
    "amount": 3292,
    "channel": "NEFT",
    "time": "18:04",
    "branch": "Delhi"
  },
  {
    "id": "T930",
    "source": "A1051",
    "target": "A1070",
    "amount": 54569,
    "channel": "NEFT",
    "time": "16:39",
    "branch": "Delhi"
  },
  {
    "id": "T931",
    "source": "A1060",
    "target": "A1161",
    "amount": 62461,
    "channel": "RTGS",
    "time": "22:05",
    "branch": "Chennai"
  },
  {
    "id": "T932",
    "source": "A1099",
    "target": "A1062",
    "amount": 88343,
    "channel": "RTGS",
    "time": "00:16",
    "branch": "Kolkata"
  },
  {
    "id": "T933",
    "source": "A1146",
    "target": "A1148",
    "amount": 68430,
    "channel": "RTGS",
    "time": "23:46",
    "branch": "Delhi"
  },
  {
    "id": "T934",
    "source": "A1181",
    "target": "A1166",
    "amount": 92543,
    "channel": "UPI",
    "time": "00:17",
    "branch": "Mumbai"
  },
  {
    "id": "T935",
    "source": "A1073",
    "target": "A1113",
    "amount": 39480,
    "channel": "IMPS",
    "time": "05:32",
    "branch": "Chennai"
  },
  {
    "id": "T936",
    "source": "A1095",
    "target": "A1166",
    "amount": 64996,
    "channel": "IMPS",
    "time": "13:04",
    "branch": "Delhi"
  },
  {
    "id": "T937",
    "source": "A1059",
    "target": "A1052",
    "amount": 65658,
    "channel": "NEFT",
    "time": "17:49",
    "branch": "Mumbai"
  },
  {
    "id": "T938",
    "source": "A1165",
    "target": "A1170",
    "amount": 33549,
    "channel": "RTGS",
    "time": "11:04",
    "branch": "Bangalore"
  },
  {
    "id": "T939",
    "source": "A1108",
    "target": "A1143",
    "amount": 80282,
    "channel": "RTGS",
    "time": "20:52",
    "branch": "Kolkata"
  },
  {
    "id": "T940",
    "source": "A1055",
    "target": "A1184",
    "amount": 99348,
    "channel": "RTGS",
    "time": "20:36",
    "branch": "Delhi"
  },
  {
    "id": "T941",
    "source": "A1198",
    "target": "A1057",
    "amount": 64367,
    "channel": "IMPS",
    "time": "05:33",
    "branch": "Mumbai"
  },
  {
    "id": "T942",
    "source": "A1191",
    "target": "A1157",
    "amount": 51745,
    "channel": "IMPS",
    "time": "22:56",
    "branch": "Chennai"
  },
  {
    "id": "T943",
    "source": "A1134",
    "target": "A1115",
    "amount": 55039,
    "channel": "RTGS",
    "time": "15:20",
    "branch": "Mumbai"
  },
  {
    "id": "T944",
    "source": "A1195",
    "target": "A1005",
    "amount": 96226,
    "channel": "UPI",
    "time": "07:40",
    "branch": "Mumbai"
  },
  {
    "id": "T945",
    "source": "A1067",
    "target": "A1141",
    "amount": 80893,
    "channel": "NEFT",
    "time": "02:14",
    "branch": "Bangalore"
  },
  {
    "id": "T946",
    "source": "A1050",
    "target": "A1163",
    "amount": 29390,
    "channel": "NEFT",
    "time": "02:24",
    "branch": "Chennai"
  },
  {
    "id": "T947",
    "source": "A1166",
    "target": "A1055",
    "amount": 92510,
    "channel": "RTGS",
    "time": "08:31",
    "branch": "Bangalore"
  },
  {
    "id": "T948",
    "source": "A1109",
    "target": "A1013",
    "amount": 5777,
    "channel": "IMPS",
    "time": "00:27",
    "branch": "Mumbai"
  },
  {
    "id": "T949",
    "source": "A1170",
    "target": "A1171",
    "amount": 50460,
    "channel": "RTGS",
    "time": "19:10",
    "branch": "Delhi"
  },
  {
    "id": "T950",
    "source": "A1104",
    "target": "A1059",
    "amount": 41965,
    "channel": "ATM",
    "time": "01:54",
    "branch": "Delhi"
  },
  {
    "id": "T951",
    "source": "A1015",
    "target": "A1027",
    "amount": 47916,
    "channel": "IMPS",
    "time": "13:40",
    "branch": "Bangalore"
  },
  {
    "id": "T952",
    "source": "A1104",
    "target": "A1113",
    "amount": 39258,
    "channel": "IMPS",
    "time": "14:27",
    "branch": "Chennai"
  },
  {
    "id": "T953",
    "source": "A1057",
    "target": "A1082",
    "amount": 74994,
    "channel": "UPI",
    "time": "02:34",
    "branch": "Kolkata"
  },
  {
    "id": "T954",
    "source": "A1067",
    "target": "A1029",
    "amount": 81577,
    "channel": "RTGS",
    "time": "11:23",
    "branch": "Chennai"
  },
  {
    "id": "T955",
    "source": "A1149",
    "target": "A1016",
    "amount": 75399,
    "channel": "NEFT",
    "time": "10:31",
    "branch": "Kolkata"
  },
  {
    "id": "T956",
    "source": "A1121",
    "target": "A1119",
    "amount": 67145,
    "channel": "NEFT",
    "time": "11:31",
    "branch": "Kolkata"
  },
  {
    "id": "T957",
    "source": "A1134",
    "target": "A1119",
    "amount": 8169,
    "channel": "UPI",
    "time": "07:45",
    "branch": "Kolkata"
  },
  {
    "id": "T958",
    "source": "A1169",
    "target": "A1116",
    "amount": 80620,
    "channel": "ATM",
    "time": "19:38",
    "branch": "Bangalore"
  },
  {
    "id": "T959",
    "source": "A1111",
    "target": "A1047",
    "amount": 51314,
    "channel": "IMPS",
    "time": "10:40",
    "branch": "Kolkata"
  },
  {
    "id": "T960",
    "source": "A1062",
    "target": "A1130",
    "amount": 41432,
    "channel": "ATM",
    "time": "20:01",
    "branch": "Bangalore"
  },
  {
    "id": "T961",
    "source": "A1180",
    "target": "A1153",
    "amount": 40187,
    "channel": "UPI",
    "time": "08:39",
    "branch": "Bangalore"
  },
  {
    "id": "T962",
    "source": "A1013",
    "target": "A1115",
    "amount": 8032,
    "channel": "IMPS",
    "time": "12:00",
    "branch": "Chennai"
  },
  {
    "id": "T963",
    "source": "A1056",
    "target": "A1127",
    "amount": 34244,
    "channel": "UPI",
    "time": "06:36",
    "branch": "Delhi"
  },
  {
    "id": "T964",
    "source": "A1169",
    "target": "A1108",
    "amount": 37462,
    "channel": "IMPS",
    "time": "14:59",
    "branch": "Chennai"
  },
  {
    "id": "T965",
    "source": "A1103",
    "target": "A1111",
    "amount": 30572,
    "channel": "NEFT",
    "time": "18:59",
    "branch": "Mumbai"
  },
  {
    "id": "T966",
    "source": "A1193",
    "target": "A1172",
    "amount": 64173,
    "channel": "IMPS",
    "time": "01:21",
    "branch": "Chennai"
  },
  {
    "id": "T967",
    "source": "A1047",
    "target": "A1045",
    "amount": 88384,
    "channel": "RTGS",
    "time": "04:05",
    "branch": "Bangalore"
  },
  {
    "id": "T968",
    "source": "A1175",
    "target": "A1180",
    "amount": 84964,
    "channel": "RTGS",
    "time": "21:47",
    "branch": "Delhi"
  },
  {
    "id": "T969",
    "source": "A1003",
    "target": "A1143",
    "amount": 75978,
    "channel": "RTGS",
    "time": "21:24",
    "branch": "Chennai"
  },
  {
    "id": "T970",
    "source": "A1174",
    "target": "A1139",
    "amount": 11904,
    "channel": "NEFT",
    "time": "03:14",
    "branch": "Mumbai"
  },
  {
    "id": "T971",
    "source": "A1034",
    "target": "A1012",
    "amount": 56217,
    "channel": "ATM",
    "time": "11:41",
    "branch": "Delhi"
  },
  {
    "id": "T972",
    "source": "A1093",
    "target": "A1027",
    "amount": 54489,
    "channel": "ATM",
    "time": "16:50",
    "branch": "Delhi"
  },
  {
    "id": "T973",
    "source": "A1090",
    "target": "A1193",
    "amount": 78962,
    "channel": "IMPS",
    "time": "02:05",
    "branch": "Bangalore"
  },
  {
    "id": "T974",
    "source": "A1183",
    "target": "A1083",
    "amount": 74807,
    "channel": "UPI",
    "time": "13:14",
    "branch": "Mumbai"
  },
  {
    "id": "T975",
    "source": "A1038",
    "target": "A1135",
    "amount": 69111,
    "channel": "ATM",
    "time": "13:37",
    "branch": "Bangalore"
  },
  {
    "id": "T976",
    "source": "A1006",
    "target": "A1032",
    "amount": 44387,
    "channel": "NEFT",
    "time": "08:31",
    "branch": "Bangalore"
  },
  {
    "id": "T977",
    "source": "A1123",
    "target": "A1026",
    "amount": 88784,
    "channel": "RTGS",
    "time": "10:23",
    "branch": "Mumbai"
  },
  {
    "id": "T978",
    "source": "A1031",
    "target": "A1130",
    "amount": 76124,
    "channel": "UPI",
    "time": "02:51",
    "branch": "Chennai"
  },
  {
    "id": "T979",
    "source": "A1008",
    "target": "A1039",
    "amount": 39704,
    "channel": "UPI",
    "time": "03:11",
    "branch": "Bangalore"
  },
  {
    "id": "T980",
    "source": "A1085",
    "target": "A1058",
    "amount": 80717,
    "channel": "UPI",
    "time": "01:40",
    "branch": "Delhi"
  },
  {
    "id": "T981",
    "source": "A1069",
    "target": "A1161",
    "amount": 52216,
    "channel": "ATM",
    "time": "23:30",
    "branch": "Delhi"
  },
  {
    "id": "T982",
    "source": "A1140",
    "target": "A1181",
    "amount": 27485,
    "channel": "RTGS",
    "time": "22:39",
    "branch": "Chennai"
  },
  {
    "id": "T983",
    "source": "A1197",
    "target": "A1014",
    "amount": 26802,
    "channel": "NEFT",
    "time": "07:03",
    "branch": "Kolkata"
  },
  {
    "id": "T984",
    "source": "A1152",
    "target": "A1067",
    "amount": 44164,
    "channel": "NEFT",
    "time": "12:10",
    "branch": "Kolkata"
  },
  {
    "id": "T985",
    "source": "A1083",
    "target": "A1183",
    "amount": 21097,
    "channel": "ATM",
    "time": "16:36",
    "branch": "Bangalore"
  },
  {
    "id": "T986",
    "source": "A1171",
    "target": "A1173",
    "amount": 30695,
    "channel": "UPI",
    "time": "05:30",
    "branch": "Kolkata"
  },
  {
    "id": "T987",
    "source": "A1154",
    "target": "A1172",
    "amount": 19493,
    "channel": "RTGS",
    "time": "22:14",
    "branch": "Bangalore"
  },
  {
    "id": "T988",
    "source": "A1145",
    "target": "A1132",
    "amount": 6495,
    "channel": "UPI",
    "time": "04:52",
    "branch": "Chennai"
  },
  {
    "id": "T989",
    "source": "A1194",
    "target": "A1050",
    "amount": 33962,
    "channel": "NEFT",
    "time": "01:47",
    "branch": "Kolkata"
  },
  {
    "id": "T990",
    "source": "A1088",
    "target": "A1052",
    "amount": 52111,
    "channel": "UPI",
    "time": "19:52",
    "branch": "Delhi"
  },
  {
    "id": "T991",
    "source": "A1007",
    "target": "A1037",
    "amount": 57151,
    "channel": "RTGS",
    "time": "21:00",
    "branch": "Kolkata"
  },
  {
    "id": "T992",
    "source": "A1012",
    "target": "A1057",
    "amount": 8987,
    "channel": "UPI",
    "time": "02:15",
    "branch": "Delhi"
  },
  {
    "id": "T993",
    "source": "A1165",
    "target": "A1134",
    "amount": 16995,
    "channel": "NEFT",
    "time": "07:36",
    "branch": "Bangalore"
  },
  {
    "id": "T994",
    "source": "A1003",
    "target": "A1184",
    "amount": 51538,
    "channel": "UPI",
    "time": "06:37",
    "branch": "Mumbai"
  },
  {
    "id": "T995",
    "source": "A1036",
    "target": "A1086",
    "amount": 39646,
    "channel": "ATM",
    "time": "20:55",
    "branch": "Delhi"
  },
  {
    "id": "T996",
    "source": "A1093",
    "target": "A1195",
    "amount": 7436,
    "channel": "IMPS",
    "time": "15:53",
    "branch": "Mumbai"
  },
  {
    "id": "T997",
    "source": "A1072",
    "target": "A1149",
    "amount": 24896,
    "channel": "UPI",
    "time": "11:54",
    "branch": "Bangalore"
  },
  {
    "id": "T998",
    "source": "A1055",
    "target": "A1070",
    "amount": 6165,
    "channel": "NEFT",
    "time": "22:10",
    "branch": "Bangalore"
  },
  {
    "id": "T999",
    "source": "A1153",
    "target": "A1167",
    "amount": 80211,
    "channel": "IMPS",
    "time": "00:04",
    "branch": "Mumbai"
  },
  {
    "id": "T1000",
    "source": "A1091",
    "target": "A1112",
    "amount": 30034,
    "channel": "UPI",
    "time": "08:29",
    "branch": "Chennai"
  },
  {
    "id": "T1001",
    "source": "A1041",
    "target": "A1114",
    "amount": 6525,
    "channel": "NEFT",
    "time": "23:08",
    "branch": "Kolkata"
  },
  {
    "id": "T1002",
    "source": "A1186",
    "target": "A1020",
    "amount": 51866,
    "channel": "RTGS",
    "time": "02:48",
    "branch": "Delhi"
  },
  {
    "id": "T1003",
    "source": "A1115",
    "target": "A1097",
    "amount": 25439,
    "channel": "NEFT",
    "time": "01:59",
    "branch": "Chennai"
  },
  {
    "id": "T1004",
    "source": "A1009",
    "target": "A1192",
    "amount": 39445,
    "channel": "ATM",
    "time": "16:04",
    "branch": "Kolkata"
  },
  {
    "id": "T1005",
    "source": "A1062",
    "target": "A1160",
    "amount": 76208,
    "channel": "ATM",
    "time": "08:07",
    "branch": "Chennai"
  },
  {
    "id": "T1006",
    "source": "A1011",
    "target": "A1160",
    "amount": 42283,
    "channel": "ATM",
    "time": "09:31",
    "branch": "Chennai"
  },
  {
    "id": "T1007",
    "source": "A1018",
    "target": "A1180",
    "amount": 83633,
    "channel": "RTGS",
    "time": "11:44",
    "branch": "Mumbai"
  },
  {
    "id": "T1008",
    "source": "A1021",
    "target": "A1005",
    "amount": 93326,
    "channel": "ATM",
    "time": "16:08",
    "branch": "Mumbai"
  },
  {
    "id": "T1009",
    "source": "A1178",
    "target": "A1192",
    "amount": 34017,
    "channel": "ATM",
    "time": "23:39",
    "branch": "Kolkata"
  },
  {
    "id": "T1010",
    "source": "A1039",
    "target": "A1127",
    "amount": 78115,
    "channel": "IMPS",
    "time": "07:57",
    "branch": "Delhi"
  },
  {
    "id": "T1011",
    "source": "A1015",
    "target": "A1131",
    "amount": 8944,
    "channel": "RTGS",
    "time": "05:27",
    "branch": "Chennai"
  },
  {
    "id": "T1012",
    "source": "A1117",
    "target": "A1010",
    "amount": 16943,
    "channel": "UPI",
    "time": "06:09",
    "branch": "Bangalore"
  },
  {
    "id": "T1013",
    "source": "A1050",
    "target": "A1138",
    "amount": 62425,
    "channel": "IMPS",
    "time": "09:37",
    "branch": "Delhi"
  },
  {
    "id": "T1014",
    "source": "A1082",
    "target": "A1074",
    "amount": 88662,
    "channel": "UPI",
    "time": "15:50",
    "branch": "Bangalore"
  },
  {
    "id": "T1015",
    "source": "A1062",
    "target": "A1184",
    "amount": 15184,
    "channel": "ATM",
    "time": "07:16",
    "branch": "Bangalore"
  },
  {
    "id": "T1016",
    "source": "A1171",
    "target": "A1060",
    "amount": 94035,
    "channel": "ATM",
    "time": "04:10",
    "branch": "Kolkata"
  },
  {
    "id": "T1017",
    "source": "A1058",
    "target": "A1140",
    "amount": 83100,
    "channel": "IMPS",
    "time": "01:34",
    "branch": "Kolkata"
  },
  {
    "id": "T1018",
    "source": "A1139",
    "target": "A1098",
    "amount": 82203,
    "channel": "UPI",
    "time": "08:18",
    "branch": "Chennai"
  },
  {
    "id": "T1019",
    "source": "A1007",
    "target": "A1101",
    "amount": 21173,
    "channel": "ATM",
    "time": "04:32",
    "branch": "Chennai"
  },
  {
    "id": "T1020",
    "source": "A1142",
    "target": "A1189",
    "amount": 7489,
    "channel": "RTGS",
    "time": "04:57",
    "branch": "Mumbai"
  },
  {
    "id": "T1021",
    "source": "A1092",
    "target": "A1116",
    "amount": 35228,
    "channel": "UPI",
    "time": "01:16",
    "branch": "Kolkata"
  },
  {
    "id": "T1022",
    "source": "A1159",
    "target": "A1020",
    "amount": 36407,
    "channel": "IMPS",
    "time": "21:23",
    "branch": "Bangalore"
  },
  {
    "id": "T1023",
    "source": "A1172",
    "target": "A1107",
    "amount": 34177,
    "channel": "RTGS",
    "time": "19:26",
    "branch": "Kolkata"
  },
  {
    "id": "T1024",
    "source": "A1141",
    "target": "A1069",
    "amount": 61015,
    "channel": "NEFT",
    "time": "22:02",
    "branch": "Delhi"
  },
  {
    "id": "T1025",
    "source": "A1043",
    "target": "A1139",
    "amount": 21156,
    "channel": "ATM",
    "time": "23:51",
    "branch": "Bangalore"
  },
  {
    "id": "T1026",
    "source": "A1073",
    "target": "A1104",
    "amount": 15239,
    "channel": "NEFT",
    "time": "09:54",
    "branch": "Kolkata"
  },
  {
    "id": "T1027",
    "source": "A1126",
    "target": "A1070",
    "amount": 5272,
    "channel": "UPI",
    "time": "15:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1028",
    "source": "A1064",
    "target": "A1103",
    "amount": 67842,
    "channel": "ATM",
    "time": "10:57",
    "branch": "Delhi"
  },
  {
    "id": "T1029",
    "source": "A1082",
    "target": "A1161",
    "amount": 4031,
    "channel": "ATM",
    "time": "11:10",
    "branch": "Kolkata"
  },
  {
    "id": "T1030",
    "source": "A1032",
    "target": "A1155",
    "amount": 14911,
    "channel": "NEFT",
    "time": "15:34",
    "branch": "Chennai"
  },
  {
    "id": "T1031",
    "source": "A1123",
    "target": "A1108",
    "amount": 63209,
    "channel": "RTGS",
    "time": "16:13",
    "branch": "Chennai"
  },
  {
    "id": "T1032",
    "source": "A1115",
    "target": "A1158",
    "amount": 20611,
    "channel": "RTGS",
    "time": "08:24",
    "branch": "Chennai"
  },
  {
    "id": "T1033",
    "source": "A1064",
    "target": "A1121",
    "amount": 57960,
    "channel": "IMPS",
    "time": "19:24",
    "branch": "Bangalore"
  },
  {
    "id": "T1034",
    "source": "A1033",
    "target": "A1088",
    "amount": 15945,
    "channel": "IMPS",
    "time": "20:42",
    "branch": "Bangalore"
  },
  {
    "id": "T1035",
    "source": "A1184",
    "target": "A1042",
    "amount": 67494,
    "channel": "RTGS",
    "time": "18:31",
    "branch": "Mumbai"
  },
  {
    "id": "T1036",
    "source": "A1104",
    "target": "A1142",
    "amount": 3829,
    "channel": "NEFT",
    "time": "10:19",
    "branch": "Mumbai"
  },
  {
    "id": "T1037",
    "source": "A1109",
    "target": "A1048",
    "amount": 53322,
    "channel": "NEFT",
    "time": "04:47",
    "branch": "Delhi"
  },
  {
    "id": "T1038",
    "source": "A1060",
    "target": "A1083",
    "amount": 95579,
    "channel": "UPI",
    "time": "10:54",
    "branch": "Bangalore"
  },
  {
    "id": "T1039",
    "source": "A1144",
    "target": "A1146",
    "amount": 77300,
    "channel": "NEFT",
    "time": "01:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1040",
    "source": "A1106",
    "target": "A1025",
    "amount": 23170,
    "channel": "ATM",
    "time": "23:24",
    "branch": "Kolkata"
  },
  {
    "id": "T1041",
    "source": "A1098",
    "target": "A1150",
    "amount": 5119,
    "channel": "NEFT",
    "time": "20:40",
    "branch": "Chennai"
  },
  {
    "id": "T1042",
    "source": "A1046",
    "target": "A1067",
    "amount": 77757,
    "channel": "IMPS",
    "time": "10:32",
    "branch": "Mumbai"
  },
  {
    "id": "T1043",
    "source": "A1184",
    "target": "A1134",
    "amount": 45654,
    "channel": "ATM",
    "time": "01:26",
    "branch": "Bangalore"
  },
  {
    "id": "T1044",
    "source": "A1153",
    "target": "A1030",
    "amount": 78579,
    "channel": "UPI",
    "time": "23:51",
    "branch": "Delhi"
  },
  {
    "id": "T1045",
    "source": "A1189",
    "target": "A1002",
    "amount": 37084,
    "channel": "ATM",
    "time": "01:43",
    "branch": "Delhi"
  },
  {
    "id": "T1046",
    "source": "A1086",
    "target": "A1152",
    "amount": 74144,
    "channel": "IMPS",
    "time": "12:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1047",
    "source": "A1072",
    "target": "A1084",
    "amount": 79455,
    "channel": "NEFT",
    "time": "23:02",
    "branch": "Kolkata"
  },
  {
    "id": "T1048",
    "source": "A1113",
    "target": "A1142",
    "amount": 70404,
    "channel": "IMPS",
    "time": "06:36",
    "branch": "Kolkata"
  },
  {
    "id": "T1049",
    "source": "A1190",
    "target": "A1198",
    "amount": 33071,
    "channel": "ATM",
    "time": "04:06",
    "branch": "Chennai"
  },
  {
    "id": "T1050",
    "source": "A1066",
    "target": "A1100",
    "amount": 46205,
    "channel": "NEFT",
    "time": "04:35",
    "branch": "Mumbai"
  },
  {
    "id": "T1051",
    "source": "A1074",
    "target": "A1003",
    "amount": 19538,
    "channel": "NEFT",
    "time": "22:34",
    "branch": "Chennai"
  },
  {
    "id": "T1052",
    "source": "A1134",
    "target": "A1147",
    "amount": 30655,
    "channel": "RTGS",
    "time": "22:57",
    "branch": "Mumbai"
  },
  {
    "id": "T1053",
    "source": "A1086",
    "target": "A1031",
    "amount": 31506,
    "channel": "UPI",
    "time": "03:29",
    "branch": "Chennai"
  },
  {
    "id": "T1054",
    "source": "A1152",
    "target": "A1191",
    "amount": 50768,
    "channel": "NEFT",
    "time": "05:48",
    "branch": "Chennai"
  },
  {
    "id": "T1055",
    "source": "A1150",
    "target": "A1084",
    "amount": 68756,
    "channel": "RTGS",
    "time": "01:07",
    "branch": "Bangalore"
  },
  {
    "id": "T1056",
    "source": "A1181",
    "target": "A1091",
    "amount": 26937,
    "channel": "UPI",
    "time": "01:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1057",
    "source": "A1132",
    "target": "A1070",
    "amount": 49930,
    "channel": "ATM",
    "time": "04:07",
    "branch": "Bangalore"
  },
  {
    "id": "T1058",
    "source": "A1022",
    "target": "A1159",
    "amount": 77533,
    "channel": "ATM",
    "time": "13:09",
    "branch": "Mumbai"
  },
  {
    "id": "T1059",
    "source": "A1034",
    "target": "A1115",
    "amount": 8335,
    "channel": "ATM",
    "time": "04:36",
    "branch": "Chennai"
  },
  {
    "id": "T1060",
    "source": "A1178",
    "target": "A1001",
    "amount": 52769,
    "channel": "UPI",
    "time": "08:27",
    "branch": "Delhi"
  },
  {
    "id": "T1061",
    "source": "A1124",
    "target": "A1112",
    "amount": 30614,
    "channel": "NEFT",
    "time": "18:55",
    "branch": "Delhi"
  },
  {
    "id": "T1062",
    "source": "A1189",
    "target": "A1182",
    "amount": 38824,
    "channel": "ATM",
    "time": "18:43",
    "branch": "Mumbai"
  },
  {
    "id": "T1063",
    "source": "A1039",
    "target": "A1124",
    "amount": 21612,
    "channel": "RTGS",
    "time": "08:37",
    "branch": "Kolkata"
  },
  {
    "id": "T1064",
    "source": "A1113",
    "target": "A1149",
    "amount": 52341,
    "channel": "NEFT",
    "time": "00:23",
    "branch": "Delhi"
  },
  {
    "id": "T1065",
    "source": "A1157",
    "target": "A1048",
    "amount": 59068,
    "channel": "ATM",
    "time": "20:40",
    "branch": "Bangalore"
  },
  {
    "id": "T1066",
    "source": "A1074",
    "target": "A1021",
    "amount": 6424,
    "channel": "RTGS",
    "time": "07:23",
    "branch": "Chennai"
  },
  {
    "id": "T1067",
    "source": "A1156",
    "target": "A1186",
    "amount": 52857,
    "channel": "IMPS",
    "time": "11:26",
    "branch": "Chennai"
  },
  {
    "id": "T1068",
    "source": "A1106",
    "target": "A1037",
    "amount": 16915,
    "channel": "IMPS",
    "time": "14:41",
    "branch": "Mumbai"
  },
  {
    "id": "T1069",
    "source": "A1027",
    "target": "A1149",
    "amount": 72685,
    "channel": "UPI",
    "time": "18:13",
    "branch": "Kolkata"
  },
  {
    "id": "T1070",
    "source": "A1136",
    "target": "A1167",
    "amount": 89760,
    "channel": "NEFT",
    "time": "04:03",
    "branch": "Kolkata"
  },
  {
    "id": "T1071",
    "source": "A1091",
    "target": "A1041",
    "amount": 2874,
    "channel": "ATM",
    "time": "16:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1072",
    "source": "A1047",
    "target": "A1155",
    "amount": 65490,
    "channel": "IMPS",
    "time": "17:26",
    "branch": "Kolkata"
  },
  {
    "id": "T1073",
    "source": "A1130",
    "target": "A1051",
    "amount": 5071,
    "channel": "UPI",
    "time": "08:43",
    "branch": "Bangalore"
  },
  {
    "id": "T1074",
    "source": "A1144",
    "target": "A1140",
    "amount": 2128,
    "channel": "RTGS",
    "time": "20:35",
    "branch": "Delhi"
  },
  {
    "id": "T1075",
    "source": "A1126",
    "target": "A1100",
    "amount": 9944,
    "channel": "ATM",
    "time": "20:15",
    "branch": "Kolkata"
  },
  {
    "id": "T1076",
    "source": "A1112",
    "target": "A1011",
    "amount": 40371,
    "channel": "IMPS",
    "time": "06:34",
    "branch": "Delhi"
  },
  {
    "id": "T1077",
    "source": "A1140",
    "target": "A1126",
    "amount": 5056,
    "channel": "IMPS",
    "time": "08:36",
    "branch": "Delhi"
  },
  {
    "id": "T1078",
    "source": "A1082",
    "target": "A1023",
    "amount": 23133,
    "channel": "ATM",
    "time": "15:36",
    "branch": "Delhi"
  },
  {
    "id": "T1079",
    "source": "A1009",
    "target": "A1173",
    "amount": 37573,
    "channel": "ATM",
    "time": "06:50",
    "branch": "Kolkata"
  },
  {
    "id": "T1080",
    "source": "A1179",
    "target": "A1166",
    "amount": 88611,
    "channel": "IMPS",
    "time": "17:15",
    "branch": "Bangalore"
  },
  {
    "id": "T1081",
    "source": "A1190",
    "target": "A1062",
    "amount": 23053,
    "channel": "ATM",
    "time": "03:38",
    "branch": "Kolkata"
  },
  {
    "id": "T1082",
    "source": "A1024",
    "target": "A1140",
    "amount": 37582,
    "channel": "IMPS",
    "time": "21:31",
    "branch": "Delhi"
  },
  {
    "id": "T1083",
    "source": "A1017",
    "target": "A1035",
    "amount": 56331,
    "channel": "ATM",
    "time": "08:29",
    "branch": "Delhi"
  },
  {
    "id": "T1084",
    "source": "A1019",
    "target": "A1165",
    "amount": 53628,
    "channel": "ATM",
    "time": "02:59",
    "branch": "Kolkata"
  },
  {
    "id": "T1085",
    "source": "A1130",
    "target": "A1043",
    "amount": 79625,
    "channel": "RTGS",
    "time": "20:20",
    "branch": "Kolkata"
  },
  {
    "id": "T1086",
    "source": "A1177",
    "target": "A1149",
    "amount": 94222,
    "channel": "ATM",
    "time": "08:49",
    "branch": "Bangalore"
  },
  {
    "id": "T1087",
    "source": "A1007",
    "target": "A1107",
    "amount": 99288,
    "channel": "ATM",
    "time": "13:58",
    "branch": "Kolkata"
  },
  {
    "id": "T1088",
    "source": "A1127",
    "target": "A1106",
    "amount": 648,
    "channel": "ATM",
    "time": "10:10",
    "branch": "Delhi"
  },
  {
    "id": "T1089",
    "source": "A1075",
    "target": "A1094",
    "amount": 57229,
    "channel": "RTGS",
    "time": "14:35",
    "branch": "Kolkata"
  },
  {
    "id": "T1090",
    "source": "A1146",
    "target": "A1024",
    "amount": 1083,
    "channel": "UPI",
    "time": "02:31",
    "branch": "Kolkata"
  },
  {
    "id": "T1091",
    "source": "A1078",
    "target": "A1166",
    "amount": 42343,
    "channel": "IMPS",
    "time": "22:24",
    "branch": "Kolkata"
  },
  {
    "id": "T1092",
    "source": "A1058",
    "target": "A1142",
    "amount": 91526,
    "channel": "IMPS",
    "time": "15:35",
    "branch": "Mumbai"
  },
  {
    "id": "T1093",
    "source": "A1117",
    "target": "A1185",
    "amount": 86771,
    "channel": "UPI",
    "time": "16:34",
    "branch": "Bangalore"
  },
  {
    "id": "T1094",
    "source": "A1092",
    "target": "A1082",
    "amount": 5490,
    "channel": "RTGS",
    "time": "20:41",
    "branch": "Bangalore"
  },
  {
    "id": "T1095",
    "source": "A1105",
    "target": "A1056",
    "amount": 7344,
    "channel": "RTGS",
    "time": "10:34",
    "branch": "Delhi"
  },
  {
    "id": "T1096",
    "source": "A1097",
    "target": "A1083",
    "amount": 53724,
    "channel": "UPI",
    "time": "11:37",
    "branch": "Chennai"
  },
  {
    "id": "T1097",
    "source": "A1148",
    "target": "A1023",
    "amount": 82709,
    "channel": "IMPS",
    "time": "12:26",
    "branch": "Bangalore"
  },
  {
    "id": "T1098",
    "source": "A1013",
    "target": "A1004",
    "amount": 31542,
    "channel": "UPI",
    "time": "10:59",
    "branch": "Delhi"
  },
  {
    "id": "T1099",
    "source": "A1163",
    "target": "A1192",
    "amount": 16840,
    "channel": "ATM",
    "time": "23:21",
    "branch": "Delhi"
  },
  {
    "id": "T1100",
    "source": "A1056",
    "target": "A1031",
    "amount": 78257,
    "channel": "IMPS",
    "time": "06:25",
    "branch": "Delhi"
  },
  {
    "id": "T1101",
    "source": "A1127",
    "target": "A1160",
    "amount": 76571,
    "channel": "NEFT",
    "time": "11:07",
    "branch": "Chennai"
  },
  {
    "id": "T1102",
    "source": "A1145",
    "target": "A1177",
    "amount": 50569,
    "channel": "NEFT",
    "time": "17:33",
    "branch": "Mumbai"
  },
  {
    "id": "T1103",
    "source": "A1054",
    "target": "A1088",
    "amount": 96115,
    "channel": "UPI",
    "time": "22:59",
    "branch": "Mumbai"
  },
  {
    "id": "T1104",
    "source": "A1067",
    "target": "A1139",
    "amount": 18310,
    "channel": "ATM",
    "time": "19:21",
    "branch": "Mumbai"
  },
  {
    "id": "T1105",
    "source": "A1012",
    "target": "A1068",
    "amount": 57967,
    "channel": "IMPS",
    "time": "17:13",
    "branch": "Chennai"
  },
  {
    "id": "T1106",
    "source": "A1132",
    "target": "A1138",
    "amount": 5738,
    "channel": "UPI",
    "time": "07:23",
    "branch": "Chennai"
  },
  {
    "id": "T1107",
    "source": "A1025",
    "target": "A1176",
    "amount": 34649,
    "channel": "UPI",
    "time": "05:05",
    "branch": "Kolkata"
  },
  {
    "id": "T1108",
    "source": "A1091",
    "target": "A1112",
    "amount": 32328,
    "channel": "IMPS",
    "time": "02:14",
    "branch": "Mumbai"
  },
  {
    "id": "T1109",
    "source": "A1103",
    "target": "A1095",
    "amount": 19194,
    "channel": "UPI",
    "time": "15:38",
    "branch": "Bangalore"
  },
  {
    "id": "T1110",
    "source": "A1081",
    "target": "A1182",
    "amount": 91873,
    "channel": "ATM",
    "time": "00:17",
    "branch": "Kolkata"
  },
  {
    "id": "T1111",
    "source": "A1091",
    "target": "A1004",
    "amount": 89992,
    "channel": "ATM",
    "time": "14:21",
    "branch": "Bangalore"
  },
  {
    "id": "T1112",
    "source": "A1099",
    "target": "A1165",
    "amount": 26178,
    "channel": "NEFT",
    "time": "23:55",
    "branch": "Bangalore"
  },
  {
    "id": "T1113",
    "source": "A1067",
    "target": "A1033",
    "amount": 44998,
    "channel": "RTGS",
    "time": "15:04",
    "branch": "Mumbai"
  },
  {
    "id": "T1114",
    "source": "A1098",
    "target": "A1147",
    "amount": 42055,
    "channel": "IMPS",
    "time": "03:12",
    "branch": "Kolkata"
  },
  {
    "id": "T1115",
    "source": "A1178",
    "target": "A1057",
    "amount": 79691,
    "channel": "NEFT",
    "time": "01:07",
    "branch": "Chennai"
  },
  {
    "id": "T1116",
    "source": "A1097",
    "target": "A1087",
    "amount": 23417,
    "channel": "ATM",
    "time": "11:05",
    "branch": "Kolkata"
  },
  {
    "id": "T1117",
    "source": "A1050",
    "target": "A1191",
    "amount": 61680,
    "channel": "RTGS",
    "time": "05:28",
    "branch": "Kolkata"
  },
  {
    "id": "T1118",
    "source": "A1105",
    "target": "A1127",
    "amount": 67378,
    "channel": "UPI",
    "time": "11:05",
    "branch": "Delhi"
  },
  {
    "id": "T1119",
    "source": "A1096",
    "target": "A1024",
    "amount": 65373,
    "channel": "NEFT",
    "time": "07:43",
    "branch": "Delhi"
  },
  {
    "id": "T1120",
    "source": "A1178",
    "target": "A1016",
    "amount": 18958,
    "channel": "ATM",
    "time": "01:30",
    "branch": "Delhi"
  },
  {
    "id": "T1121",
    "source": "A1051",
    "target": "A1082",
    "amount": 39304,
    "channel": "RTGS",
    "time": "14:36",
    "branch": "Kolkata"
  },
  {
    "id": "T1122",
    "source": "A1074",
    "target": "A1091",
    "amount": 35389,
    "channel": "IMPS",
    "time": "14:37",
    "branch": "Mumbai"
  },
  {
    "id": "T1123",
    "source": "A1132",
    "target": "A1081",
    "amount": 28269,
    "channel": "IMPS",
    "time": "22:13",
    "branch": "Mumbai"
  },
  {
    "id": "T1124",
    "source": "A1107",
    "target": "A1123",
    "amount": 94319,
    "channel": "NEFT",
    "time": "23:49",
    "branch": "Chennai"
  },
  {
    "id": "T1125",
    "source": "A1090",
    "target": "A1030",
    "amount": 24728,
    "channel": "UPI",
    "time": "05:15",
    "branch": "Chennai"
  },
  {
    "id": "T1126",
    "source": "A1094",
    "target": "A1173",
    "amount": 54817,
    "channel": "RTGS",
    "time": "01:10",
    "branch": "Chennai"
  },
  {
    "id": "T1127",
    "source": "A1000",
    "target": "A1137",
    "amount": 41898,
    "channel": "ATM",
    "time": "03:12",
    "branch": "Chennai"
  },
  {
    "id": "T1128",
    "source": "A1098",
    "target": "A1133",
    "amount": 77338,
    "channel": "ATM",
    "time": "15:27",
    "branch": "Chennai"
  },
  {
    "id": "T1129",
    "source": "A1187",
    "target": "A1146",
    "amount": 31151,
    "channel": "IMPS",
    "time": "12:02",
    "branch": "Kolkata"
  },
  {
    "id": "T1130",
    "source": "A1104",
    "target": "A1099",
    "amount": 84859,
    "channel": "UPI",
    "time": "15:24",
    "branch": "Chennai"
  },
  {
    "id": "T1131",
    "source": "A1177",
    "target": "A1078",
    "amount": 81199,
    "channel": "UPI",
    "time": "06:02",
    "branch": "Chennai"
  },
  {
    "id": "T1132",
    "source": "A1099",
    "target": "A1170",
    "amount": 53610,
    "channel": "ATM",
    "time": "10:43",
    "branch": "Delhi"
  },
  {
    "id": "T1133",
    "source": "A1017",
    "target": "A1013",
    "amount": 79344,
    "channel": "RTGS",
    "time": "10:45",
    "branch": "Mumbai"
  },
  {
    "id": "T1134",
    "source": "A1105",
    "target": "A1096",
    "amount": 26451,
    "channel": "UPI",
    "time": "11:59",
    "branch": "Kolkata"
  },
  {
    "id": "T1135",
    "source": "A1180",
    "target": "A1057",
    "amount": 17014,
    "channel": "ATM",
    "time": "13:10",
    "branch": "Chennai"
  },
  {
    "id": "T1136",
    "source": "A1118",
    "target": "A1025",
    "amount": 94604,
    "channel": "NEFT",
    "time": "10:31",
    "branch": "Kolkata"
  },
  {
    "id": "T1137",
    "source": "A1196",
    "target": "A1170",
    "amount": 44796,
    "channel": "RTGS",
    "time": "04:00",
    "branch": "Bangalore"
  },
  {
    "id": "T1138",
    "source": "A1038",
    "target": "A1025",
    "amount": 10865,
    "channel": "ATM",
    "time": "15:45",
    "branch": "Bangalore"
  },
  {
    "id": "T1139",
    "source": "A1165",
    "target": "A1099",
    "amount": 59467,
    "channel": "UPI",
    "time": "09:18",
    "branch": "Mumbai"
  },
  {
    "id": "T1140",
    "source": "A1141",
    "target": "A1113",
    "amount": 81970,
    "channel": "ATM",
    "time": "11:34",
    "branch": "Chennai"
  },
  {
    "id": "T1141",
    "source": "A1193",
    "target": "A1113",
    "amount": 78853,
    "channel": "RTGS",
    "time": "19:20",
    "branch": "Bangalore"
  },
  {
    "id": "T1142",
    "source": "A1000",
    "target": "A1059",
    "amount": 10930,
    "channel": "IMPS",
    "time": "16:13",
    "branch": "Mumbai"
  },
  {
    "id": "T1143",
    "source": "A1063",
    "target": "A1062",
    "amount": 11103,
    "channel": "UPI",
    "time": "11:41",
    "branch": "Bangalore"
  },
  {
    "id": "T1144",
    "source": "A1161",
    "target": "A1114",
    "amount": 23096,
    "channel": "ATM",
    "time": "21:33",
    "branch": "Mumbai"
  },
  {
    "id": "T1145",
    "source": "A1101",
    "target": "A1064",
    "amount": 18029,
    "channel": "ATM",
    "time": "13:26",
    "branch": "Bangalore"
  },
  {
    "id": "T1146",
    "source": "A1157",
    "target": "A1171",
    "amount": 38965,
    "channel": "ATM",
    "time": "22:42",
    "branch": "Chennai"
  },
  {
    "id": "T1147",
    "source": "A1080",
    "target": "A1050",
    "amount": 15156,
    "channel": "NEFT",
    "time": "04:33",
    "branch": "Kolkata"
  },
  {
    "id": "T1148",
    "source": "A1177",
    "target": "A1109",
    "amount": 3427,
    "channel": "UPI",
    "time": "21:15",
    "branch": "Chennai"
  },
  {
    "id": "T1149",
    "source": "A1045",
    "target": "A1165",
    "amount": 59045,
    "channel": "IMPS",
    "time": "13:50",
    "branch": "Delhi"
  },
  {
    "id": "T1150",
    "source": "A1131",
    "target": "A1051",
    "amount": 53659,
    "channel": "RTGS",
    "time": "04:16",
    "branch": "Delhi"
  },
  {
    "id": "T1151",
    "source": "A1003",
    "target": "A1088",
    "amount": 39260,
    "channel": "UPI",
    "time": "08:21",
    "branch": "Delhi"
  },
  {
    "id": "T1152",
    "source": "A1133",
    "target": "A1145",
    "amount": 7196,
    "channel": "NEFT",
    "time": "06:15",
    "branch": "Kolkata"
  },
  {
    "id": "T1153",
    "source": "A1089",
    "target": "A1015",
    "amount": 46596,
    "channel": "NEFT",
    "time": "19:38",
    "branch": "Bangalore"
  },
  {
    "id": "T1154",
    "source": "A1141",
    "target": "A1165",
    "amount": 70907,
    "channel": "UPI",
    "time": "01:27",
    "branch": "Bangalore"
  },
  {
    "id": "T1155",
    "source": "A1189",
    "target": "A1154",
    "amount": 68395,
    "channel": "NEFT",
    "time": "01:33",
    "branch": "Mumbai"
  },
  {
    "id": "T1156",
    "source": "A1040",
    "target": "A1056",
    "amount": 27452,
    "channel": "ATM",
    "time": "10:37",
    "branch": "Chennai"
  },
  {
    "id": "T1157",
    "source": "A1097",
    "target": "A1010",
    "amount": 2135,
    "channel": "ATM",
    "time": "22:41",
    "branch": "Chennai"
  },
  {
    "id": "T1158",
    "source": "A1075",
    "target": "A1088",
    "amount": 6652,
    "channel": "ATM",
    "time": "16:45",
    "branch": "Kolkata"
  },
  {
    "id": "T1159",
    "source": "A1089",
    "target": "A1006",
    "amount": 84078,
    "channel": "ATM",
    "time": "19:37",
    "branch": "Delhi"
  },
  {
    "id": "T1160",
    "source": "A1132",
    "target": "A1131",
    "amount": 67401,
    "channel": "RTGS",
    "time": "08:22",
    "branch": "Delhi"
  },
  {
    "id": "T1161",
    "source": "A1003",
    "target": "A1025",
    "amount": 79204,
    "channel": "NEFT",
    "time": "14:16",
    "branch": "Kolkata"
  },
  {
    "id": "T1162",
    "source": "A1040",
    "target": "A1095",
    "amount": 45875,
    "channel": "ATM",
    "time": "06:10",
    "branch": "Bangalore"
  },
  {
    "id": "T1163",
    "source": "A1088",
    "target": "A1187",
    "amount": 87566,
    "channel": "NEFT",
    "time": "03:02",
    "branch": "Chennai"
  },
  {
    "id": "T1164",
    "source": "A1034",
    "target": "A1170",
    "amount": 17052,
    "channel": "IMPS",
    "time": "09:46",
    "branch": "Bangalore"
  },
  {
    "id": "T1165",
    "source": "A1104",
    "target": "A1051",
    "amount": 30745,
    "channel": "UPI",
    "time": "10:34",
    "branch": "Kolkata"
  },
  {
    "id": "T1166",
    "source": "A1104",
    "target": "A1164",
    "amount": 1928,
    "channel": "NEFT",
    "time": "11:50",
    "branch": "Bangalore"
  },
  {
    "id": "T1167",
    "source": "A1199",
    "target": "A1189",
    "amount": 14535,
    "channel": "RTGS",
    "time": "04:25",
    "branch": "Kolkata"
  },
  {
    "id": "T1168",
    "source": "A1199",
    "target": "A1074",
    "amount": 74186,
    "channel": "ATM",
    "time": "12:01",
    "branch": "Delhi"
  },
  {
    "id": "T1169",
    "source": "A1009",
    "target": "A1004",
    "amount": 81734,
    "channel": "RTGS",
    "time": "23:47",
    "branch": "Bangalore"
  },
  {
    "id": "T1170",
    "source": "A1080",
    "target": "A1189",
    "amount": 33465,
    "channel": "ATM",
    "time": "19:24",
    "branch": "Bangalore"
  },
  {
    "id": "T1171",
    "source": "A1015",
    "target": "A1064",
    "amount": 62829,
    "channel": "UPI",
    "time": "05:19",
    "branch": "Kolkata"
  },
  {
    "id": "T1172",
    "source": "A1053",
    "target": "A1032",
    "amount": 9601,
    "channel": "UPI",
    "time": "04:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1173",
    "source": "A1108",
    "target": "A1069",
    "amount": 51876,
    "channel": "NEFT",
    "time": "18:25",
    "branch": "Delhi"
  },
  {
    "id": "T1174",
    "source": "A1031",
    "target": "A1019",
    "amount": 95615,
    "channel": "IMPS",
    "time": "11:24",
    "branch": "Delhi"
  },
  {
    "id": "T1175",
    "source": "A1099",
    "target": "A1136",
    "amount": 5816,
    "channel": "UPI",
    "time": "10:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1176",
    "source": "A1002",
    "target": "A1130",
    "amount": 7583,
    "channel": "ATM",
    "time": "22:59",
    "branch": "Mumbai"
  },
  {
    "id": "T1177",
    "source": "A1112",
    "target": "A1110",
    "amount": 605,
    "channel": "ATM",
    "time": "01:15",
    "branch": "Bangalore"
  },
  {
    "id": "T1178",
    "source": "A1162",
    "target": "A1136",
    "amount": 85255,
    "channel": "UPI",
    "time": "07:50",
    "branch": "Chennai"
  },
  {
    "id": "T1179",
    "source": "A1191",
    "target": "A1070",
    "amount": 22784,
    "channel": "NEFT",
    "time": "14:14",
    "branch": "Bangalore"
  },
  {
    "id": "T1180",
    "source": "A1161",
    "target": "A1030",
    "amount": 85253,
    "channel": "IMPS",
    "time": "13:10",
    "branch": "Bangalore"
  },
  {
    "id": "T1181",
    "source": "A1050",
    "target": "A1012",
    "amount": 607,
    "channel": "RTGS",
    "time": "01:25",
    "branch": "Bangalore"
  },
  {
    "id": "T1182",
    "source": "A1086",
    "target": "A1005",
    "amount": 24405,
    "channel": "ATM",
    "time": "15:08",
    "branch": "Bangalore"
  },
  {
    "id": "T1183",
    "source": "A1017",
    "target": "A1087",
    "amount": 43031,
    "channel": "NEFT",
    "time": "18:52",
    "branch": "Delhi"
  },
  {
    "id": "T1184",
    "source": "A1044",
    "target": "A1045",
    "amount": 42237,
    "channel": "NEFT",
    "time": "12:55",
    "branch": "Delhi"
  },
  {
    "id": "T1185",
    "source": "A1076",
    "target": "A1006",
    "amount": 2165,
    "channel": "NEFT",
    "time": "21:50",
    "branch": "Kolkata"
  },
  {
    "id": "T1186",
    "source": "A1076",
    "target": "A1106",
    "amount": 46762,
    "channel": "UPI",
    "time": "15:56",
    "branch": "Delhi"
  },
  {
    "id": "T1187",
    "source": "A1138",
    "target": "A1094",
    "amount": 90925,
    "channel": "UPI",
    "time": "21:34",
    "branch": "Mumbai"
  },
  {
    "id": "T1188",
    "source": "A1014",
    "target": "A1021",
    "amount": 63883,
    "channel": "NEFT",
    "time": "17:36",
    "branch": "Mumbai"
  },
  {
    "id": "T1189",
    "source": "A1026",
    "target": "A1152",
    "amount": 91476,
    "channel": "RTGS",
    "time": "20:06",
    "branch": "Kolkata"
  },
  {
    "id": "T1190",
    "source": "A1016",
    "target": "A1038",
    "amount": 79400,
    "channel": "RTGS",
    "time": "15:21",
    "branch": "Bangalore"
  },
  {
    "id": "T1191",
    "source": "A1175",
    "target": "A1103",
    "amount": 27763,
    "channel": "IMPS",
    "time": "17:44",
    "branch": "Bangalore"
  },
  {
    "id": "T1192",
    "source": "A1185",
    "target": "A1084",
    "amount": 53514,
    "channel": "UPI",
    "time": "14:40",
    "branch": "Chennai"
  },
  {
    "id": "T1193",
    "source": "A1015",
    "target": "A1108",
    "amount": 15175,
    "channel": "RTGS",
    "time": "11:39",
    "branch": "Bangalore"
  },
  {
    "id": "T1194",
    "source": "A1111",
    "target": "A1011",
    "amount": 12057,
    "channel": "NEFT",
    "time": "07:12",
    "branch": "Mumbai"
  },
  {
    "id": "T1195",
    "source": "A1079",
    "target": "A1033",
    "amount": 45094,
    "channel": "ATM",
    "time": "03:37",
    "branch": "Chennai"
  },
  {
    "id": "T1196",
    "source": "A1133",
    "target": "A1095",
    "amount": 49540,
    "channel": "NEFT",
    "time": "02:13",
    "branch": "Mumbai"
  },
  {
    "id": "T1197",
    "source": "A1091",
    "target": "A1028",
    "amount": 4920,
    "channel": "RTGS",
    "time": "15:03",
    "branch": "Mumbai"
  },
  {
    "id": "T1198",
    "source": "A1082",
    "target": "A1102",
    "amount": 20446,
    "channel": "ATM",
    "time": "13:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1199",
    "source": "A1053",
    "target": "A1029",
    "amount": 87692,
    "channel": "NEFT",
    "time": "20:25",
    "branch": "Kolkata"
  },
  {
    "id": "T1200",
    "source": "A1053",
    "target": "A1140",
    "amount": 36391,
    "channel": "ATM",
    "time": "22:28",
    "branch": "Mumbai"
  },
  {
    "id": "T1201",
    "source": "A1085",
    "target": "A1137",
    "amount": 30369,
    "channel": "ATM",
    "time": "15:46",
    "branch": "Bangalore"
  },
  {
    "id": "T1202",
    "source": "A1017",
    "target": "A1033",
    "amount": 56370,
    "channel": "ATM",
    "time": "17:49",
    "branch": "Kolkata"
  },
  {
    "id": "T1203",
    "source": "A1088",
    "target": "A1081",
    "amount": 15811,
    "channel": "NEFT",
    "time": "01:49",
    "branch": "Bangalore"
  },
  {
    "id": "T1204",
    "source": "A1091",
    "target": "A1161",
    "amount": 98305,
    "channel": "IMPS",
    "time": "20:38",
    "branch": "Delhi"
  },
  {
    "id": "T1205",
    "source": "A1144",
    "target": "A1035",
    "amount": 9269,
    "channel": "IMPS",
    "time": "08:54",
    "branch": "Chennai"
  },
  {
    "id": "T1206",
    "source": "A1095",
    "target": "A1007",
    "amount": 55809,
    "channel": "RTGS",
    "time": "00:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1207",
    "source": "A1159",
    "target": "A1007",
    "amount": 93654,
    "channel": "NEFT",
    "time": "12:31",
    "branch": "Chennai"
  },
  {
    "id": "T1208",
    "source": "A1197",
    "target": "A1023",
    "amount": 47887,
    "channel": "RTGS",
    "time": "15:12",
    "branch": "Bangalore"
  },
  {
    "id": "T1209",
    "source": "A1156",
    "target": "A1108",
    "amount": 46997,
    "channel": "NEFT",
    "time": "07:11",
    "branch": "Mumbai"
  },
  {
    "id": "T1210",
    "source": "A1130",
    "target": "A1180",
    "amount": 48690,
    "channel": "IMPS",
    "time": "00:11",
    "branch": "Delhi"
  },
  {
    "id": "T1211",
    "source": "A1156",
    "target": "A1082",
    "amount": 40084,
    "channel": "RTGS",
    "time": "03:05",
    "branch": "Bangalore"
  },
  {
    "id": "T1212",
    "source": "A1098",
    "target": "A1042",
    "amount": 51487,
    "channel": "NEFT",
    "time": "14:39",
    "branch": "Kolkata"
  },
  {
    "id": "T1213",
    "source": "A1083",
    "target": "A1150",
    "amount": 18654,
    "channel": "ATM",
    "time": "02:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1214",
    "source": "A1000",
    "target": "A1001",
    "amount": 47964,
    "channel": "ATM",
    "time": "06:11",
    "branch": "Delhi"
  },
  {
    "id": "T1215",
    "source": "A1027",
    "target": "A1123",
    "amount": 64032,
    "channel": "UPI",
    "time": "06:35",
    "branch": "Kolkata"
  },
  {
    "id": "T1216",
    "source": "A1011",
    "target": "A1154",
    "amount": 42511,
    "channel": "NEFT",
    "time": "10:31",
    "branch": "Mumbai"
  },
  {
    "id": "T1217",
    "source": "A1024",
    "target": "A1112",
    "amount": 64082,
    "channel": "ATM",
    "time": "10:27",
    "branch": "Mumbai"
  },
  {
    "id": "T1218",
    "source": "A1013",
    "target": "A1082",
    "amount": 89590,
    "channel": "ATM",
    "time": "22:19",
    "branch": "Kolkata"
  },
  {
    "id": "T1219",
    "source": "A1022",
    "target": "A1082",
    "amount": 33915,
    "channel": "NEFT",
    "time": "13:47",
    "branch": "Chennai"
  },
  {
    "id": "T1220",
    "source": "A1072",
    "target": "A1060",
    "amount": 75145,
    "channel": "ATM",
    "time": "12:58",
    "branch": "Delhi"
  },
  {
    "id": "T1221",
    "source": "A1128",
    "target": "A1029",
    "amount": 21234,
    "channel": "UPI",
    "time": "16:54",
    "branch": "Bangalore"
  },
  {
    "id": "T1222",
    "source": "A1021",
    "target": "A1015",
    "amount": 61729,
    "channel": "IMPS",
    "time": "23:48",
    "branch": "Kolkata"
  },
  {
    "id": "T1223",
    "source": "A1118",
    "target": "A1144",
    "amount": 54803,
    "channel": "NEFT",
    "time": "02:08",
    "branch": "Delhi"
  },
  {
    "id": "T1224",
    "source": "A1112",
    "target": "A1182",
    "amount": 18444,
    "channel": "ATM",
    "time": "01:38",
    "branch": "Bangalore"
  },
  {
    "id": "T1225",
    "source": "A1126",
    "target": "A1012",
    "amount": 89673,
    "channel": "IMPS",
    "time": "21:57",
    "branch": "Bangalore"
  },
  {
    "id": "T1226",
    "source": "A1116",
    "target": "A1017",
    "amount": 47933,
    "channel": "UPI",
    "time": "01:22",
    "branch": "Bangalore"
  },
  {
    "id": "T1227",
    "source": "A1048",
    "target": "A1122",
    "amount": 85000,
    "channel": "RTGS",
    "time": "10:56",
    "branch": "Kolkata"
  },
  {
    "id": "T1228",
    "source": "A1064",
    "target": "A1005",
    "amount": 47299,
    "channel": "RTGS",
    "time": "08:09",
    "branch": "Kolkata"
  },
  {
    "id": "T1229",
    "source": "A1040",
    "target": "A1041",
    "amount": 15814,
    "channel": "IMPS",
    "time": "07:25",
    "branch": "Chennai"
  },
  {
    "id": "T1230",
    "source": "A1180",
    "target": "A1152",
    "amount": 26348,
    "channel": "UPI",
    "time": "12:04",
    "branch": "Chennai"
  },
  {
    "id": "T1231",
    "source": "A1145",
    "target": "A1161",
    "amount": 74515,
    "channel": "NEFT",
    "time": "00:25",
    "branch": "Kolkata"
  },
  {
    "id": "T1232",
    "source": "A1096",
    "target": "A1144",
    "amount": 42506,
    "channel": "ATM",
    "time": "20:41",
    "branch": "Chennai"
  },
  {
    "id": "T1233",
    "source": "A1009",
    "target": "A1177",
    "amount": 72712,
    "channel": "RTGS",
    "time": "20:00",
    "branch": "Bangalore"
  },
  {
    "id": "T1234",
    "source": "A1016",
    "target": "A1123",
    "amount": 61401,
    "channel": "UPI",
    "time": "01:24",
    "branch": "Mumbai"
  },
  {
    "id": "T1235",
    "source": "A1008",
    "target": "A1099",
    "amount": 22514,
    "channel": "UPI",
    "time": "12:41",
    "branch": "Kolkata"
  },
  {
    "id": "T1236",
    "source": "A1178",
    "target": "A1172",
    "amount": 27976,
    "channel": "NEFT",
    "time": "21:27",
    "branch": "Delhi"
  },
  {
    "id": "T1237",
    "source": "A1156",
    "target": "A1176",
    "amount": 8019,
    "channel": "ATM",
    "time": "22:19",
    "branch": "Kolkata"
  },
  {
    "id": "T1238",
    "source": "A1195",
    "target": "A1023",
    "amount": 64346,
    "channel": "UPI",
    "time": "04:14",
    "branch": "Chennai"
  },
  {
    "id": "T1239",
    "source": "A1163",
    "target": "A1159",
    "amount": 3600,
    "channel": "IMPS",
    "time": "19:54",
    "branch": "Delhi"
  },
  {
    "id": "T1240",
    "source": "A1033",
    "target": "A1094",
    "amount": 18884,
    "channel": "UPI",
    "time": "07:07",
    "branch": "Bangalore"
  },
  {
    "id": "T1241",
    "source": "A1036",
    "target": "A1016",
    "amount": 26962,
    "channel": "IMPS",
    "time": "00:23",
    "branch": "Delhi"
  },
  {
    "id": "T1242",
    "source": "A1055",
    "target": "A1035",
    "amount": 69417,
    "channel": "ATM",
    "time": "21:30",
    "branch": "Delhi"
  },
  {
    "id": "T1243",
    "source": "A1055",
    "target": "A1172",
    "amount": 41268,
    "channel": "NEFT",
    "time": "15:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1244",
    "source": "A1108",
    "target": "A1145",
    "amount": 42690,
    "channel": "RTGS",
    "time": "11:46",
    "branch": "Mumbai"
  },
  {
    "id": "T1245",
    "source": "A1192",
    "target": "A1075",
    "amount": 59849,
    "channel": "RTGS",
    "time": "03:17",
    "branch": "Mumbai"
  },
  {
    "id": "T1246",
    "source": "A1115",
    "target": "A1148",
    "amount": 48717,
    "channel": "UPI",
    "time": "06:30",
    "branch": "Chennai"
  },
  {
    "id": "T1247",
    "source": "A1059",
    "target": "A1071",
    "amount": 30082,
    "channel": "ATM",
    "time": "10:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1248",
    "source": "A1072",
    "target": "A1193",
    "amount": 21581,
    "channel": "UPI",
    "time": "21:20",
    "branch": "Delhi"
  },
  {
    "id": "T1249",
    "source": "A1025",
    "target": "A1123",
    "amount": 46842,
    "channel": "RTGS",
    "time": "21:32",
    "branch": "Chennai"
  },
  {
    "id": "T1250",
    "source": "A1058",
    "target": "A1142",
    "amount": 9851,
    "channel": "ATM",
    "time": "17:50",
    "branch": "Chennai"
  },
  {
    "id": "T1251",
    "source": "A1192",
    "target": "A1018",
    "amount": 60427,
    "channel": "UPI",
    "time": "01:21",
    "branch": "Delhi"
  },
  {
    "id": "T1252",
    "source": "A1008",
    "target": "A1120",
    "amount": 2354,
    "channel": "RTGS",
    "time": "00:08",
    "branch": "Mumbai"
  },
  {
    "id": "T1253",
    "source": "A1035",
    "target": "A1091",
    "amount": 78308,
    "channel": "RTGS",
    "time": "02:34",
    "branch": "Bangalore"
  },
  {
    "id": "T1254",
    "source": "A1175",
    "target": "A1005",
    "amount": 59285,
    "channel": "IMPS",
    "time": "04:00",
    "branch": "Kolkata"
  },
  {
    "id": "T1255",
    "source": "A1150",
    "target": "A1179",
    "amount": 59930,
    "channel": "RTGS",
    "time": "01:44",
    "branch": "Chennai"
  },
  {
    "id": "T1256",
    "source": "A1020",
    "target": "A1140",
    "amount": 65245,
    "channel": "IMPS",
    "time": "01:59",
    "branch": "Kolkata"
  },
  {
    "id": "T1257",
    "source": "A1177",
    "target": "A1067",
    "amount": 18381,
    "channel": "UPI",
    "time": "18:51",
    "branch": "Bangalore"
  },
  {
    "id": "T1258",
    "source": "A1066",
    "target": "A1067",
    "amount": 3214,
    "channel": "NEFT",
    "time": "15:44",
    "branch": "Kolkata"
  },
  {
    "id": "T1259",
    "source": "A1149",
    "target": "A1154",
    "amount": 2299,
    "channel": "RTGS",
    "time": "10:37",
    "branch": "Chennai"
  },
  {
    "id": "T1260",
    "source": "A1195",
    "target": "A1034",
    "amount": 2551,
    "channel": "IMPS",
    "time": "08:59",
    "branch": "Mumbai"
  },
  {
    "id": "T1261",
    "source": "A1104",
    "target": "A1100",
    "amount": 76468,
    "channel": "RTGS",
    "time": "17:35",
    "branch": "Delhi"
  },
  {
    "id": "T1262",
    "source": "A1113",
    "target": "A1065",
    "amount": 69695,
    "channel": "UPI",
    "time": "06:02",
    "branch": "Bangalore"
  },
  {
    "id": "T1263",
    "source": "A1013",
    "target": "A1172",
    "amount": 65119,
    "channel": "RTGS",
    "time": "08:47",
    "branch": "Bangalore"
  },
  {
    "id": "T1264",
    "source": "A1036",
    "target": "A1076",
    "amount": 17438,
    "channel": "NEFT",
    "time": "03:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1265",
    "source": "A1039",
    "target": "A1187",
    "amount": 41551,
    "channel": "UPI",
    "time": "19:57",
    "branch": "Kolkata"
  },
  {
    "id": "T1266",
    "source": "A1127",
    "target": "A1134",
    "amount": 44434,
    "channel": "ATM",
    "time": "17:13",
    "branch": "Mumbai"
  },
  {
    "id": "T1267",
    "source": "A1160",
    "target": "A1166",
    "amount": 96798,
    "channel": "UPI",
    "time": "17:03",
    "branch": "Mumbai"
  },
  {
    "id": "T1268",
    "source": "A1181",
    "target": "A1001",
    "amount": 32742,
    "channel": "NEFT",
    "time": "06:16",
    "branch": "Bangalore"
  },
  {
    "id": "T1269",
    "source": "A1139",
    "target": "A1173",
    "amount": 36644,
    "channel": "RTGS",
    "time": "22:23",
    "branch": "Kolkata"
  },
  {
    "id": "T1270",
    "source": "A1186",
    "target": "A1107",
    "amount": 29932,
    "channel": "IMPS",
    "time": "19:53",
    "branch": "Chennai"
  },
  {
    "id": "T1271",
    "source": "A1110",
    "target": "A1038",
    "amount": 63784,
    "channel": "NEFT",
    "time": "16:36",
    "branch": "Mumbai"
  },
  {
    "id": "T1272",
    "source": "A1083",
    "target": "A1198",
    "amount": 27786,
    "channel": "ATM",
    "time": "22:30",
    "branch": "Mumbai"
  },
  {
    "id": "T1273",
    "source": "A1113",
    "target": "A1109",
    "amount": 82495,
    "channel": "RTGS",
    "time": "19:49",
    "branch": "Chennai"
  },
  {
    "id": "T1274",
    "source": "A1021",
    "target": "A1042",
    "amount": 59576,
    "channel": "RTGS",
    "time": "11:27",
    "branch": "Bangalore"
  },
  {
    "id": "T1275",
    "source": "A1094",
    "target": "A1059",
    "amount": 30759,
    "channel": "UPI",
    "time": "01:59",
    "branch": "Mumbai"
  },
  {
    "id": "T1276",
    "source": "A1136",
    "target": "A1066",
    "amount": 27574,
    "channel": "NEFT",
    "time": "19:14",
    "branch": "Delhi"
  },
  {
    "id": "T1277",
    "source": "A1119",
    "target": "A1161",
    "amount": 59935,
    "channel": "RTGS",
    "time": "07:19",
    "branch": "Delhi"
  },
  {
    "id": "T1278",
    "source": "A1193",
    "target": "A1195",
    "amount": 9689,
    "channel": "RTGS",
    "time": "03:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1279",
    "source": "A1117",
    "target": "A1045",
    "amount": 23924,
    "channel": "NEFT",
    "time": "16:25",
    "branch": "Delhi"
  },
  {
    "id": "T1280",
    "source": "A1165",
    "target": "A1081",
    "amount": 58359,
    "channel": "ATM",
    "time": "14:03",
    "branch": "Delhi"
  },
  {
    "id": "T1281",
    "source": "A1136",
    "target": "A1195",
    "amount": 7582,
    "channel": "IMPS",
    "time": "01:29",
    "branch": "Bangalore"
  },
  {
    "id": "T1282",
    "source": "A1036",
    "target": "A1015",
    "amount": 77542,
    "channel": "NEFT",
    "time": "07:27",
    "branch": "Chennai"
  },
  {
    "id": "T1283",
    "source": "A1005",
    "target": "A1026",
    "amount": 80566,
    "channel": "UPI",
    "time": "11:16",
    "branch": "Mumbai"
  },
  {
    "id": "T1284",
    "source": "A1002",
    "target": "A1047",
    "amount": 38302,
    "channel": "NEFT",
    "time": "14:17",
    "branch": "Bangalore"
  },
  {
    "id": "T1285",
    "source": "A1146",
    "target": "A1062",
    "amount": 50797,
    "channel": "IMPS",
    "time": "06:08",
    "branch": "Chennai"
  },
  {
    "id": "T1286",
    "source": "A1073",
    "target": "A1024",
    "amount": 53433,
    "channel": "IMPS",
    "time": "08:00",
    "branch": "Delhi"
  },
  {
    "id": "T1287",
    "source": "A1061",
    "target": "A1107",
    "amount": 37478,
    "channel": "RTGS",
    "time": "08:05",
    "branch": "Delhi"
  },
  {
    "id": "T1288",
    "source": "A1120",
    "target": "A1049",
    "amount": 79109,
    "channel": "RTGS",
    "time": "22:34",
    "branch": "Bangalore"
  },
  {
    "id": "T1289",
    "source": "A1134",
    "target": "A1183",
    "amount": 79519,
    "channel": "ATM",
    "time": "04:37",
    "branch": "Delhi"
  },
  {
    "id": "T1290",
    "source": "A1067",
    "target": "A1051",
    "amount": 51159,
    "channel": "NEFT",
    "time": "06:00",
    "branch": "Kolkata"
  },
  {
    "id": "T1291",
    "source": "A1097",
    "target": "A1163",
    "amount": 79918,
    "channel": "UPI",
    "time": "12:47",
    "branch": "Delhi"
  },
  {
    "id": "T1292",
    "source": "A1113",
    "target": "A1007",
    "amount": 29431,
    "channel": "NEFT",
    "time": "08:46",
    "branch": "Bangalore"
  },
  {
    "id": "T1293",
    "source": "A1067",
    "target": "A1191",
    "amount": 16278,
    "channel": "UPI",
    "time": "11:58",
    "branch": "Chennai"
  },
  {
    "id": "T1294",
    "source": "A1163",
    "target": "A1113",
    "amount": 14644,
    "channel": "RTGS",
    "time": "21:07",
    "branch": "Bangalore"
  },
  {
    "id": "T1295",
    "source": "A1016",
    "target": "A1024",
    "amount": 6660,
    "channel": "NEFT",
    "time": "03:42",
    "branch": "Kolkata"
  },
  {
    "id": "T1296",
    "source": "A1050",
    "target": "A1192",
    "amount": 87403,
    "channel": "RTGS",
    "time": "00:05",
    "branch": "Bangalore"
  },
  {
    "id": "T1297",
    "source": "A1131",
    "target": "A1062",
    "amount": 54114,
    "channel": "ATM",
    "time": "20:43",
    "branch": "Delhi"
  },
  {
    "id": "T1298",
    "source": "A1179",
    "target": "A1161",
    "amount": 94350,
    "channel": "RTGS",
    "time": "01:59",
    "branch": "Bangalore"
  },
  {
    "id": "T1299",
    "source": "A1090",
    "target": "A1099",
    "amount": 79442,
    "channel": "IMPS",
    "time": "04:48",
    "branch": "Delhi"
  },
  {
    "id": "T1300",
    "source": "A1166",
    "target": "A1180",
    "amount": 19215,
    "channel": "UPI",
    "time": "20:32",
    "branch": "Bangalore"
  },
  {
    "id": "T1301",
    "source": "A1154",
    "target": "A1189",
    "amount": 40731,
    "channel": "UPI",
    "time": "02:37",
    "branch": "Mumbai"
  },
  {
    "id": "T1302",
    "source": "A1151",
    "target": "A1036",
    "amount": 38978,
    "channel": "UPI",
    "time": "06:24",
    "branch": "Chennai"
  },
  {
    "id": "T1303",
    "source": "A1000",
    "target": "A1046",
    "amount": 83203,
    "channel": "NEFT",
    "time": "02:51",
    "branch": "Mumbai"
  },
  {
    "id": "T1304",
    "source": "A1114",
    "target": "A1164",
    "amount": 74239,
    "channel": "ATM",
    "time": "13:16",
    "branch": "Kolkata"
  },
  {
    "id": "T1305",
    "source": "A1084",
    "target": "A1144",
    "amount": 74833,
    "channel": "NEFT",
    "time": "06:43",
    "branch": "Kolkata"
  },
  {
    "id": "T1306",
    "source": "A1102",
    "target": "A1104",
    "amount": 84562,
    "channel": "ATM",
    "time": "06:48",
    "branch": "Chennai"
  },
  {
    "id": "T1307",
    "source": "A1005",
    "target": "A1144",
    "amount": 82482,
    "channel": "RTGS",
    "time": "17:59",
    "branch": "Bangalore"
  },
  {
    "id": "T1308",
    "source": "A1174",
    "target": "A1167",
    "amount": 6394,
    "channel": "ATM",
    "time": "02:47",
    "branch": "Mumbai"
  },
  {
    "id": "T1309",
    "source": "A1165",
    "target": "A1089",
    "amount": 39010,
    "channel": "IMPS",
    "time": "14:19",
    "branch": "Mumbai"
  },
  {
    "id": "T1310",
    "source": "A1023",
    "target": "A1014",
    "amount": 14098,
    "channel": "RTGS",
    "time": "20:49",
    "branch": "Delhi"
  },
  {
    "id": "T1311",
    "source": "A1149",
    "target": "A1035",
    "amount": 71805,
    "channel": "IMPS",
    "time": "16:51",
    "branch": "Chennai"
  },
  {
    "id": "T1312",
    "source": "A1007",
    "target": "A1091",
    "amount": 2998,
    "channel": "NEFT",
    "time": "14:19",
    "branch": "Kolkata"
  },
  {
    "id": "T1313",
    "source": "A1072",
    "target": "A1189",
    "amount": 50998,
    "channel": "ATM",
    "time": "05:38",
    "branch": "Bangalore"
  },
  {
    "id": "T1314",
    "source": "A1049",
    "target": "A1085",
    "amount": 46587,
    "channel": "RTGS",
    "time": "08:49",
    "branch": "Chennai"
  },
  {
    "id": "T1315",
    "source": "A1123",
    "target": "A1175",
    "amount": 2390,
    "channel": "RTGS",
    "time": "10:53",
    "branch": "Delhi"
  },
  {
    "id": "T1316",
    "source": "A1146",
    "target": "A1073",
    "amount": 71651,
    "channel": "IMPS",
    "time": "21:04",
    "branch": "Bangalore"
  },
  {
    "id": "T1317",
    "source": "A1134",
    "target": "A1004",
    "amount": 42689,
    "channel": "UPI",
    "time": "16:42",
    "branch": "Chennai"
  },
  {
    "id": "T1318",
    "source": "A1005",
    "target": "A1004",
    "amount": 15402,
    "channel": "RTGS",
    "time": "19:01",
    "branch": "Delhi"
  },
  {
    "id": "T1319",
    "source": "A1179",
    "target": "A1184",
    "amount": 53734,
    "channel": "ATM",
    "time": "06:12",
    "branch": "Chennai"
  },
  {
    "id": "T1320",
    "source": "A1037",
    "target": "A1113",
    "amount": 54877,
    "channel": "ATM",
    "time": "07:50",
    "branch": "Chennai"
  },
  {
    "id": "T1321",
    "source": "A1017",
    "target": "A1065",
    "amount": 904,
    "channel": "ATM",
    "time": "09:29",
    "branch": "Kolkata"
  },
  {
    "id": "T1322",
    "source": "A1055",
    "target": "A1139",
    "amount": 65093,
    "channel": "RTGS",
    "time": "11:14",
    "branch": "Kolkata"
  },
  {
    "id": "T1323",
    "source": "A1017",
    "target": "A1033",
    "amount": 52763,
    "channel": "IMPS",
    "time": "09:46",
    "branch": "Mumbai"
  },
  {
    "id": "T1324",
    "source": "A1006",
    "target": "A1087",
    "amount": 29424,
    "channel": "NEFT",
    "time": "22:48",
    "branch": "Bangalore"
  },
  {
    "id": "T1325",
    "source": "A1090",
    "target": "A1033",
    "amount": 24370,
    "channel": "RTGS",
    "time": "16:23",
    "branch": "Mumbai"
  },
  {
    "id": "T1326",
    "source": "A1091",
    "target": "A1084",
    "amount": 25266,
    "channel": "UPI",
    "time": "04:58",
    "branch": "Mumbai"
  },
  {
    "id": "T1327",
    "source": "A1030",
    "target": "A1101",
    "amount": 31919,
    "channel": "ATM",
    "time": "12:22",
    "branch": "Mumbai"
  },
  {
    "id": "T1328",
    "source": "A1165",
    "target": "A1136",
    "amount": 81470,
    "channel": "IMPS",
    "time": "03:16",
    "branch": "Chennai"
  },
  {
    "id": "T1329",
    "source": "A1157",
    "target": "A1146",
    "amount": 14664,
    "channel": "UPI",
    "time": "19:45",
    "branch": "Chennai"
  },
  {
    "id": "T1330",
    "source": "A1018",
    "target": "A1056",
    "amount": 43248,
    "channel": "NEFT",
    "time": "01:10",
    "branch": "Delhi"
  },
  {
    "id": "T1331",
    "source": "A1165",
    "target": "A1012",
    "amount": 13643,
    "channel": "UPI",
    "time": "06:52",
    "branch": "Kolkata"
  },
  {
    "id": "T1332",
    "source": "A1083",
    "target": "A1067",
    "amount": 71877,
    "channel": "RTGS",
    "time": "19:24",
    "branch": "Kolkata"
  },
  {
    "id": "T1333",
    "source": "A1148",
    "target": "A1002",
    "amount": 46205,
    "channel": "RTGS",
    "time": "20:40",
    "branch": "Chennai"
  },
  {
    "id": "T1334",
    "source": "A1171",
    "target": "A1177",
    "amount": 26442,
    "channel": "RTGS",
    "time": "17:15",
    "branch": "Kolkata"
  },
  {
    "id": "T1335",
    "source": "A1038",
    "target": "A1171",
    "amount": 25209,
    "channel": "NEFT",
    "time": "01:11",
    "branch": "Delhi"
  },
  {
    "id": "T1336",
    "source": "A1149",
    "target": "A1117",
    "amount": 32958,
    "channel": "ATM",
    "time": "09:21",
    "branch": "Bangalore"
  },
  {
    "id": "T1337",
    "source": "A1198",
    "target": "A1063",
    "amount": 24181,
    "channel": "UPI",
    "time": "04:51",
    "branch": "Delhi"
  },
  {
    "id": "T1338",
    "source": "A1059",
    "target": "A1023",
    "amount": 21492,
    "channel": "UPI",
    "time": "05:39",
    "branch": "Chennai"
  },
  {
    "id": "T1339",
    "source": "A1036",
    "target": "A1125",
    "amount": 65214,
    "channel": "IMPS",
    "time": "22:31",
    "branch": "Delhi"
  },
  {
    "id": "T1340",
    "source": "A1130",
    "target": "A1071",
    "amount": 88229,
    "channel": "RTGS",
    "time": "20:26",
    "branch": "Delhi"
  },
  {
    "id": "T1341",
    "source": "A1184",
    "target": "A1010",
    "amount": 40042,
    "channel": "UPI",
    "time": "09:32",
    "branch": "Chennai"
  },
  {
    "id": "T1342",
    "source": "A1139",
    "target": "A1143",
    "amount": 54478,
    "channel": "ATM",
    "time": "07:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1343",
    "source": "A1004",
    "target": "A1192",
    "amount": 18495,
    "channel": "ATM",
    "time": "08:09",
    "branch": "Chennai"
  },
  {
    "id": "T1344",
    "source": "A1196",
    "target": "A1017",
    "amount": 58875,
    "channel": "RTGS",
    "time": "21:11",
    "branch": "Mumbai"
  },
  {
    "id": "T1345",
    "source": "A1111",
    "target": "A1135",
    "amount": 65142,
    "channel": "ATM",
    "time": "11:21",
    "branch": "Chennai"
  },
  {
    "id": "T1346",
    "source": "A1121",
    "target": "A1189",
    "amount": 27356,
    "channel": "ATM",
    "time": "09:57",
    "branch": "Kolkata"
  },
  {
    "id": "T1347",
    "source": "A1130",
    "target": "A1025",
    "amount": 89990,
    "channel": "IMPS",
    "time": "02:11",
    "branch": "Kolkata"
  },
  {
    "id": "T1348",
    "source": "A1052",
    "target": "A1181",
    "amount": 1841,
    "channel": "UPI",
    "time": "00:27",
    "branch": "Bangalore"
  },
  {
    "id": "T1349",
    "source": "A1072",
    "target": "A1001",
    "amount": 13959,
    "channel": "RTGS",
    "time": "13:45",
    "branch": "Bangalore"
  },
  {
    "id": "T1350",
    "source": "A1175",
    "target": "A1182",
    "amount": 61089,
    "channel": "UPI",
    "time": "15:49",
    "branch": "Delhi"
  },
  {
    "id": "T1351",
    "source": "A1035",
    "target": "A1143",
    "amount": 41193,
    "channel": "ATM",
    "time": "21:59",
    "branch": "Chennai"
  },
  {
    "id": "T1352",
    "source": "A1029",
    "target": "A1193",
    "amount": 73639,
    "channel": "ATM",
    "time": "19:26",
    "branch": "Mumbai"
  },
  {
    "id": "T1353",
    "source": "A1072",
    "target": "A1109",
    "amount": 92247,
    "channel": "NEFT",
    "time": "09:32",
    "branch": "Kolkata"
  },
  {
    "id": "T1354",
    "source": "A1102",
    "target": "A1140",
    "amount": 81870,
    "channel": "NEFT",
    "time": "02:16",
    "branch": "Chennai"
  },
  {
    "id": "T1355",
    "source": "A1152",
    "target": "A1143",
    "amount": 68352,
    "channel": "NEFT",
    "time": "20:58",
    "branch": "Mumbai"
  },
  {
    "id": "T1356",
    "source": "A1172",
    "target": "A1166",
    "amount": 51736,
    "channel": "NEFT",
    "time": "20:58",
    "branch": "Delhi"
  },
  {
    "id": "T1357",
    "source": "A1025",
    "target": "A1026",
    "amount": 85302,
    "channel": "UPI",
    "time": "18:45",
    "branch": "Chennai"
  },
  {
    "id": "T1358",
    "source": "A1187",
    "target": "A1140",
    "amount": 52790,
    "channel": "RTGS",
    "time": "01:31",
    "branch": "Chennai"
  },
  {
    "id": "T1359",
    "source": "A1024",
    "target": "A1090",
    "amount": 29531,
    "channel": "RTGS",
    "time": "14:01",
    "branch": "Chennai"
  },
  {
    "id": "T1360",
    "source": "A1068",
    "target": "A1076",
    "amount": 67970,
    "channel": "IMPS",
    "time": "06:44",
    "branch": "Delhi"
  },
  {
    "id": "T1361",
    "source": "A1095",
    "target": "A1192",
    "amount": 14411,
    "channel": "UPI",
    "time": "18:08",
    "branch": "Kolkata"
  },
  {
    "id": "T1362",
    "source": "A1129",
    "target": "A1131",
    "amount": 94309,
    "channel": "UPI",
    "time": "15:49",
    "branch": "Delhi"
  },
  {
    "id": "T1363",
    "source": "A1015",
    "target": "A1190",
    "amount": 36970,
    "channel": "IMPS",
    "time": "22:57",
    "branch": "Chennai"
  },
  {
    "id": "T1364",
    "source": "A1025",
    "target": "A1127",
    "amount": 8556,
    "channel": "UPI",
    "time": "19:45",
    "branch": "Delhi"
  },
  {
    "id": "T1365",
    "source": "A1015",
    "target": "A1155",
    "amount": 92964,
    "channel": "NEFT",
    "time": "00:53",
    "branch": "Bangalore"
  },
  {
    "id": "T1366",
    "source": "A1127",
    "target": "A1153",
    "amount": 12498,
    "channel": "IMPS",
    "time": "17:30",
    "branch": "Mumbai"
  },
  {
    "id": "T1367",
    "source": "A1146",
    "target": "A1176",
    "amount": 43102,
    "channel": "ATM",
    "time": "09:43",
    "branch": "Kolkata"
  },
  {
    "id": "T1368",
    "source": "A1159",
    "target": "A1108",
    "amount": 71268,
    "channel": "UPI",
    "time": "12:34",
    "branch": "Mumbai"
  },
  {
    "id": "T1369",
    "source": "A1094",
    "target": "A1025",
    "amount": 51267,
    "channel": "ATM",
    "time": "00:43",
    "branch": "Chennai"
  },
  {
    "id": "T1370",
    "source": "A1076",
    "target": "A1063",
    "amount": 22482,
    "channel": "NEFT",
    "time": "14:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1371",
    "source": "A1192",
    "target": "A1127",
    "amount": 87808,
    "channel": "IMPS",
    "time": "23:11",
    "branch": "Mumbai"
  },
  {
    "id": "T1372",
    "source": "A1141",
    "target": "A1186",
    "amount": 90717,
    "channel": "UPI",
    "time": "18:52",
    "branch": "Chennai"
  },
  {
    "id": "T1373",
    "source": "A1103",
    "target": "A1086",
    "amount": 68282,
    "channel": "RTGS",
    "time": "19:07",
    "branch": "Delhi"
  },
  {
    "id": "T1374",
    "source": "A1098",
    "target": "A1094",
    "amount": 24679,
    "channel": "NEFT",
    "time": "04:15",
    "branch": "Kolkata"
  },
  {
    "id": "T1375",
    "source": "A1174",
    "target": "A1047",
    "amount": 86628,
    "channel": "RTGS",
    "time": "03:30",
    "branch": "Chennai"
  },
  {
    "id": "T1376",
    "source": "A1057",
    "target": "A1183",
    "amount": 49651,
    "channel": "IMPS",
    "time": "22:44",
    "branch": "Bangalore"
  },
  {
    "id": "T1377",
    "source": "A1077",
    "target": "A1038",
    "amount": 61715,
    "channel": "UPI",
    "time": "10:29",
    "branch": "Chennai"
  },
  {
    "id": "T1378",
    "source": "A1188",
    "target": "A1140",
    "amount": 95207,
    "channel": "NEFT",
    "time": "20:39",
    "branch": "Mumbai"
  },
  {
    "id": "T1379",
    "source": "A1088",
    "target": "A1139",
    "amount": 94434,
    "channel": "RTGS",
    "time": "19:23",
    "branch": "Kolkata"
  },
  {
    "id": "T1380",
    "source": "A1110",
    "target": "A1163",
    "amount": 36223,
    "channel": "RTGS",
    "time": "11:10",
    "branch": "Bangalore"
  },
  {
    "id": "T1381",
    "source": "A1071",
    "target": "A1058",
    "amount": 57157,
    "channel": "UPI",
    "time": "07:07",
    "branch": "Delhi"
  },
  {
    "id": "T1382",
    "source": "A1095",
    "target": "A1103",
    "amount": 45394,
    "channel": "RTGS",
    "time": "17:06",
    "branch": "Chennai"
  },
  {
    "id": "T1383",
    "source": "A1197",
    "target": "A1042",
    "amount": 98118,
    "channel": "UPI",
    "time": "12:11",
    "branch": "Bangalore"
  },
  {
    "id": "T1384",
    "source": "A1028",
    "target": "A1122",
    "amount": 82002,
    "channel": "ATM",
    "time": "21:41",
    "branch": "Chennai"
  },
  {
    "id": "T1385",
    "source": "A1161",
    "target": "A1146",
    "amount": 66452,
    "channel": "RTGS",
    "time": "09:57",
    "branch": "Kolkata"
  },
  {
    "id": "T1386",
    "source": "A1118",
    "target": "A1014",
    "amount": 26292,
    "channel": "IMPS",
    "time": "02:46",
    "branch": "Bangalore"
  },
  {
    "id": "T1387",
    "source": "A1179",
    "target": "A1020",
    "amount": 47501,
    "channel": "ATM",
    "time": "05:04",
    "branch": "Mumbai"
  },
  {
    "id": "T1388",
    "source": "A1173",
    "target": "A1134",
    "amount": 53316,
    "channel": "RTGS",
    "time": "10:40",
    "branch": "Delhi"
  },
  {
    "id": "T1389",
    "source": "A1065",
    "target": "A1053",
    "amount": 4352,
    "channel": "NEFT",
    "time": "22:56",
    "branch": "Delhi"
  },
  {
    "id": "T1390",
    "source": "A1059",
    "target": "A1031",
    "amount": 57179,
    "channel": "IMPS",
    "time": "06:25",
    "branch": "Kolkata"
  },
  {
    "id": "T1391",
    "source": "A1193",
    "target": "A1123",
    "amount": 70820,
    "channel": "NEFT",
    "time": "15:46",
    "branch": "Mumbai"
  },
  {
    "id": "T1392",
    "source": "A1024",
    "target": "A1022",
    "amount": 86871,
    "channel": "UPI",
    "time": "21:17",
    "branch": "Chennai"
  },
  {
    "id": "T1393",
    "source": "A1156",
    "target": "A1159",
    "amount": 9663,
    "channel": "RTGS",
    "time": "21:58",
    "branch": "Kolkata"
  },
  {
    "id": "T1394",
    "source": "A1067",
    "target": "A1192",
    "amount": 1944,
    "channel": "UPI",
    "time": "15:14",
    "branch": "Delhi"
  },
  {
    "id": "T1395",
    "source": "A1066",
    "target": "A1188",
    "amount": 60666,
    "channel": "RTGS",
    "time": "05:33",
    "branch": "Bangalore"
  },
  {
    "id": "T1396",
    "source": "A1148",
    "target": "A1145",
    "amount": 78875,
    "channel": "UPI",
    "time": "20:02",
    "branch": "Mumbai"
  },
  {
    "id": "T1397",
    "source": "A1153",
    "target": "A1018",
    "amount": 68419,
    "channel": "NEFT",
    "time": "22:45",
    "branch": "Chennai"
  },
  {
    "id": "T1398",
    "source": "A1017",
    "target": "A1189",
    "amount": 4313,
    "channel": "UPI",
    "time": "22:07",
    "branch": "Bangalore"
  },
  {
    "id": "T1399",
    "source": "A1034",
    "target": "A1117",
    "amount": 26961,
    "channel": "IMPS",
    "time": "08:21",
    "branch": "Kolkata"
  },
  {
    "id": "T1400",
    "source": "A1071",
    "target": "A1157",
    "amount": 84916,
    "channel": "ATM",
    "time": "14:25",
    "branch": "Chennai"
  },
  {
    "id": "T1401",
    "source": "A1069",
    "target": "A1192",
    "amount": 13870,
    "channel": "RTGS",
    "time": "02:38",
    "branch": "Kolkata"
  },
  {
    "id": "T1402",
    "source": "A1109",
    "target": "A1133",
    "amount": 55749,
    "channel": "IMPS",
    "time": "10:07",
    "branch": "Delhi"
  },
  {
    "id": "T1403",
    "source": "A1143",
    "target": "A1009",
    "amount": 61181,
    "channel": "ATM",
    "time": "21:41",
    "branch": "Chennai"
  },
  {
    "id": "T1404",
    "source": "A1047",
    "target": "A1126",
    "amount": 88057,
    "channel": "ATM",
    "time": "12:45",
    "branch": "Delhi"
  },
  {
    "id": "T1405",
    "source": "A1175",
    "target": "A1164",
    "amount": 15183,
    "channel": "IMPS",
    "time": "10:03",
    "branch": "Delhi"
  },
  {
    "id": "T1406",
    "source": "A1056",
    "target": "A1105",
    "amount": 83806,
    "channel": "IMPS",
    "time": "19:56",
    "branch": "Bangalore"
  },
  {
    "id": "T1407",
    "source": "A1016",
    "target": "A1004",
    "amount": 72993,
    "channel": "IMPS",
    "time": "09:57",
    "branch": "Mumbai"
  },
  {
    "id": "T1408",
    "source": "A1100",
    "target": "A1109",
    "amount": 18135,
    "channel": "RTGS",
    "time": "03:35",
    "branch": "Mumbai"
  },
  {
    "id": "T1409",
    "source": "A1054",
    "target": "A1032",
    "amount": 46438,
    "channel": "NEFT",
    "time": "10:36",
    "branch": "Bangalore"
  },
  {
    "id": "T1410",
    "source": "A1147",
    "target": "A1192",
    "amount": 72654,
    "channel": "RTGS",
    "time": "14:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1411",
    "source": "A1063",
    "target": "A1158",
    "amount": 15559,
    "channel": "RTGS",
    "time": "20:33",
    "branch": "Delhi"
  },
  {
    "id": "T1412",
    "source": "A1117",
    "target": "A1063",
    "amount": 1223,
    "channel": "NEFT",
    "time": "16:44",
    "branch": "Bangalore"
  },
  {
    "id": "T1413",
    "source": "A1071",
    "target": "A1037",
    "amount": 71231,
    "channel": "NEFT",
    "time": "20:28",
    "branch": "Chennai"
  },
  {
    "id": "T1414",
    "source": "A1122",
    "target": "A1024",
    "amount": 9824,
    "channel": "NEFT",
    "time": "00:41",
    "branch": "Delhi"
  },
  {
    "id": "T1415",
    "source": "A1000",
    "target": "A1049",
    "amount": 76144,
    "channel": "UPI",
    "time": "14:58",
    "branch": "Kolkata"
  },
  {
    "id": "T1416",
    "source": "A1020",
    "target": "A1171",
    "amount": 22701,
    "channel": "ATM",
    "time": "06:37",
    "branch": "Bangalore"
  },
  {
    "id": "T1417",
    "source": "A1089",
    "target": "A1110",
    "amount": 74277,
    "channel": "IMPS",
    "time": "12:29",
    "branch": "Mumbai"
  },
  {
    "id": "T1418",
    "source": "A1008",
    "target": "A1019",
    "amount": 4582,
    "channel": "UPI",
    "time": "16:47",
    "branch": "Delhi"
  },
  {
    "id": "T1419",
    "source": "A1145",
    "target": "A1095",
    "amount": 44513,
    "channel": "RTGS",
    "time": "04:49",
    "branch": "Delhi"
  },
  {
    "id": "T1420",
    "source": "A1091",
    "target": "A1069",
    "amount": 29659,
    "channel": "NEFT",
    "time": "01:32",
    "branch": "Kolkata"
  },
  {
    "id": "T1421",
    "source": "A1180",
    "target": "A1185",
    "amount": 62211,
    "channel": "IMPS",
    "time": "15:34",
    "branch": "Delhi"
  },
  {
    "id": "T1422",
    "source": "A1129",
    "target": "A1163",
    "amount": 6480,
    "channel": "ATM",
    "time": "15:24",
    "branch": "Chennai"
  },
  {
    "id": "T1423",
    "source": "A1143",
    "target": "A1038",
    "amount": 57363,
    "channel": "ATM",
    "time": "01:51",
    "branch": "Kolkata"
  },
  {
    "id": "T1424",
    "source": "A1089",
    "target": "A1088",
    "amount": 94825,
    "channel": "UPI",
    "time": "09:01",
    "branch": "Chennai"
  },
  {
    "id": "T1425",
    "source": "A1176",
    "target": "A1008",
    "amount": 28082,
    "channel": "NEFT",
    "time": "08:13",
    "branch": "Delhi"
  },
  {
    "id": "T1426",
    "source": "A1016",
    "target": "A1074",
    "amount": 6042,
    "channel": "RTGS",
    "time": "23:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1427",
    "source": "A1121",
    "target": "A1148",
    "amount": 51550,
    "channel": "NEFT",
    "time": "20:39",
    "branch": "Mumbai"
  },
  {
    "id": "T1428",
    "source": "A1072",
    "target": "A1052",
    "amount": 5258,
    "channel": "UPI",
    "time": "07:38",
    "branch": "Kolkata"
  },
  {
    "id": "T1429",
    "source": "A1055",
    "target": "A1167",
    "amount": 88244,
    "channel": "UPI",
    "time": "15:36",
    "branch": "Chennai"
  },
  {
    "id": "T1430",
    "source": "A1135",
    "target": "A1041",
    "amount": 40675,
    "channel": "NEFT",
    "time": "17:44",
    "branch": "Delhi"
  },
  {
    "id": "T1431",
    "source": "A1018",
    "target": "A1134",
    "amount": 49994,
    "channel": "UPI",
    "time": "07:22",
    "branch": "Delhi"
  },
  {
    "id": "T1432",
    "source": "A1173",
    "target": "A1033",
    "amount": 51918,
    "channel": "RTGS",
    "time": "23:28",
    "branch": "Kolkata"
  },
  {
    "id": "T1433",
    "source": "A1112",
    "target": "A1148",
    "amount": 10534,
    "channel": "RTGS",
    "time": "03:25",
    "branch": "Chennai"
  },
  {
    "id": "T1434",
    "source": "A1103",
    "target": "A1174",
    "amount": 93125,
    "channel": "ATM",
    "time": "11:44",
    "branch": "Mumbai"
  },
  {
    "id": "T1435",
    "source": "A1153",
    "target": "A1130",
    "amount": 54318,
    "channel": "RTGS",
    "time": "19:07",
    "branch": "Chennai"
  },
  {
    "id": "T1436",
    "source": "A1055",
    "target": "A1181",
    "amount": 22941,
    "channel": "RTGS",
    "time": "06:22",
    "branch": "Delhi"
  },
  {
    "id": "T1437",
    "source": "A1105",
    "target": "A1046",
    "amount": 90647,
    "channel": "RTGS",
    "time": "17:36",
    "branch": "Chennai"
  },
  {
    "id": "T1438",
    "source": "A1141",
    "target": "A1157",
    "amount": 26456,
    "channel": "IMPS",
    "time": "07:24",
    "branch": "Delhi"
  },
  {
    "id": "T1439",
    "source": "A1105",
    "target": "A1130",
    "amount": 93110,
    "channel": "UPI",
    "time": "10:00",
    "branch": "Delhi"
  },
  {
    "id": "T1440",
    "source": "A1061",
    "target": "A1169",
    "amount": 12138,
    "channel": "ATM",
    "time": "15:43",
    "branch": "Delhi"
  },
  {
    "id": "T1441",
    "source": "A1036",
    "target": "A1029",
    "amount": 39241,
    "channel": "RTGS",
    "time": "12:32",
    "branch": "Bangalore"
  },
  {
    "id": "T1442",
    "source": "A1194",
    "target": "A1073",
    "amount": 71982,
    "channel": "ATM",
    "time": "00:10",
    "branch": "Chennai"
  },
  {
    "id": "T1443",
    "source": "A1031",
    "target": "A1061",
    "amount": 88252,
    "channel": "IMPS",
    "time": "08:34",
    "branch": "Mumbai"
  },
  {
    "id": "T1444",
    "source": "A1115",
    "target": "A1196",
    "amount": 86981,
    "channel": "IMPS",
    "time": "10:26",
    "branch": "Kolkata"
  },
  {
    "id": "T1445",
    "source": "A1127",
    "target": "A1014",
    "amount": 98354,
    "channel": "IMPS",
    "time": "18:26",
    "branch": "Delhi"
  },
  {
    "id": "T1446",
    "source": "A1091",
    "target": "A1139",
    "amount": 63079,
    "channel": "UPI",
    "time": "10:10",
    "branch": "Delhi"
  },
  {
    "id": "T1447",
    "source": "A1095",
    "target": "A1180",
    "amount": 82828,
    "channel": "UPI",
    "time": "01:04",
    "branch": "Delhi"
  },
  {
    "id": "T1448",
    "source": "A1114",
    "target": "A1147",
    "amount": 35011,
    "channel": "RTGS",
    "time": "01:22",
    "branch": "Mumbai"
  },
  {
    "id": "T1449",
    "source": "A1090",
    "target": "A1031",
    "amount": 90938,
    "channel": "ATM",
    "time": "17:33",
    "branch": "Mumbai"
  },
  {
    "id": "T1450",
    "source": "A1138",
    "target": "A1088",
    "amount": 16852,
    "channel": "UPI",
    "time": "00:55",
    "branch": "Chennai"
  },
  {
    "id": "T1451",
    "source": "A1138",
    "target": "A1107",
    "amount": 85140,
    "channel": "ATM",
    "time": "23:04",
    "branch": "Bangalore"
  },
  {
    "id": "T1452",
    "source": "A1024",
    "target": "A1088",
    "amount": 17170,
    "channel": "UPI",
    "time": "18:36",
    "branch": "Kolkata"
  },
  {
    "id": "T1453",
    "source": "A1112",
    "target": "A1055",
    "amount": 94621,
    "channel": "IMPS",
    "time": "11:44",
    "branch": "Kolkata"
  },
  {
    "id": "T1454",
    "source": "A1003",
    "target": "A1180",
    "amount": 67237,
    "channel": "UPI",
    "time": "19:35",
    "branch": "Delhi"
  },
  {
    "id": "T1455",
    "source": "A1166",
    "target": "A1046",
    "amount": 86065,
    "channel": "RTGS",
    "time": "20:30",
    "branch": "Mumbai"
  },
  {
    "id": "T1456",
    "source": "A1126",
    "target": "A1151",
    "amount": 29736,
    "channel": "UPI",
    "time": "04:52",
    "branch": "Mumbai"
  },
  {
    "id": "T1457",
    "source": "A1090",
    "target": "A1131",
    "amount": 11139,
    "channel": "IMPS",
    "time": "11:39",
    "branch": "Mumbai"
  },
  {
    "id": "T1458",
    "source": "A1021",
    "target": "A1185",
    "amount": 74570,
    "channel": "NEFT",
    "time": "08:59",
    "branch": "Mumbai"
  },
  {
    "id": "T1459",
    "source": "A1156",
    "target": "A1044",
    "amount": 42196,
    "channel": "UPI",
    "time": "18:22",
    "branch": "Chennai"
  },
  {
    "id": "T1460",
    "source": "A1176",
    "target": "A1154",
    "amount": 83837,
    "channel": "RTGS",
    "time": "11:14",
    "branch": "Kolkata"
  },
  {
    "id": "T1461",
    "source": "A1164",
    "target": "A1034",
    "amount": 62945,
    "channel": "ATM",
    "time": "03:03",
    "branch": "Mumbai"
  },
  {
    "id": "T1462",
    "source": "A1085",
    "target": "A1081",
    "amount": 48168,
    "channel": "IMPS",
    "time": "02:53",
    "branch": "Mumbai"
  },
  {
    "id": "T1463",
    "source": "A1171",
    "target": "A1033",
    "amount": 90148,
    "channel": "ATM",
    "time": "07:32",
    "branch": "Bangalore"
  },
  {
    "id": "T1464",
    "source": "A1105",
    "target": "A1032",
    "amount": 86070,
    "channel": "NEFT",
    "time": "21:41",
    "branch": "Bangalore"
  },
  {
    "id": "T1465",
    "source": "A1017",
    "target": "A1053",
    "amount": 96026,
    "channel": "RTGS",
    "time": "19:35",
    "branch": "Mumbai"
  },
  {
    "id": "T1466",
    "source": "A1045",
    "target": "A1145",
    "amount": 66983,
    "channel": "UPI",
    "time": "09:04",
    "branch": "Chennai"
  },
  {
    "id": "T1467",
    "source": "A1090",
    "target": "A1196",
    "amount": 18562,
    "channel": "ATM",
    "time": "13:39",
    "branch": "Mumbai"
  },
  {
    "id": "T1468",
    "source": "A1161",
    "target": "A1062",
    "amount": 37747,
    "channel": "RTGS",
    "time": "23:44",
    "branch": "Chennai"
  },
  {
    "id": "T1469",
    "source": "A1161",
    "target": "A1001",
    "amount": 74462,
    "channel": "UPI",
    "time": "23:45",
    "branch": "Kolkata"
  },
  {
    "id": "T1470",
    "source": "A1038",
    "target": "A1035",
    "amount": 22431,
    "channel": "IMPS",
    "time": "01:10",
    "branch": "Kolkata"
  },
  {
    "id": "T1471",
    "source": "A1059",
    "target": "A1047",
    "amount": 30303,
    "channel": "RTGS",
    "time": "07:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1472",
    "source": "A1159",
    "target": "A1184",
    "amount": 26517,
    "channel": "IMPS",
    "time": "15:11",
    "branch": "Mumbai"
  },
  {
    "id": "T1473",
    "source": "A1119",
    "target": "A1097",
    "amount": 89998,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Delhi"
  },
  {
    "id": "T1474",
    "source": "A1190",
    "target": "A1166",
    "amount": 43988,
    "channel": "NEFT",
    "time": "10:33",
    "branch": "Bangalore"
  },
  {
    "id": "T1475",
    "source": "A1054",
    "target": "A1056",
    "amount": 17005,
    "channel": "RTGS",
    "time": "02:37",
    "branch": "Kolkata"
  },
  {
    "id": "T1476",
    "source": "A1027",
    "target": "A1111",
    "amount": 61896,
    "channel": "RTGS",
    "time": "11:48",
    "branch": "Mumbai"
  },
  {
    "id": "T1477",
    "source": "A1021",
    "target": "A1170",
    "amount": 63240,
    "channel": "RTGS",
    "time": "04:56",
    "branch": "Chennai"
  },
  {
    "id": "T1478",
    "source": "A1130",
    "target": "A1048",
    "amount": 13590,
    "channel": "RTGS",
    "time": "20:11",
    "branch": "Mumbai"
  },
  {
    "id": "T1479",
    "source": "A1064",
    "target": "A1003",
    "amount": 50277,
    "channel": "RTGS",
    "time": "19:06",
    "branch": "Chennai"
  },
  {
    "id": "T1480",
    "source": "A1137",
    "target": "A1096",
    "amount": 43580,
    "channel": "RTGS",
    "time": "09:06",
    "branch": "Kolkata"
  },
  {
    "id": "T1481",
    "source": "A1147",
    "target": "A1097",
    "amount": 12783,
    "channel": "UPI",
    "time": "10:57",
    "branch": "Mumbai"
  },
  {
    "id": "T1482",
    "source": "A1110",
    "target": "A1050",
    "amount": 87292,
    "channel": "RTGS",
    "time": "14:33",
    "branch": "Bangalore"
  },
  {
    "id": "T1483",
    "source": "A1119",
    "target": "A1093",
    "amount": 41821,
    "channel": "IMPS",
    "time": "01:51",
    "branch": "Delhi"
  },
  {
    "id": "T1484",
    "source": "A1112",
    "target": "A1014",
    "amount": 4525,
    "channel": "IMPS",
    "time": "00:40",
    "branch": "Kolkata"
  },
  {
    "id": "T1485",
    "source": "A1104",
    "target": "A1064",
    "amount": 57085,
    "channel": "IMPS",
    "time": "14:13",
    "branch": "Bangalore"
  },
  {
    "id": "T1486",
    "source": "A1059",
    "target": "A1066",
    "amount": 37142,
    "channel": "RTGS",
    "time": "12:35",
    "branch": "Chennai"
  },
  {
    "id": "T1487",
    "source": "A1085",
    "target": "A1039",
    "amount": 3388,
    "channel": "RTGS",
    "time": "17:32",
    "branch": "Kolkata"
  },
  {
    "id": "T1488",
    "source": "A1024",
    "target": "A1007",
    "amount": 91364,
    "channel": "ATM",
    "time": "20:36",
    "branch": "Kolkata"
  },
  {
    "id": "T1489",
    "source": "A1012",
    "target": "A1094",
    "amount": 88089,
    "channel": "UPI",
    "time": "22:40",
    "branch": "Chennai"
  },
  {
    "id": "T1490",
    "source": "A1049",
    "target": "A1106",
    "amount": 44894,
    "channel": "ATM",
    "time": "03:24",
    "branch": "Kolkata"
  },
  {
    "id": "T1491",
    "source": "A1078",
    "target": "A1164",
    "amount": 82965,
    "channel": "UPI",
    "time": "21:48",
    "branch": "Bangalore"
  },
  {
    "id": "T1492",
    "source": "A1050",
    "target": "A1102",
    "amount": 74768,
    "channel": "NEFT",
    "time": "18:35",
    "branch": "Delhi"
  },
  {
    "id": "T1493",
    "source": "A1105",
    "target": "A1183",
    "amount": 11850,
    "channel": "UPI",
    "time": "03:53",
    "branch": "Delhi"
  },
  {
    "id": "T1494",
    "source": "A1113",
    "target": "A1168",
    "amount": 42443,
    "channel": "NEFT",
    "time": "23:00",
    "branch": "Delhi"
  },
  {
    "id": "T1495",
    "source": "A1100",
    "target": "A1097",
    "amount": 18970,
    "channel": "NEFT",
    "time": "04:44",
    "branch": "Kolkata"
  },
  {
    "id": "T1496",
    "source": "A1188",
    "target": "A1071",
    "amount": 13511,
    "channel": "NEFT",
    "time": "02:32",
    "branch": "Mumbai"
  },
  {
    "id": "T1497",
    "source": "A1059",
    "target": "A1061",
    "amount": 56779,
    "channel": "UPI",
    "time": "01:54",
    "branch": "Kolkata"
  },
  {
    "id": "T1498",
    "source": "A1072",
    "target": "A1196",
    "amount": 72281,
    "channel": "ATM",
    "time": "06:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1499",
    "source": "A1060",
    "target": "A1158",
    "amount": 17635,
    "channel": "NEFT",
    "time": "15:50",
    "branch": "Mumbai"
  },
  {
    "id": "T1500",
    "source": "A1064",
    "target": "A1093",
    "amount": 59063,
    "channel": "ATM",
    "time": "19:58",
    "branch": "Chennai"
  },
  {
    "id": "T1501",
    "source": "A1033",
    "target": "A1003",
    "amount": 77843,
    "channel": "NEFT",
    "time": "21:36",
    "branch": "Chennai"
  },
  {
    "id": "T1502",
    "source": "A1155",
    "target": "A1161",
    "amount": 83628,
    "channel": "NEFT",
    "time": "01:52",
    "branch": "Kolkata"
  },
  {
    "id": "T1503",
    "source": "A1072",
    "target": "A1027",
    "amount": 23322,
    "channel": "UPI",
    "time": "19:44",
    "branch": "Chennai"
  },
  {
    "id": "T1504",
    "source": "A1063",
    "target": "A1081",
    "amount": 13514,
    "channel": "NEFT",
    "time": "03:50",
    "branch": "Delhi"
  },
  {
    "id": "T1505",
    "source": "A1118",
    "target": "A1009",
    "amount": 22591,
    "channel": "NEFT",
    "time": "01:02",
    "branch": "Mumbai"
  },
  {
    "id": "T1506",
    "source": "A1029",
    "target": "A1109",
    "amount": 88436,
    "channel": "IMPS",
    "time": "05:16",
    "branch": "Chennai"
  },
  {
    "id": "T1507",
    "source": "A1170",
    "target": "A1038",
    "amount": 45952,
    "channel": "IMPS",
    "time": "05:12",
    "branch": "Delhi"
  },
  {
    "id": "T1508",
    "source": "A1123",
    "target": "A1059",
    "amount": 95587,
    "channel": "NEFT",
    "time": "02:33",
    "branch": "Kolkata"
  },
  {
    "id": "T1509",
    "source": "A1110",
    "target": "A1029",
    "amount": 89138,
    "channel": "NEFT",
    "time": "10:55",
    "branch": "Chennai"
  },
  {
    "id": "T1510",
    "source": "A1037",
    "target": "A1018",
    "amount": 5312,
    "channel": "ATM",
    "time": "10:30",
    "branch": "Chennai"
  },
  {
    "id": "T1511",
    "source": "A1105",
    "target": "A1077",
    "amount": 79222,
    "channel": "IMPS",
    "time": "14:35",
    "branch": "Chennai"
  },
  {
    "id": "T1512",
    "source": "A1011",
    "target": "A1075",
    "amount": 99932,
    "channel": "UPI",
    "time": "07:04",
    "branch": "Bangalore"
  },
  {
    "id": "T1513",
    "source": "A1024",
    "target": "A1050",
    "amount": 37533,
    "channel": "IMPS",
    "time": "05:04",
    "branch": "Delhi"
  },
  {
    "id": "T1514",
    "source": "A1031",
    "target": "A1042",
    "amount": 4053,
    "channel": "IMPS",
    "time": "15:13",
    "branch": "Delhi"
  },
  {
    "id": "T1515",
    "source": "A1168",
    "target": "A1084",
    "amount": 61145,
    "channel": "RTGS",
    "time": "05:50",
    "branch": "Bangalore"
  },
  {
    "id": "T1516",
    "source": "A1027",
    "target": "A1197",
    "amount": 15808,
    "channel": "UPI",
    "time": "06:54",
    "branch": "Kolkata"
  },
  {
    "id": "T1517",
    "source": "A1061",
    "target": "A1032",
    "amount": 39670,
    "channel": "UPI",
    "time": "02:47",
    "branch": "Delhi"
  },
  {
    "id": "T1518",
    "source": "A1153",
    "target": "A1127",
    "amount": 70066,
    "channel": "UPI",
    "time": "22:20",
    "branch": "Mumbai"
  },
  {
    "id": "T1519",
    "source": "A1049",
    "target": "A1165",
    "amount": 83200,
    "channel": "UPI",
    "time": "22:40",
    "branch": "Chennai"
  },
  {
    "id": "T1520",
    "source": "A1181",
    "target": "A1182",
    "amount": 86651,
    "channel": "IMPS",
    "time": "16:31",
    "branch": "Chennai"
  },
  {
    "id": "T1521",
    "source": "A1124",
    "target": "A1117",
    "amount": 97292,
    "channel": "IMPS",
    "time": "05:58",
    "branch": "Kolkata"
  },
  {
    "id": "T1522",
    "source": "A1146",
    "target": "A1161",
    "amount": 33750,
    "channel": "RTGS",
    "time": "09:09",
    "branch": "Bangalore"
  },
  {
    "id": "T1523",
    "source": "A1051",
    "target": "A1022",
    "amount": 31389,
    "channel": "RTGS",
    "time": "06:45",
    "branch": "Delhi"
  },
  {
    "id": "T1524",
    "source": "A1155",
    "target": "A1003",
    "amount": 74915,
    "channel": "RTGS",
    "time": "15:55",
    "branch": "Chennai"
  },
  {
    "id": "T1525",
    "source": "A1075",
    "target": "A1088",
    "amount": 61685,
    "channel": "ATM",
    "time": "09:44",
    "branch": "Chennai"
  },
  {
    "id": "T1526",
    "source": "A1131",
    "target": "A1117",
    "amount": 38421,
    "channel": "NEFT",
    "time": "00:27",
    "branch": "Chennai"
  },
  {
    "id": "T1527",
    "source": "A1061",
    "target": "A1131",
    "amount": 31080,
    "channel": "ATM",
    "time": "09:10",
    "branch": "Chennai"
  },
  {
    "id": "T1528",
    "source": "A1139",
    "target": "A1050",
    "amount": 34934,
    "channel": "IMPS",
    "time": "03:26",
    "branch": "Mumbai"
  },
  {
    "id": "T1529",
    "source": "A1197",
    "target": "A1077",
    "amount": 69942,
    "channel": "UPI",
    "time": "20:15",
    "branch": "Kolkata"
  },
  {
    "id": "T1530",
    "source": "A1088",
    "target": "A1051",
    "amount": 48255,
    "channel": "IMPS",
    "time": "21:08",
    "branch": "Chennai"
  },
  {
    "id": "T1531",
    "source": "A1074",
    "target": "A1046",
    "amount": 58466,
    "channel": "ATM",
    "time": "00:51",
    "branch": "Mumbai"
  },
  {
    "id": "T1532",
    "source": "A1189",
    "target": "A1155",
    "amount": 48301,
    "channel": "ATM",
    "time": "08:35",
    "branch": "Chennai"
  },
  {
    "id": "T1533",
    "source": "A1053",
    "target": "A1137",
    "amount": 24252,
    "channel": "NEFT",
    "time": "14:12",
    "branch": "Mumbai"
  },
  {
    "id": "T1534",
    "source": "A1016",
    "target": "A1064",
    "amount": 91730,
    "channel": "NEFT",
    "time": "09:37",
    "branch": "Delhi"
  },
  {
    "id": "T1535",
    "source": "A1072",
    "target": "A1049",
    "amount": 49713,
    "channel": "RTGS",
    "time": "15:42",
    "branch": "Kolkata"
  },
  {
    "id": "T1536",
    "source": "A1026",
    "target": "A1149",
    "amount": 59658,
    "channel": "UPI",
    "time": "23:42",
    "branch": "Bangalore"
  },
  {
    "id": "T1537",
    "source": "A1086",
    "target": "A1035",
    "amount": 5775,
    "channel": "ATM",
    "time": "04:54",
    "branch": "Chennai"
  },
  {
    "id": "T1538",
    "source": "A1048",
    "target": "A1179",
    "amount": 74439,
    "channel": "UPI",
    "time": "11:09",
    "branch": "Mumbai"
  },
  {
    "id": "T1539",
    "source": "A1067",
    "target": "A1165",
    "amount": 44306,
    "channel": "IMPS",
    "time": "06:52",
    "branch": "Kolkata"
  },
  {
    "id": "T1540",
    "source": "A1163",
    "target": "A1019",
    "amount": 51988,
    "channel": "UPI",
    "time": "04:23",
    "branch": "Delhi"
  },
  {
    "id": "T1541",
    "source": "A1196",
    "target": "A1091",
    "amount": 5514,
    "channel": "IMPS",
    "time": "07:16",
    "branch": "Delhi"
  },
  {
    "id": "T1542",
    "source": "A1114",
    "target": "A1060",
    "amount": 57166,
    "channel": "NEFT",
    "time": "09:54",
    "branch": "Bangalore"
  },
  {
    "id": "T1543",
    "source": "A1090",
    "target": "A1139",
    "amount": 66960,
    "channel": "NEFT",
    "time": "19:58",
    "branch": "Kolkata"
  },
  {
    "id": "T1544",
    "source": "A1155",
    "target": "A1045",
    "amount": 81078,
    "channel": "UPI",
    "time": "14:30",
    "branch": "Bangalore"
  },
  {
    "id": "T1545",
    "source": "A1086",
    "target": "A1119",
    "amount": 32739,
    "channel": "NEFT",
    "time": "18:34",
    "branch": "Delhi"
  },
  {
    "id": "T1546",
    "source": "A1144",
    "target": "A1131",
    "amount": 81158,
    "channel": "UPI",
    "time": "12:10",
    "branch": "Bangalore"
  },
  {
    "id": "T1547",
    "source": "A1065",
    "target": "A1008",
    "amount": 92530,
    "channel": "UPI",
    "time": "03:45",
    "branch": "Mumbai"
  },
  {
    "id": "T1548",
    "source": "A1073",
    "target": "A1194",
    "amount": 90323,
    "channel": "IMPS",
    "time": "00:42",
    "branch": "Chennai"
  },
  {
    "id": "T1549",
    "source": "A1195",
    "target": "A1013",
    "amount": 36332,
    "channel": "ATM",
    "time": "05:33",
    "branch": "Delhi"
  },
  {
    "id": "T1550",
    "source": "A1099",
    "target": "A1067",
    "amount": 49079,
    "channel": "ATM",
    "time": "12:45",
    "branch": "Kolkata"
  },
  {
    "id": "T1551",
    "source": "A1190",
    "target": "A1109",
    "amount": 44816,
    "channel": "NEFT",
    "time": "21:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1552",
    "source": "A1118",
    "target": "A1007",
    "amount": 20466,
    "channel": "UPI",
    "time": "01:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1553",
    "source": "A1174",
    "target": "A1030",
    "amount": 47562,
    "channel": "ATM",
    "time": "08:59",
    "branch": "Kolkata"
  },
  {
    "id": "T1554",
    "source": "A1014",
    "target": "A1190",
    "amount": 73931,
    "channel": "UPI",
    "time": "07:33",
    "branch": "Chennai"
  },
  {
    "id": "T1555",
    "source": "A1157",
    "target": "A1034",
    "amount": 13941,
    "channel": "NEFT",
    "time": "03:05",
    "branch": "Kolkata"
  },
  {
    "id": "T1556",
    "source": "A1112",
    "target": "A1105",
    "amount": 81974,
    "channel": "RTGS",
    "time": "20:21",
    "branch": "Delhi"
  },
  {
    "id": "T1557",
    "source": "A1098",
    "target": "A1021",
    "amount": 60155,
    "channel": "ATM",
    "time": "12:04",
    "branch": "Delhi"
  },
  {
    "id": "T1558",
    "source": "A1008",
    "target": "A1179",
    "amount": 37464,
    "channel": "ATM",
    "time": "06:29",
    "branch": "Bangalore"
  },
  {
    "id": "T1559",
    "source": "A1122",
    "target": "A1046",
    "amount": 53904,
    "channel": "UPI",
    "time": "01:43",
    "branch": "Chennai"
  },
  {
    "id": "T1560",
    "source": "A1074",
    "target": "A1144",
    "amount": 23863,
    "channel": "ATM",
    "time": "10:28",
    "branch": "Mumbai"
  },
  {
    "id": "T1561",
    "source": "A1054",
    "target": "A1001",
    "amount": 90248,
    "channel": "IMPS",
    "time": "09:33",
    "branch": "Bangalore"
  },
  {
    "id": "T1562",
    "source": "A1055",
    "target": "A1160",
    "amount": 89808,
    "channel": "UPI",
    "time": "12:51",
    "branch": "Bangalore"
  },
  {
    "id": "T1563",
    "source": "A1140",
    "target": "A1041",
    "amount": 40793,
    "channel": "UPI",
    "time": "21:04",
    "branch": "Kolkata"
  },
  {
    "id": "T1564",
    "source": "A1054",
    "target": "A1049",
    "amount": 57213,
    "channel": "IMPS",
    "time": "02:00",
    "branch": "Bangalore"
  },
  {
    "id": "T1565",
    "source": "A1045",
    "target": "A1181",
    "amount": 93555,
    "channel": "NEFT",
    "time": "13:35",
    "branch": "Chennai"
  },
  {
    "id": "T1566",
    "source": "A1016",
    "target": "A1108",
    "amount": 86730,
    "channel": "NEFT",
    "time": "02:27",
    "branch": "Bangalore"
  },
  {
    "id": "T1567",
    "source": "A1136",
    "target": "A1053",
    "amount": 68023,
    "channel": "UPI",
    "time": "03:47",
    "branch": "Mumbai"
  },
  {
    "id": "T1568",
    "source": "A1006",
    "target": "A1136",
    "amount": 59568,
    "channel": "IMPS",
    "time": "17:52",
    "branch": "Delhi"
  },
  {
    "id": "T1569",
    "source": "A1066",
    "target": "A1130",
    "amount": 11377,
    "channel": "NEFT",
    "time": "23:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1570",
    "source": "A1198",
    "target": "A1069",
    "amount": 45564,
    "channel": "UPI",
    "time": "11:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1571",
    "source": "A1011",
    "target": "A1029",
    "amount": 30144,
    "channel": "ATM",
    "time": "14:25",
    "branch": "Bangalore"
  },
  {
    "id": "T1572",
    "source": "A1005",
    "target": "A1053",
    "amount": 69624,
    "channel": "ATM",
    "time": "20:35",
    "branch": "Bangalore"
  },
  {
    "id": "T1573",
    "source": "A1147",
    "target": "A1068",
    "amount": 4130,
    "channel": "IMPS",
    "time": "15:51",
    "branch": "Chennai"
  },
  {
    "id": "T1574",
    "source": "A1062",
    "target": "A1079",
    "amount": 90209,
    "channel": "NEFT",
    "time": "21:52",
    "branch": "Chennai"
  },
  {
    "id": "T1575",
    "source": "A1148",
    "target": "A1161",
    "amount": 50512,
    "channel": "ATM",
    "time": "04:09",
    "branch": "Bangalore"
  },
  {
    "id": "T1576",
    "source": "A1047",
    "target": "A1170",
    "amount": 38155,
    "channel": "ATM",
    "time": "18:34",
    "branch": "Delhi"
  },
  {
    "id": "T1577",
    "source": "A1017",
    "target": "A1019",
    "amount": 87667,
    "channel": "ATM",
    "time": "12:43",
    "branch": "Mumbai"
  },
  {
    "id": "T1578",
    "source": "A1178",
    "target": "A1145",
    "amount": 89644,
    "channel": "RTGS",
    "time": "08:09",
    "branch": "Kolkata"
  },
  {
    "id": "T1579",
    "source": "A1054",
    "target": "A1009",
    "amount": 75747,
    "channel": "IMPS",
    "time": "22:47",
    "branch": "Delhi"
  },
  {
    "id": "T1580",
    "source": "A1121",
    "target": "A1144",
    "amount": 63766,
    "channel": "IMPS",
    "time": "14:04",
    "branch": "Chennai"
  },
  {
    "id": "T1581",
    "source": "A1186",
    "target": "A1026",
    "amount": 18853,
    "channel": "NEFT",
    "time": "14:55",
    "branch": "Chennai"
  },
  {
    "id": "T1582",
    "source": "A1191",
    "target": "A1031",
    "amount": 87455,
    "channel": "NEFT",
    "time": "19:04",
    "branch": "Chennai"
  },
  {
    "id": "T1583",
    "source": "A1114",
    "target": "A1061",
    "amount": 14232,
    "channel": "UPI",
    "time": "12:22",
    "branch": "Mumbai"
  },
  {
    "id": "T1584",
    "source": "A1147",
    "target": "A1045",
    "amount": 88137,
    "channel": "UPI",
    "time": "07:05",
    "branch": "Delhi"
  },
  {
    "id": "T1585",
    "source": "A1046",
    "target": "A1181",
    "amount": 96685,
    "channel": "UPI",
    "time": "00:56",
    "branch": "Delhi"
  },
  {
    "id": "T1586",
    "source": "A1078",
    "target": "A1131",
    "amount": 11900,
    "channel": "UPI",
    "time": "23:59",
    "branch": "Kolkata"
  },
  {
    "id": "T1587",
    "source": "A1117",
    "target": "A1050",
    "amount": 66746,
    "channel": "RTGS",
    "time": "22:50",
    "branch": "Mumbai"
  },
  {
    "id": "T1588",
    "source": "A1129",
    "target": "A1174",
    "amount": 26264,
    "channel": "ATM",
    "time": "22:31",
    "branch": "Bangalore"
  },
  {
    "id": "T1589",
    "source": "A1187",
    "target": "A1040",
    "amount": 66225,
    "channel": "RTGS",
    "time": "02:03",
    "branch": "Chennai"
  },
  {
    "id": "T1590",
    "source": "A1005",
    "target": "A1067",
    "amount": 21099,
    "channel": "IMPS",
    "time": "19:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1591",
    "source": "A1138",
    "target": "A1186",
    "amount": 56195,
    "channel": "IMPS",
    "time": "11:27",
    "branch": "Mumbai"
  },
  {
    "id": "T1592",
    "source": "A1187",
    "target": "A1020",
    "amount": 26591,
    "channel": "NEFT",
    "time": "07:16",
    "branch": "Bangalore"
  },
  {
    "id": "T1593",
    "source": "A1031",
    "target": "A1075",
    "amount": 98113,
    "channel": "IMPS",
    "time": "04:08",
    "branch": "Mumbai"
  },
  {
    "id": "T1594",
    "source": "A1163",
    "target": "A1033",
    "amount": 50566,
    "channel": "RTGS",
    "time": "18:07",
    "branch": "Mumbai"
  },
  {
    "id": "T1595",
    "source": "A1181",
    "target": "A1001",
    "amount": 15762,
    "channel": "IMPS",
    "time": "16:17",
    "branch": "Mumbai"
  },
  {
    "id": "T1596",
    "source": "A1137",
    "target": "A1080",
    "amount": 75792,
    "channel": "UPI",
    "time": "12:45",
    "branch": "Chennai"
  },
  {
    "id": "T1597",
    "source": "A1050",
    "target": "A1082",
    "amount": 54621,
    "channel": "RTGS",
    "time": "13:57",
    "branch": "Kolkata"
  },
  {
    "id": "T1598",
    "source": "A1116",
    "target": "A1079",
    "amount": 62961,
    "channel": "RTGS",
    "time": "20:20",
    "branch": "Mumbai"
  },
  {
    "id": "T1599",
    "source": "A1151",
    "target": "A1140",
    "amount": 23676,
    "channel": "UPI",
    "time": "05:39",
    "branch": "Mumbai"
  },
  {
    "id": "T1600",
    "source": "A1014",
    "target": "A1139",
    "amount": 31432,
    "channel": "UPI",
    "time": "17:57",
    "branch": "Delhi"
  },
  {
    "id": "T1601",
    "source": "A1100",
    "target": "A1141",
    "amount": 64225,
    "channel": "IMPS",
    "time": "19:56",
    "branch": "Mumbai"
  },
  {
    "id": "T1602",
    "source": "A1171",
    "target": "A1163",
    "amount": 38347,
    "channel": "RTGS",
    "time": "16:57",
    "branch": "Bangalore"
  },
  {
    "id": "T1603",
    "source": "A1063",
    "target": "A1160",
    "amount": 96771,
    "channel": "ATM",
    "time": "16:59",
    "branch": "Chennai"
  },
  {
    "id": "T1604",
    "source": "A1020",
    "target": "A1153",
    "amount": 49176,
    "channel": "RTGS",
    "time": "18:35",
    "branch": "Kolkata"
  },
  {
    "id": "T1605",
    "source": "A1018",
    "target": "A1014",
    "amount": 83126,
    "channel": "UPI",
    "time": "06:13",
    "branch": "Kolkata"
  },
  {
    "id": "T1606",
    "source": "A1047",
    "target": "A1125",
    "amount": 58286,
    "channel": "ATM",
    "time": "04:28",
    "branch": "Mumbai"
  },
  {
    "id": "T1607",
    "source": "A1059",
    "target": "A1166",
    "amount": 49381,
    "channel": "IMPS",
    "time": "21:19",
    "branch": "Mumbai"
  },
  {
    "id": "T1608",
    "source": "A1075",
    "target": "A1089",
    "amount": 70877,
    "channel": "RTGS",
    "time": "12:09",
    "branch": "Kolkata"
  },
  {
    "id": "T1609",
    "source": "A1037",
    "target": "A1120",
    "amount": 64067,
    "channel": "IMPS",
    "time": "02:58",
    "branch": "Kolkata"
  },
  {
    "id": "T1610",
    "source": "A1109",
    "target": "A1060",
    "amount": 65796,
    "channel": "NEFT",
    "time": "08:37",
    "branch": "Mumbai"
  },
  {
    "id": "T1611",
    "source": "A1095",
    "target": "A1127",
    "amount": 17383,
    "channel": "NEFT",
    "time": "18:47",
    "branch": "Mumbai"
  },
  {
    "id": "T1612",
    "source": "A1127",
    "target": "A1062",
    "amount": 66885,
    "channel": "IMPS",
    "time": "22:53",
    "branch": "Chennai"
  },
  {
    "id": "T1613",
    "source": "A1158",
    "target": "A1128",
    "amount": 46407,
    "channel": "ATM",
    "time": "08:14",
    "branch": "Chennai"
  },
  {
    "id": "T1614",
    "source": "A1071",
    "target": "A1157",
    "amount": 37513,
    "channel": "RTGS",
    "time": "02:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1615",
    "source": "A1047",
    "target": "A1015",
    "amount": 21636,
    "channel": "IMPS",
    "time": "08:04",
    "branch": "Bangalore"
  },
  {
    "id": "T1616",
    "source": "A1123",
    "target": "A1033",
    "amount": 52862,
    "channel": "RTGS",
    "time": "15:28",
    "branch": "Mumbai"
  },
  {
    "id": "T1617",
    "source": "A1015",
    "target": "A1003",
    "amount": 48989,
    "channel": "RTGS",
    "time": "19:56",
    "branch": "Mumbai"
  },
  {
    "id": "T1618",
    "source": "A1011",
    "target": "A1037",
    "amount": 46547,
    "channel": "ATM",
    "time": "16:14",
    "branch": "Chennai"
  },
  {
    "id": "T1619",
    "source": "A1088",
    "target": "A1168",
    "amount": 46279,
    "channel": "RTGS",
    "time": "11:04",
    "branch": "Bangalore"
  },
  {
    "id": "T1620",
    "source": "A1020",
    "target": "A1151",
    "amount": 79597,
    "channel": "ATM",
    "time": "17:53",
    "branch": "Delhi"
  },
  {
    "id": "T1621",
    "source": "A1190",
    "target": "A1104",
    "amount": 41589,
    "channel": "ATM",
    "time": "03:52",
    "branch": "Chennai"
  },
  {
    "id": "T1622",
    "source": "A1062",
    "target": "A1137",
    "amount": 84913,
    "channel": "UPI",
    "time": "12:04",
    "branch": "Mumbai"
  },
  {
    "id": "T1623",
    "source": "A1147",
    "target": "A1019",
    "amount": 71251,
    "channel": "NEFT",
    "time": "21:34",
    "branch": "Chennai"
  },
  {
    "id": "T1624",
    "source": "A1197",
    "target": "A1125",
    "amount": 36502,
    "channel": "ATM",
    "time": "03:49",
    "branch": "Delhi"
  },
  {
    "id": "T1625",
    "source": "A1034",
    "target": "A1103",
    "amount": 69182,
    "channel": "UPI",
    "time": "19:19",
    "branch": "Chennai"
  },
  {
    "id": "T1626",
    "source": "A1178",
    "target": "A1077",
    "amount": 91223,
    "channel": "IMPS",
    "time": "13:11",
    "branch": "Mumbai"
  },
  {
    "id": "T1627",
    "source": "A1063",
    "target": "A1168",
    "amount": 58156,
    "channel": "ATM",
    "time": "15:25",
    "branch": "Bangalore"
  },
  {
    "id": "T1628",
    "source": "A1116",
    "target": "A1138",
    "amount": 96753,
    "channel": "IMPS",
    "time": "08:30",
    "branch": "Delhi"
  },
  {
    "id": "T1629",
    "source": "A1028",
    "target": "A1054",
    "amount": 33596,
    "channel": "UPI",
    "time": "07:03",
    "branch": "Delhi"
  },
  {
    "id": "T1630",
    "source": "A1027",
    "target": "A1122",
    "amount": 34424,
    "channel": "NEFT",
    "time": "17:48",
    "branch": "Kolkata"
  },
  {
    "id": "T1631",
    "source": "A1117",
    "target": "A1041",
    "amount": 55787,
    "channel": "NEFT",
    "time": "19:19",
    "branch": "Delhi"
  },
  {
    "id": "T1632",
    "source": "A1004",
    "target": "A1113",
    "amount": 8548,
    "channel": "ATM",
    "time": "14:38",
    "branch": "Bangalore"
  },
  {
    "id": "T1633",
    "source": "A1020",
    "target": "A1127",
    "amount": 8084,
    "channel": "UPI",
    "time": "23:06",
    "branch": "Bangalore"
  },
  {
    "id": "T1634",
    "source": "A1192",
    "target": "A1029",
    "amount": 62813,
    "channel": "NEFT",
    "time": "21:38",
    "branch": "Kolkata"
  },
  {
    "id": "T1635",
    "source": "A1055",
    "target": "A1040",
    "amount": 43803,
    "channel": "RTGS",
    "time": "23:56",
    "branch": "Chennai"
  },
  {
    "id": "T1636",
    "source": "A1043",
    "target": "A1125",
    "amount": 9976,
    "channel": "UPI",
    "time": "06:50",
    "branch": "Delhi"
  },
  {
    "id": "T1637",
    "source": "A1187",
    "target": "A1147",
    "amount": 44624,
    "channel": "UPI",
    "time": "16:29",
    "branch": "Mumbai"
  },
  {
    "id": "T1638",
    "source": "A1132",
    "target": "A1176",
    "amount": 59525,
    "channel": "UPI",
    "time": "05:00",
    "branch": "Delhi"
  },
  {
    "id": "T1639",
    "source": "A1029",
    "target": "A1018",
    "amount": 89579,
    "channel": "UPI",
    "time": "05:10",
    "branch": "Chennai"
  },
  {
    "id": "T1640",
    "source": "A1049",
    "target": "A1128",
    "amount": 94844,
    "channel": "RTGS",
    "time": "17:27",
    "branch": "Mumbai"
  },
  {
    "id": "T1641",
    "source": "A1036",
    "target": "A1120",
    "amount": 79252,
    "channel": "RTGS",
    "time": "05:09",
    "branch": "Mumbai"
  },
  {
    "id": "T1642",
    "source": "A1162",
    "target": "A1116",
    "amount": 47742,
    "channel": "UPI",
    "time": "02:07",
    "branch": "Delhi"
  },
  {
    "id": "T1643",
    "source": "A1111",
    "target": "A1123",
    "amount": 49481,
    "channel": "NEFT",
    "time": "12:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1644",
    "source": "A1015",
    "target": "A1171",
    "amount": 49152,
    "channel": "RTGS",
    "time": "13:19",
    "branch": "Mumbai"
  },
  {
    "id": "T1645",
    "source": "A1133",
    "target": "A1040",
    "amount": 89180,
    "channel": "IMPS",
    "time": "13:34",
    "branch": "Kolkata"
  },
  {
    "id": "T1646",
    "source": "A1038",
    "target": "A1148",
    "amount": 70850,
    "channel": "NEFT",
    "time": "14:03",
    "branch": "Kolkata"
  },
  {
    "id": "T1647",
    "source": "A1068",
    "target": "A1194",
    "amount": 9388,
    "channel": "RTGS",
    "time": "06:54",
    "branch": "Bangalore"
  },
  {
    "id": "T1648",
    "source": "A1093",
    "target": "A1157",
    "amount": 40561,
    "channel": "IMPS",
    "time": "12:29",
    "branch": "Delhi"
  },
  {
    "id": "T1649",
    "source": "A1125",
    "target": "A1036",
    "amount": 50661,
    "channel": "ATM",
    "time": "09:45",
    "branch": "Bangalore"
  },
  {
    "id": "T1650",
    "source": "A1009",
    "target": "A1101",
    "amount": 71929,
    "channel": "NEFT",
    "time": "08:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1651",
    "source": "A1183",
    "target": "A1124",
    "amount": 4749,
    "channel": "RTGS",
    "time": "01:04",
    "branch": "Delhi"
  },
  {
    "id": "T1652",
    "source": "A1148",
    "target": "A1022",
    "amount": 94782,
    "channel": "IMPS",
    "time": "00:37",
    "branch": "Bangalore"
  },
  {
    "id": "T1653",
    "source": "A1184",
    "target": "A1073",
    "amount": 68753,
    "channel": "RTGS",
    "time": "17:24",
    "branch": "Mumbai"
  },
  {
    "id": "T1654",
    "source": "A1091",
    "target": "A1154",
    "amount": 71064,
    "channel": "ATM",
    "time": "19:41",
    "branch": "Kolkata"
  },
  {
    "id": "T1655",
    "source": "A1097",
    "target": "A1009",
    "amount": 58690,
    "channel": "NEFT",
    "time": "06:17",
    "branch": "Chennai"
  },
  {
    "id": "T1656",
    "source": "A1176",
    "target": "A1197",
    "amount": 88458,
    "channel": "NEFT",
    "time": "23:37",
    "branch": "Kolkata"
  },
  {
    "id": "T1657",
    "source": "A1020",
    "target": "A1180",
    "amount": 49174,
    "channel": "UPI",
    "time": "02:39",
    "branch": "Chennai"
  },
  {
    "id": "T1658",
    "source": "A1055",
    "target": "A1010",
    "amount": 44439,
    "channel": "RTGS",
    "time": "02:32",
    "branch": "Delhi"
  },
  {
    "id": "T1659",
    "source": "A1022",
    "target": "A1160",
    "amount": 64069,
    "channel": "RTGS",
    "time": "15:11",
    "branch": "Chennai"
  },
  {
    "id": "T1660",
    "source": "A1075",
    "target": "A1056",
    "amount": 19463,
    "channel": "RTGS",
    "time": "02:34",
    "branch": "Kolkata"
  },
  {
    "id": "T1661",
    "source": "A1126",
    "target": "A1186",
    "amount": 24111,
    "channel": "UPI",
    "time": "21:13",
    "branch": "Chennai"
  },
  {
    "id": "T1662",
    "source": "A1136",
    "target": "A1155",
    "amount": 76691,
    "channel": "RTGS",
    "time": "20:39",
    "branch": "Delhi"
  },
  {
    "id": "T1663",
    "source": "A1100",
    "target": "A1088",
    "amount": 46920,
    "channel": "UPI",
    "time": "18:45",
    "branch": "Kolkata"
  },
  {
    "id": "T1664",
    "source": "A1037",
    "target": "A1048",
    "amount": 87210,
    "channel": "ATM",
    "time": "13:56",
    "branch": "Bangalore"
  },
  {
    "id": "T1665",
    "source": "A1064",
    "target": "A1168",
    "amount": 54554,
    "channel": "IMPS",
    "time": "14:42",
    "branch": "Kolkata"
  },
  {
    "id": "T1666",
    "source": "A1136",
    "target": "A1050",
    "amount": 93197,
    "channel": "UPI",
    "time": "18:20",
    "branch": "Mumbai"
  },
  {
    "id": "T1667",
    "source": "A1000",
    "target": "A1032",
    "amount": 61347,
    "channel": "RTGS",
    "time": "19:15",
    "branch": "Delhi"
  },
  {
    "id": "T1668",
    "source": "A1080",
    "target": "A1021",
    "amount": 90390,
    "channel": "ATM",
    "time": "16:13",
    "branch": "Kolkata"
  },
  {
    "id": "T1669",
    "source": "A1189",
    "target": "A1100",
    "amount": 89800,
    "channel": "UPI",
    "time": "06:43",
    "branch": "Bangalore"
  },
  {
    "id": "T1670",
    "source": "A1011",
    "target": "A1198",
    "amount": 49927,
    "channel": "ATM",
    "time": "14:08",
    "branch": "Delhi"
  },
  {
    "id": "T1671",
    "source": "A1094",
    "target": "A1176",
    "amount": 27442,
    "channel": "RTGS",
    "time": "19:37",
    "branch": "Delhi"
  },
  {
    "id": "T1672",
    "source": "A1099",
    "target": "A1011",
    "amount": 92182,
    "channel": "IMPS",
    "time": "19:40",
    "branch": "Mumbai"
  },
  {
    "id": "T1673",
    "source": "A1126",
    "target": "A1156",
    "amount": 4926,
    "channel": "NEFT",
    "time": "15:28",
    "branch": "Bangalore"
  },
  {
    "id": "T1674",
    "source": "A1159",
    "target": "A1105",
    "amount": 10844,
    "channel": "ATM",
    "time": "14:53",
    "branch": "Delhi"
  },
  {
    "id": "T1675",
    "source": "A1014",
    "target": "A1078",
    "amount": 79267,
    "channel": "IMPS",
    "time": "11:57",
    "branch": "Kolkata"
  },
  {
    "id": "T1676",
    "source": "A1108",
    "target": "A1010",
    "amount": 33195,
    "channel": "ATM",
    "time": "23:11",
    "branch": "Kolkata"
  },
  {
    "id": "T1677",
    "source": "A1066",
    "target": "A1194",
    "amount": 97525,
    "channel": "ATM",
    "time": "19:46",
    "branch": "Mumbai"
  },
  {
    "id": "T1678",
    "source": "A1104",
    "target": "A1064",
    "amount": 63606,
    "channel": "NEFT",
    "time": "13:03",
    "branch": "Bangalore"
  },
  {
    "id": "T1679",
    "source": "A1020",
    "target": "A1026",
    "amount": 9518,
    "channel": "ATM",
    "time": "12:33",
    "branch": "Kolkata"
  },
  {
    "id": "T1680",
    "source": "A1010",
    "target": "A1011",
    "amount": 86573,
    "channel": "NEFT",
    "time": "08:23",
    "branch": "Bangalore"
  },
  {
    "id": "T1681",
    "source": "A1100",
    "target": "A1063",
    "amount": 53751,
    "channel": "UPI",
    "time": "18:44",
    "branch": "Delhi"
  },
  {
    "id": "T1682",
    "source": "A1182",
    "target": "A1184",
    "amount": 21201,
    "channel": "IMPS",
    "time": "05:17",
    "branch": "Bangalore"
  },
  {
    "id": "T1683",
    "source": "A1079",
    "target": "A1000",
    "amount": 1700,
    "channel": "UPI",
    "time": "07:09",
    "branch": "Delhi"
  },
  {
    "id": "T1684",
    "source": "A1113",
    "target": "A1122",
    "amount": 9959,
    "channel": "UPI",
    "time": "10:24",
    "branch": "Kolkata"
  },
  {
    "id": "T1685",
    "source": "A1199",
    "target": "A1049",
    "amount": 62728,
    "channel": "ATM",
    "time": "16:41",
    "branch": "Kolkata"
  },
  {
    "id": "T1686",
    "source": "A1130",
    "target": "A1144",
    "amount": 40604,
    "channel": "NEFT",
    "time": "17:10",
    "branch": "Chennai"
  },
  {
    "id": "T1687",
    "source": "A1121",
    "target": "A1106",
    "amount": 79655,
    "channel": "ATM",
    "time": "01:57",
    "branch": "Bangalore"
  },
  {
    "id": "T1688",
    "source": "A1001",
    "target": "A1148",
    "amount": 40171,
    "channel": "UPI",
    "time": "15:58",
    "branch": "Delhi"
  },
  {
    "id": "T1689",
    "source": "A1150",
    "target": "A1195",
    "amount": 19737,
    "channel": "UPI",
    "time": "12:03",
    "branch": "Delhi"
  },
  {
    "id": "T1690",
    "source": "A1116",
    "target": "A1099",
    "amount": 40012,
    "channel": "IMPS",
    "time": "02:05",
    "branch": "Bangalore"
  },
  {
    "id": "T1691",
    "source": "A1090",
    "target": "A1031",
    "amount": 33699,
    "channel": "RTGS",
    "time": "21:50",
    "branch": "Chennai"
  },
  {
    "id": "T1692",
    "source": "A1080",
    "target": "A1051",
    "amount": 67797,
    "channel": "UPI",
    "time": "01:47",
    "branch": "Bangalore"
  },
  {
    "id": "T1693",
    "source": "A1001",
    "target": "A1020",
    "amount": 70597,
    "channel": "ATM",
    "time": "13:27",
    "branch": "Bangalore"
  },
  {
    "id": "T1694",
    "source": "A1056",
    "target": "A1197",
    "amount": 74986,
    "channel": "RTGS",
    "time": "16:02",
    "branch": "Bangalore"
  },
  {
    "id": "T1695",
    "source": "A1192",
    "target": "A1185",
    "amount": 7766,
    "channel": "NEFT",
    "time": "01:32",
    "branch": "Delhi"
  },
  {
    "id": "T1696",
    "source": "A1089",
    "target": "A1197",
    "amount": 50969,
    "channel": "ATM",
    "time": "00:58",
    "branch": "Bangalore"
  },
  {
    "id": "T1697",
    "source": "A1150",
    "target": "A1113",
    "amount": 65746,
    "channel": "IMPS",
    "time": "04:42",
    "branch": "Chennai"
  },
  {
    "id": "T1698",
    "source": "A1022",
    "target": "A1135",
    "amount": 46992,
    "channel": "IMPS",
    "time": "08:46",
    "branch": "Mumbai"
  },
  {
    "id": "T1699",
    "source": "A1039",
    "target": "A1097",
    "amount": 45280,
    "channel": "RTGS",
    "time": "15:26",
    "branch": "Mumbai"
  },
  {
    "id": "T1700",
    "source": "A1187",
    "target": "A1004",
    "amount": 37392,
    "channel": "NEFT",
    "time": "04:20",
    "branch": "Chennai"
  },
  {
    "id": "T1701",
    "source": "A1154",
    "target": "A1187",
    "amount": 53257,
    "channel": "ATM",
    "time": "16:55",
    "branch": "Mumbai"
  },
  {
    "id": "T1702",
    "source": "A1076",
    "target": "A1139",
    "amount": 92943,
    "channel": "IMPS",
    "time": "22:11",
    "branch": "Mumbai"
  },
  {
    "id": "T1703",
    "source": "A1022",
    "target": "A1140",
    "amount": 66530,
    "channel": "UPI",
    "time": "23:02",
    "branch": "Bangalore"
  },
  {
    "id": "T1704",
    "source": "A1064",
    "target": "A1112",
    "amount": 68867,
    "channel": "ATM",
    "time": "00:04",
    "branch": "Bangalore"
  },
  {
    "id": "T1705",
    "source": "A1050",
    "target": "A1130",
    "amount": 72751,
    "channel": "RTGS",
    "time": "10:15",
    "branch": "Bangalore"
  },
  {
    "id": "T1706",
    "source": "A1094",
    "target": "A1159",
    "amount": 10538,
    "channel": "NEFT",
    "time": "02:24",
    "branch": "Kolkata"
  },
  {
    "id": "T1707",
    "source": "A1167",
    "target": "A1102",
    "amount": 48388,
    "channel": "UPI",
    "time": "19:56",
    "branch": "Kolkata"
  },
  {
    "id": "T1708",
    "source": "A1086",
    "target": "A1072",
    "amount": 7429,
    "channel": "IMPS",
    "time": "20:54",
    "branch": "Bangalore"
  },
  {
    "id": "T1709",
    "source": "A1055",
    "target": "A1170",
    "amount": 15753,
    "channel": "IMPS",
    "time": "08:08",
    "branch": "Delhi"
  },
  {
    "id": "T1710",
    "source": "A1176",
    "target": "A1069",
    "amount": 69838,
    "channel": "RTGS",
    "time": "07:14",
    "branch": "Kolkata"
  },
  {
    "id": "T1711",
    "source": "A1166",
    "target": "A1064",
    "amount": 50193,
    "channel": "IMPS",
    "time": "22:45",
    "branch": "Mumbai"
  },
  {
    "id": "T1712",
    "source": "A1058",
    "target": "A1029",
    "amount": 46767,
    "channel": "UPI",
    "time": "19:32",
    "branch": "Bangalore"
  },
  {
    "id": "T1713",
    "source": "A1010",
    "target": "A1111",
    "amount": 52248,
    "channel": "UPI",
    "time": "18:01",
    "branch": "Chennai"
  },
  {
    "id": "T1714",
    "source": "A1079",
    "target": "A1137",
    "amount": 24160,
    "channel": "ATM",
    "time": "18:31",
    "branch": "Kolkata"
  },
  {
    "id": "T1715",
    "source": "A1063",
    "target": "A1139",
    "amount": 6571,
    "channel": "ATM",
    "time": "16:37",
    "branch": "Mumbai"
  },
  {
    "id": "T1716",
    "source": "A1114",
    "target": "A1169",
    "amount": 60812,
    "channel": "IMPS",
    "time": "17:39",
    "branch": "Delhi"
  },
  {
    "id": "T1717",
    "source": "A1131",
    "target": "A1054",
    "amount": 44274,
    "channel": "UPI",
    "time": "12:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1718",
    "source": "A1161",
    "target": "A1087",
    "amount": 19991,
    "channel": "RTGS",
    "time": "01:54",
    "branch": "Mumbai"
  },
  {
    "id": "T1719",
    "source": "A1048",
    "target": "A1059",
    "amount": 49274,
    "channel": "UPI",
    "time": "06:18",
    "branch": "Bangalore"
  },
  {
    "id": "T1720",
    "source": "A1078",
    "target": "A1109",
    "amount": 25620,
    "channel": "UPI",
    "time": "22:03",
    "branch": "Bangalore"
  },
  {
    "id": "T1721",
    "source": "A1163",
    "target": "A1111",
    "amount": 73454,
    "channel": "UPI",
    "time": "12:15",
    "branch": "Bangalore"
  },
  {
    "id": "T1722",
    "source": "A1140",
    "target": "A1186",
    "amount": 23062,
    "channel": "NEFT",
    "time": "07:49",
    "branch": "Chennai"
  },
  {
    "id": "T1723",
    "source": "A1004",
    "target": "A1191",
    "amount": 28561,
    "channel": "IMPS",
    "time": "04:08",
    "branch": "Delhi"
  },
  {
    "id": "T1724",
    "source": "A1087",
    "target": "A1063",
    "amount": 4263,
    "channel": "NEFT",
    "time": "14:44",
    "branch": "Kolkata"
  },
  {
    "id": "T1725",
    "source": "A1130",
    "target": "A1056",
    "amount": 54181,
    "channel": "NEFT",
    "time": "14:27",
    "branch": "Bangalore"
  },
  {
    "id": "T1726",
    "source": "A1019",
    "target": "A1094",
    "amount": 67682,
    "channel": "IMPS",
    "time": "18:33",
    "branch": "Kolkata"
  },
  {
    "id": "T1727",
    "source": "A1155",
    "target": "A1044",
    "amount": 14787,
    "channel": "UPI",
    "time": "22:51",
    "branch": "Chennai"
  },
  {
    "id": "T1728",
    "source": "A1026",
    "target": "A1113",
    "amount": 72852,
    "channel": "IMPS",
    "time": "01:02",
    "branch": "Kolkata"
  },
  {
    "id": "T1729",
    "source": "A1127",
    "target": "A1103",
    "amount": 43768,
    "channel": "UPI",
    "time": "10:39",
    "branch": "Bangalore"
  },
  {
    "id": "T1730",
    "source": "A1138",
    "target": "A1033",
    "amount": 72970,
    "channel": "IMPS",
    "time": "21:53",
    "branch": "Mumbai"
  },
  {
    "id": "T1731",
    "source": "A1086",
    "target": "A1013",
    "amount": 17650,
    "channel": "IMPS",
    "time": "01:51",
    "branch": "Kolkata"
  },
  {
    "id": "T1732",
    "source": "A1055",
    "target": "A1046",
    "amount": 75980,
    "channel": "RTGS",
    "time": "14:09",
    "branch": "Delhi"
  },
  {
    "id": "T1733",
    "source": "A1144",
    "target": "A1029",
    "amount": 80072,
    "channel": "UPI",
    "time": "23:51",
    "branch": "Bangalore"
  },
  {
    "id": "T1734",
    "source": "A1177",
    "target": "A1018",
    "amount": 79104,
    "channel": "ATM",
    "time": "04:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1735",
    "source": "A1103",
    "target": "A1169",
    "amount": 56227,
    "channel": "UPI",
    "time": "08:04",
    "branch": "Bangalore"
  },
  {
    "id": "T1736",
    "source": "A1017",
    "target": "A1060",
    "amount": 94652,
    "channel": "NEFT",
    "time": "11:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1737",
    "source": "A1132",
    "target": "A1192",
    "amount": 21427,
    "channel": "RTGS",
    "time": "13:55",
    "branch": "Chennai"
  },
  {
    "id": "T1738",
    "source": "A1012",
    "target": "A1095",
    "amount": 61847,
    "channel": "ATM",
    "time": "18:55",
    "branch": "Mumbai"
  },
  {
    "id": "T1739",
    "source": "A1161",
    "target": "A1196",
    "amount": 35611,
    "channel": "NEFT",
    "time": "13:25",
    "branch": "Kolkata"
  },
  {
    "id": "T1740",
    "source": "A1110",
    "target": "A1016",
    "amount": 16351,
    "channel": "UPI",
    "time": "22:27",
    "branch": "Mumbai"
  },
  {
    "id": "T1741",
    "source": "A1135",
    "target": "A1039",
    "amount": 11257,
    "channel": "RTGS",
    "time": "07:17",
    "branch": "Kolkata"
  },
  {
    "id": "T1742",
    "source": "A1079",
    "target": "A1081",
    "amount": 75091,
    "channel": "NEFT",
    "time": "13:06",
    "branch": "Delhi"
  },
  {
    "id": "T1743",
    "source": "A1025",
    "target": "A1080",
    "amount": 18953,
    "channel": "IMPS",
    "time": "20:46",
    "branch": "Kolkata"
  },
  {
    "id": "T1744",
    "source": "A1056",
    "target": "A1041",
    "amount": 12710,
    "channel": "NEFT",
    "time": "20:04",
    "branch": "Delhi"
  },
  {
    "id": "T1745",
    "source": "A1134",
    "target": "A1022",
    "amount": 28715,
    "channel": "ATM",
    "time": "04:49",
    "branch": "Mumbai"
  },
  {
    "id": "T1746",
    "source": "A1016",
    "target": "A1159",
    "amount": 93021,
    "channel": "IMPS",
    "time": "03:39",
    "branch": "Delhi"
  },
  {
    "id": "T1747",
    "source": "A1148",
    "target": "A1005",
    "amount": 65279,
    "channel": "UPI",
    "time": "03:06",
    "branch": "Chennai"
  },
  {
    "id": "T1748",
    "source": "A1041",
    "target": "A1188",
    "amount": 98746,
    "channel": "IMPS",
    "time": "00:39",
    "branch": "Bangalore"
  },
  {
    "id": "T1749",
    "source": "A1073",
    "target": "A1177",
    "amount": 51665,
    "channel": "UPI",
    "time": "17:33",
    "branch": "Chennai"
  },
  {
    "id": "T1750",
    "source": "A1065",
    "target": "A1155",
    "amount": 13629,
    "channel": "RTGS",
    "time": "15:05",
    "branch": "Bangalore"
  },
  {
    "id": "T1751",
    "source": "A1085",
    "target": "A1026",
    "amount": 4275,
    "channel": "UPI",
    "time": "10:20",
    "branch": "Delhi"
  },
  {
    "id": "T1752",
    "source": "A1031",
    "target": "A1071",
    "amount": 10442,
    "channel": "IMPS",
    "time": "10:25",
    "branch": "Kolkata"
  },
  {
    "id": "T1753",
    "source": "A1192",
    "target": "A1093",
    "amount": 46087,
    "channel": "NEFT",
    "time": "03:43",
    "branch": "Chennai"
  },
  {
    "id": "T1754",
    "source": "A1096",
    "target": "A1014",
    "amount": 76373,
    "channel": "UPI",
    "time": "12:36",
    "branch": "Kolkata"
  },
  {
    "id": "T1755",
    "source": "A1039",
    "target": "A1154",
    "amount": 24308,
    "channel": "IMPS",
    "time": "14:45",
    "branch": "Bangalore"
  },
  {
    "id": "T1756",
    "source": "A1015",
    "target": "A1177",
    "amount": 90473,
    "channel": "RTGS",
    "time": "05:13",
    "branch": "Bangalore"
  },
  {
    "id": "T1757",
    "source": "A1171",
    "target": "A1005",
    "amount": 85239,
    "channel": "RTGS",
    "time": "08:12",
    "branch": "Chennai"
  },
  {
    "id": "T1758",
    "source": "A1008",
    "target": "A1094",
    "amount": 32354,
    "channel": "IMPS",
    "time": "23:48",
    "branch": "Bangalore"
  },
  {
    "id": "T1759",
    "source": "A1167",
    "target": "A1036",
    "amount": 38616,
    "channel": "RTGS",
    "time": "09:34",
    "branch": "Chennai"
  },
  {
    "id": "T1760",
    "source": "A1030",
    "target": "A1123",
    "amount": 4282,
    "channel": "RTGS",
    "time": "23:59",
    "branch": "Kolkata"
  },
  {
    "id": "T1761",
    "source": "A1050",
    "target": "A1003",
    "amount": 51275,
    "channel": "ATM",
    "time": "13:45",
    "branch": "Delhi"
  },
  {
    "id": "T1762",
    "source": "A1089",
    "target": "A1191",
    "amount": 92024,
    "channel": "ATM",
    "time": "03:49",
    "branch": "Delhi"
  },
  {
    "id": "T1763",
    "source": "A1007",
    "target": "A1045",
    "amount": 76160,
    "channel": "RTGS",
    "time": "05:40",
    "branch": "Bangalore"
  },
  {
    "id": "T1764",
    "source": "A1185",
    "target": "A1140",
    "amount": 10153,
    "channel": "IMPS",
    "time": "14:33",
    "branch": "Kolkata"
  },
  {
    "id": "T1765",
    "source": "A1165",
    "target": "A1110",
    "amount": 93049,
    "channel": "RTGS",
    "time": "15:05",
    "branch": "Chennai"
  },
  {
    "id": "T1766",
    "source": "A1096",
    "target": "A1031",
    "amount": 9298,
    "channel": "UPI",
    "time": "09:46",
    "branch": "Mumbai"
  },
  {
    "id": "T1767",
    "source": "A1111",
    "target": "A1165",
    "amount": 86858,
    "channel": "IMPS",
    "time": "23:09",
    "branch": "Kolkata"
  },
  {
    "id": "T1768",
    "source": "A1121",
    "target": "A1060",
    "amount": 60622,
    "channel": "UPI",
    "time": "09:19",
    "branch": "Bangalore"
  },
  {
    "id": "T1769",
    "source": "A1154",
    "target": "A1088",
    "amount": 60966,
    "channel": "RTGS",
    "time": "04:53",
    "branch": "Bangalore"
  },
  {
    "id": "T1770",
    "source": "A1142",
    "target": "A1126",
    "amount": 37268,
    "channel": "UPI",
    "time": "23:55",
    "branch": "Kolkata"
  },
  {
    "id": "T1771",
    "source": "A1188",
    "target": "A1122",
    "amount": 9228,
    "channel": "RTGS",
    "time": "07:31",
    "branch": "Kolkata"
  },
  {
    "id": "T1772",
    "source": "A1062",
    "target": "A1099",
    "amount": 93314,
    "channel": "UPI",
    "time": "04:20",
    "branch": "Bangalore"
  },
  {
    "id": "T1773",
    "source": "A1185",
    "target": "A1165",
    "amount": 72044,
    "channel": "ATM",
    "time": "22:04",
    "branch": "Delhi"
  },
  {
    "id": "T1774",
    "source": "A1141",
    "target": "A1091",
    "amount": 21806,
    "channel": "UPI",
    "time": "16:01",
    "branch": "Chennai"
  },
  {
    "id": "T1775",
    "source": "A1073",
    "target": "A1021",
    "amount": 29866,
    "channel": "IMPS",
    "time": "14:17",
    "branch": "Delhi"
  },
  {
    "id": "T1776",
    "source": "A1035",
    "target": "A1170",
    "amount": 16050,
    "channel": "NEFT",
    "time": "10:46",
    "branch": "Bangalore"
  },
  {
    "id": "T1777",
    "source": "A1151",
    "target": "A1153",
    "amount": 70149,
    "channel": "NEFT",
    "time": "09:18",
    "branch": "Mumbai"
  },
  {
    "id": "T1778",
    "source": "A1164",
    "target": "A1158",
    "amount": 64410,
    "channel": "RTGS",
    "time": "00:17",
    "branch": "Delhi"
  },
  {
    "id": "T1779",
    "source": "A1100",
    "target": "A1119",
    "amount": 63520,
    "channel": "IMPS",
    "time": "06:48",
    "branch": "Mumbai"
  },
  {
    "id": "T1780",
    "source": "A1145",
    "target": "A1010",
    "amount": 82384,
    "channel": "UPI",
    "time": "20:04",
    "branch": "Kolkata"
  },
  {
    "id": "T1781",
    "source": "A1047",
    "target": "A1158",
    "amount": 62881,
    "channel": "UPI",
    "time": "11:50",
    "branch": "Delhi"
  },
  {
    "id": "T1782",
    "source": "A1000",
    "target": "A1154",
    "amount": 25865,
    "channel": "ATM",
    "time": "10:56",
    "branch": "Bangalore"
  },
  {
    "id": "T1783",
    "source": "A1162",
    "target": "A1014",
    "amount": 89987,
    "channel": "IMPS",
    "time": "00:04",
    "branch": "Mumbai"
  },
  {
    "id": "T1784",
    "source": "A1111",
    "target": "A1080",
    "amount": 56536,
    "channel": "NEFT",
    "time": "12:36",
    "branch": "Mumbai"
  },
  {
    "id": "T1785",
    "source": "A1140",
    "target": "A1115",
    "amount": 50905,
    "channel": "RTGS",
    "time": "22:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1786",
    "source": "A1112",
    "target": "A1158",
    "amount": 73753,
    "channel": "IMPS",
    "time": "02:26",
    "branch": "Kolkata"
  },
  {
    "id": "T1787",
    "source": "A1007",
    "target": "A1119",
    "amount": 59095,
    "channel": "IMPS",
    "time": "06:28",
    "branch": "Mumbai"
  },
  {
    "id": "T1788",
    "source": "A1126",
    "target": "A1019",
    "amount": 42225,
    "channel": "ATM",
    "time": "10:36",
    "branch": "Chennai"
  },
  {
    "id": "T1789",
    "source": "A1070",
    "target": "A1125",
    "amount": 19452,
    "channel": "ATM",
    "time": "04:54",
    "branch": "Delhi"
  },
  {
    "id": "T1790",
    "source": "A1054",
    "target": "A1033",
    "amount": 96233,
    "channel": "NEFT",
    "time": "04:50",
    "branch": "Mumbai"
  },
  {
    "id": "T1791",
    "source": "A1090",
    "target": "A1097",
    "amount": 60115,
    "channel": "UPI",
    "time": "16:58",
    "branch": "Bangalore"
  },
  {
    "id": "T1792",
    "source": "A1055",
    "target": "A1131",
    "amount": 3471,
    "channel": "RTGS",
    "time": "18:37",
    "branch": "Delhi"
  },
  {
    "id": "T1793",
    "source": "A1104",
    "target": "A1002",
    "amount": 81192,
    "channel": "RTGS",
    "time": "04:02",
    "branch": "Mumbai"
  },
  {
    "id": "T1794",
    "source": "A1170",
    "target": "A1135",
    "amount": 93034,
    "channel": "ATM",
    "time": "23:24",
    "branch": "Chennai"
  },
  {
    "id": "T1795",
    "source": "A1101",
    "target": "A1155",
    "amount": 98552,
    "channel": "UPI",
    "time": "17:45",
    "branch": "Mumbai"
  },
  {
    "id": "T1796",
    "source": "A1035",
    "target": "A1000",
    "amount": 79255,
    "channel": "UPI",
    "time": "18:50",
    "branch": "Kolkata"
  },
  {
    "id": "T1797",
    "source": "A1032",
    "target": "A1046",
    "amount": 89757,
    "channel": "IMPS",
    "time": "04:37",
    "branch": "Kolkata"
  },
  {
    "id": "T1798",
    "source": "A1167",
    "target": "A1144",
    "amount": 84575,
    "channel": "RTGS",
    "time": "17:37",
    "branch": "Kolkata"
  },
  {
    "id": "T1799",
    "source": "A1185",
    "target": "A1114",
    "amount": 45120,
    "channel": "RTGS",
    "time": "23:56",
    "branch": "Chennai"
  },
  {
    "id": "T1800",
    "source": "A1109",
    "target": "A1011",
    "amount": 35590,
    "channel": "ATM",
    "time": "00:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1801",
    "source": "A1020",
    "target": "A1091",
    "amount": 97505,
    "channel": "NEFT",
    "time": "09:51",
    "branch": "Chennai"
  },
  {
    "id": "T1802",
    "source": "A1014",
    "target": "A1018",
    "amount": 17431,
    "channel": "UPI",
    "time": "05:32",
    "branch": "Chennai"
  },
  {
    "id": "T1803",
    "source": "A1122",
    "target": "A1028",
    "amount": 9838,
    "channel": "NEFT",
    "time": "03:09",
    "branch": "Bangalore"
  },
  {
    "id": "T1804",
    "source": "A1095",
    "target": "A1034",
    "amount": 54688,
    "channel": "IMPS",
    "time": "13:01",
    "branch": "Delhi"
  },
  {
    "id": "T1805",
    "source": "A1123",
    "target": "A1078",
    "amount": 63753,
    "channel": "IMPS",
    "time": "08:16",
    "branch": "Bangalore"
  },
  {
    "id": "T1806",
    "source": "A1169",
    "target": "A1072",
    "amount": 40764,
    "channel": "IMPS",
    "time": "19:38",
    "branch": "Delhi"
  },
  {
    "id": "T1807",
    "source": "A1072",
    "target": "A1023",
    "amount": 73740,
    "channel": "NEFT",
    "time": "18:48",
    "branch": "Mumbai"
  },
  {
    "id": "T1808",
    "source": "A1113",
    "target": "A1167",
    "amount": 23769,
    "channel": "IMPS",
    "time": "12:24",
    "branch": "Delhi"
  },
  {
    "id": "T1809",
    "source": "A1090",
    "target": "A1179",
    "amount": 1297,
    "channel": "UPI",
    "time": "08:42",
    "branch": "Bangalore"
  },
  {
    "id": "T1810",
    "source": "A1099",
    "target": "A1182",
    "amount": 6468,
    "channel": "RTGS",
    "time": "05:07",
    "branch": "Bangalore"
  },
  {
    "id": "T1811",
    "source": "A1065",
    "target": "A1121",
    "amount": 75509,
    "channel": "UPI",
    "time": "13:59",
    "branch": "Bangalore"
  },
  {
    "id": "T1812",
    "source": "A1164",
    "target": "A1129",
    "amount": 41160,
    "channel": "NEFT",
    "time": "07:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1813",
    "source": "A1157",
    "target": "A1138",
    "amount": 80832,
    "channel": "NEFT",
    "time": "09:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1814",
    "source": "A1128",
    "target": "A1042",
    "amount": 88166,
    "channel": "IMPS",
    "time": "00:56",
    "branch": "Kolkata"
  },
  {
    "id": "T1815",
    "source": "A1164",
    "target": "A1029",
    "amount": 79097,
    "channel": "RTGS",
    "time": "05:04",
    "branch": "Bangalore"
  },
  {
    "id": "T1816",
    "source": "A1192",
    "target": "A1110",
    "amount": 93310,
    "channel": "IMPS",
    "time": "15:56",
    "branch": "Mumbai"
  },
  {
    "id": "T1817",
    "source": "A1088",
    "target": "A1106",
    "amount": 37498,
    "channel": "UPI",
    "time": "14:23",
    "branch": "Delhi"
  },
  {
    "id": "T1818",
    "source": "A1175",
    "target": "A1091",
    "amount": 9166,
    "channel": "UPI",
    "time": "13:58",
    "branch": "Mumbai"
  },
  {
    "id": "T1819",
    "source": "A1066",
    "target": "A1153",
    "amount": 85994,
    "channel": "RTGS",
    "time": "11:15",
    "branch": "Kolkata"
  },
  {
    "id": "T1820",
    "source": "A1110",
    "target": "A1143",
    "amount": 84027,
    "channel": "ATM",
    "time": "08:14",
    "branch": "Kolkata"
  },
  {
    "id": "T1821",
    "source": "A1125",
    "target": "A1093",
    "amount": 75536,
    "channel": "UPI",
    "time": "14:21",
    "branch": "Kolkata"
  },
  {
    "id": "T1822",
    "source": "A1136",
    "target": "A1104",
    "amount": 91294,
    "channel": "NEFT",
    "time": "22:44",
    "branch": "Mumbai"
  },
  {
    "id": "T1823",
    "source": "A1018",
    "target": "A1016",
    "amount": 98407,
    "channel": "IMPS",
    "time": "06:56",
    "branch": "Chennai"
  },
  {
    "id": "T1824",
    "source": "A1040",
    "target": "A1149",
    "amount": 45208,
    "channel": "IMPS",
    "time": "03:42",
    "branch": "Chennai"
  },
  {
    "id": "T1825",
    "source": "A1178",
    "target": "A1074",
    "amount": 67317,
    "channel": "RTGS",
    "time": "11:21",
    "branch": "Delhi"
  },
  {
    "id": "T1826",
    "source": "A1108",
    "target": "A1103",
    "amount": 94287,
    "channel": "IMPS",
    "time": "05:29",
    "branch": "Bangalore"
  },
  {
    "id": "T1827",
    "source": "A1106",
    "target": "A1069",
    "amount": 54816,
    "channel": "RTGS",
    "time": "03:07",
    "branch": "Chennai"
  },
  {
    "id": "T1828",
    "source": "A1047",
    "target": "A1005",
    "amount": 91136,
    "channel": "RTGS",
    "time": "12:38",
    "branch": "Bangalore"
  },
  {
    "id": "T1829",
    "source": "A1106",
    "target": "A1112",
    "amount": 77296,
    "channel": "RTGS",
    "time": "02:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1830",
    "source": "A1014",
    "target": "A1018",
    "amount": 45742,
    "channel": "UPI",
    "time": "18:55",
    "branch": "Delhi"
  },
  {
    "id": "T1831",
    "source": "A1154",
    "target": "A1119",
    "amount": 98551,
    "channel": "UPI",
    "time": "03:19",
    "branch": "Bangalore"
  },
  {
    "id": "T1832",
    "source": "A1113",
    "target": "A1013",
    "amount": 13289,
    "channel": "IMPS",
    "time": "03:14",
    "branch": "Chennai"
  },
  {
    "id": "T1833",
    "source": "A1056",
    "target": "A1081",
    "amount": 30051,
    "channel": "RTGS",
    "time": "05:19",
    "branch": "Chennai"
  },
  {
    "id": "T1834",
    "source": "A1099",
    "target": "A1132",
    "amount": 50446,
    "channel": "ATM",
    "time": "07:22",
    "branch": "Bangalore"
  },
  {
    "id": "T1835",
    "source": "A1104",
    "target": "A1188",
    "amount": 82292,
    "channel": "RTGS",
    "time": "10:07",
    "branch": "Chennai"
  },
  {
    "id": "T1836",
    "source": "A1005",
    "target": "A1077",
    "amount": 78969,
    "channel": "UPI",
    "time": "13:30",
    "branch": "Delhi"
  },
  {
    "id": "T1837",
    "source": "A1193",
    "target": "A1146",
    "amount": 66636,
    "channel": "ATM",
    "time": "04:31",
    "branch": "Mumbai"
  },
  {
    "id": "T1838",
    "source": "A1107",
    "target": "A1136",
    "amount": 91279,
    "channel": "IMPS",
    "time": "13:01",
    "branch": "Delhi"
  },
  {
    "id": "T1839",
    "source": "A1052",
    "target": "A1093",
    "amount": 92357,
    "channel": "UPI",
    "time": "12:50",
    "branch": "Bangalore"
  },
  {
    "id": "T1840",
    "source": "A1194",
    "target": "A1111",
    "amount": 72210,
    "channel": "UPI",
    "time": "02:45",
    "branch": "Kolkata"
  },
  {
    "id": "T1841",
    "source": "A1169",
    "target": "A1167",
    "amount": 39442,
    "channel": "UPI",
    "time": "09:45",
    "branch": "Mumbai"
  },
  {
    "id": "T1842",
    "source": "A1169",
    "target": "A1067",
    "amount": 68833,
    "channel": "NEFT",
    "time": "01:42",
    "branch": "Mumbai"
  },
  {
    "id": "T1843",
    "source": "A1033",
    "target": "A1121",
    "amount": 24657,
    "channel": "NEFT",
    "time": "19:59",
    "branch": "Delhi"
  },
  {
    "id": "T1844",
    "source": "A1085",
    "target": "A1192",
    "amount": 12758,
    "channel": "IMPS",
    "time": "13:27",
    "branch": "Chennai"
  },
  {
    "id": "T1845",
    "source": "A1162",
    "target": "A1070",
    "amount": 57475,
    "channel": "ATM",
    "time": "07:29",
    "branch": "Chennai"
  },
  {
    "id": "T1846",
    "source": "A1075",
    "target": "A1018",
    "amount": 88475,
    "channel": "ATM",
    "time": "16:20",
    "branch": "Chennai"
  },
  {
    "id": "T1847",
    "source": "A1170",
    "target": "A1149",
    "amount": 23451,
    "channel": "ATM",
    "time": "16:47",
    "branch": "Bangalore"
  },
  {
    "id": "T1848",
    "source": "A1192",
    "target": "A1038",
    "amount": 18558,
    "channel": "IMPS",
    "time": "04:03",
    "branch": "Kolkata"
  },
  {
    "id": "T1849",
    "source": "A1024",
    "target": "A1136",
    "amount": 78835,
    "channel": "UPI",
    "time": "21:19",
    "branch": "Bangalore"
  },
  {
    "id": "T1850",
    "source": "A1006",
    "target": "A1063",
    "amount": 99900,
    "channel": "UPI",
    "time": "15:38",
    "branch": "Chennai"
  },
  {
    "id": "T1851",
    "source": "A1180",
    "target": "A1161",
    "amount": 82333,
    "channel": "IMPS",
    "time": "16:16",
    "branch": "Chennai"
  },
  {
    "id": "T1852",
    "source": "A1007",
    "target": "A1008",
    "amount": 92039,
    "channel": "NEFT",
    "time": "22:02",
    "branch": "Chennai"
  },
  {
    "id": "T1853",
    "source": "A1131",
    "target": "A1058",
    "amount": 30828,
    "channel": "ATM",
    "time": "07:12",
    "branch": "Delhi"
  },
  {
    "id": "T1854",
    "source": "A1141",
    "target": "A1066",
    "amount": 39060,
    "channel": "NEFT",
    "time": "23:30",
    "branch": "Mumbai"
  },
  {
    "id": "T1855",
    "source": "A1199",
    "target": "A1088",
    "amount": 53894,
    "channel": "IMPS",
    "time": "08:25",
    "branch": "Bangalore"
  },
  {
    "id": "T1856",
    "source": "A1096",
    "target": "A1015",
    "amount": 31250,
    "channel": "IMPS",
    "time": "16:46",
    "branch": "Kolkata"
  },
  {
    "id": "T1857",
    "source": "A1072",
    "target": "A1141",
    "amount": 91444,
    "channel": "IMPS",
    "time": "05:25",
    "branch": "Delhi"
  },
  {
    "id": "T1858",
    "source": "A1188",
    "target": "A1163",
    "amount": 89083,
    "channel": "IMPS",
    "time": "04:55",
    "branch": "Bangalore"
  },
  {
    "id": "T1859",
    "source": "A1101",
    "target": "A1016",
    "amount": 69538,
    "channel": "IMPS",
    "time": "15:37",
    "branch": "Bangalore"
  },
  {
    "id": "T1860",
    "source": "A1102",
    "target": "A1024",
    "amount": 88675,
    "channel": "IMPS",
    "time": "12:14",
    "branch": "Chennai"
  },
  {
    "id": "T1861",
    "source": "A1179",
    "target": "A1054",
    "amount": 52050,
    "channel": "NEFT",
    "time": "03:46",
    "branch": "Delhi"
  },
  {
    "id": "T1862",
    "source": "A1191",
    "target": "A1049",
    "amount": 62965,
    "channel": "NEFT",
    "time": "00:15",
    "branch": "Kolkata"
  },
  {
    "id": "T1863",
    "source": "A1103",
    "target": "A1139",
    "amount": 61304,
    "channel": "UPI",
    "time": "22:20",
    "branch": "Mumbai"
  },
  {
    "id": "T1864",
    "source": "A1014",
    "target": "A1029",
    "amount": 88517,
    "channel": "IMPS",
    "time": "16:22",
    "branch": "Delhi"
  },
  {
    "id": "T1865",
    "source": "A1034",
    "target": "A1046",
    "amount": 80778,
    "channel": "NEFT",
    "time": "13:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1866",
    "source": "A1129",
    "target": "A1051",
    "amount": 17891,
    "channel": "ATM",
    "time": "03:18",
    "branch": "Mumbai"
  },
  {
    "id": "T1867",
    "source": "A1052",
    "target": "A1070",
    "amount": 13024,
    "channel": "ATM",
    "time": "02:38",
    "branch": "Delhi"
  },
  {
    "id": "T1868",
    "source": "A1056",
    "target": "A1089",
    "amount": 527,
    "channel": "RTGS",
    "time": "07:52",
    "branch": "Mumbai"
  },
  {
    "id": "T1869",
    "source": "A1166",
    "target": "A1154",
    "amount": 99367,
    "channel": "NEFT",
    "time": "14:59",
    "branch": "Delhi"
  },
  {
    "id": "T1870",
    "source": "A1053",
    "target": "A1107",
    "amount": 45795,
    "channel": "RTGS",
    "time": "12:03",
    "branch": "Mumbai"
  },
  {
    "id": "T1871",
    "source": "A1158",
    "target": "A1094",
    "amount": 44894,
    "channel": "NEFT",
    "time": "18:44",
    "branch": "Delhi"
  },
  {
    "id": "T1872",
    "source": "A1164",
    "target": "A1003",
    "amount": 11424,
    "channel": "IMPS",
    "time": "18:18",
    "branch": "Kolkata"
  },
  {
    "id": "T1873",
    "source": "A1072",
    "target": "A1168",
    "amount": 75161,
    "channel": "NEFT",
    "time": "08:08",
    "branch": "Bangalore"
  },
  {
    "id": "T1874",
    "source": "A1104",
    "target": "A1005",
    "amount": 16292,
    "channel": "RTGS",
    "time": "16:10",
    "branch": "Bangalore"
  },
  {
    "id": "T1875",
    "source": "A1057",
    "target": "A1051",
    "amount": 53667,
    "channel": "RTGS",
    "time": "23:39",
    "branch": "Mumbai"
  },
  {
    "id": "T1876",
    "source": "A1032",
    "target": "A1171",
    "amount": 34750,
    "channel": "NEFT",
    "time": "07:06",
    "branch": "Kolkata"
  },
  {
    "id": "T1877",
    "source": "A1061",
    "target": "A1084",
    "amount": 64210,
    "channel": "NEFT",
    "time": "13:08",
    "branch": "Kolkata"
  },
  {
    "id": "T1878",
    "source": "A1025",
    "target": "A1048",
    "amount": 46526,
    "channel": "NEFT",
    "time": "13:26",
    "branch": "Chennai"
  },
  {
    "id": "T1879",
    "source": "A1166",
    "target": "A1121",
    "amount": 93774,
    "channel": "NEFT",
    "time": "00:39",
    "branch": "Chennai"
  },
  {
    "id": "T1880",
    "source": "A1199",
    "target": "A1178",
    "amount": 31086,
    "channel": "ATM",
    "time": "10:14",
    "branch": "Mumbai"
  },
  {
    "id": "T1881",
    "source": "A1173",
    "target": "A1048",
    "amount": 65472,
    "channel": "RTGS",
    "time": "09:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1882",
    "source": "A1150",
    "target": "A1003",
    "amount": 4003,
    "channel": "NEFT",
    "time": "01:16",
    "branch": "Delhi"
  },
  {
    "id": "T1883",
    "source": "A1006",
    "target": "A1148",
    "amount": 32095,
    "channel": "UPI",
    "time": "19:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1884",
    "source": "A1043",
    "target": "A1044",
    "amount": 71316,
    "channel": "NEFT",
    "time": "12:21",
    "branch": "Mumbai"
  },
  {
    "id": "T1885",
    "source": "A1053",
    "target": "A1141",
    "amount": 30074,
    "channel": "IMPS",
    "time": "14:34",
    "branch": "Chennai"
  },
  {
    "id": "T1886",
    "source": "A1186",
    "target": "A1114",
    "amount": 8669,
    "channel": "ATM",
    "time": "05:55",
    "branch": "Delhi"
  },
  {
    "id": "T1887",
    "source": "A1152",
    "target": "A1154",
    "amount": 4425,
    "channel": "NEFT",
    "time": "19:10",
    "branch": "Kolkata"
  },
  {
    "id": "T1888",
    "source": "A1016",
    "target": "A1050",
    "amount": 21060,
    "channel": "ATM",
    "time": "15:00",
    "branch": "Kolkata"
  },
  {
    "id": "T1889",
    "source": "A1090",
    "target": "A1129",
    "amount": 35965,
    "channel": "UPI",
    "time": "20:05",
    "branch": "Kolkata"
  },
  {
    "id": "T1890",
    "source": "A1097",
    "target": "A1185",
    "amount": 61658,
    "channel": "UPI",
    "time": "12:16",
    "branch": "Mumbai"
  },
  {
    "id": "T1891",
    "source": "A1147",
    "target": "A1013",
    "amount": 45222,
    "channel": "NEFT",
    "time": "13:11",
    "branch": "Kolkata"
  },
  {
    "id": "T1892",
    "source": "A1172",
    "target": "A1086",
    "amount": 2177,
    "channel": "IMPS",
    "time": "19:57",
    "branch": "Chennai"
  },
  {
    "id": "T1893",
    "source": "A1092",
    "target": "A1044",
    "amount": 34701,
    "channel": "IMPS",
    "time": "22:59",
    "branch": "Bangalore"
  },
  {
    "id": "T1894",
    "source": "A1084",
    "target": "A1181",
    "amount": 95080,
    "channel": "IMPS",
    "time": "00:09",
    "branch": "Kolkata"
  },
  {
    "id": "T1895",
    "source": "A1085",
    "target": "A1171",
    "amount": 33334,
    "channel": "ATM",
    "time": "14:09",
    "branch": "Mumbai"
  },
  {
    "id": "T1896",
    "source": "A1064",
    "target": "A1147",
    "amount": 19760,
    "channel": "RTGS",
    "time": "20:22",
    "branch": "Bangalore"
  },
  {
    "id": "T1897",
    "source": "A1088",
    "target": "A1048",
    "amount": 50477,
    "channel": "IMPS",
    "time": "12:23",
    "branch": "Delhi"
  },
  {
    "id": "T1898",
    "source": "A1037",
    "target": "A1085",
    "amount": 36306,
    "channel": "ATM",
    "time": "16:06",
    "branch": "Kolkata"
  },
  {
    "id": "T1899",
    "source": "A1141",
    "target": "A1008",
    "amount": 40241,
    "channel": "ATM",
    "time": "13:15",
    "branch": "Chennai"
  },
  {
    "id": "T1900",
    "source": "A1054",
    "target": "A1038",
    "amount": 68734,
    "channel": "NEFT",
    "time": "14:57",
    "branch": "Chennai"
  },
  {
    "id": "T1901",
    "source": "A1002",
    "target": "A1159",
    "amount": 320461,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1902",
    "source": "A1159",
    "target": "A1154",
    "amount": 317608,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1903",
    "source": "A1154",
    "target": "A1097",
    "amount": 319237,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Delhi"
  },
  {
    "id": "T1904",
    "source": "A1097",
    "target": "A1022",
    "amount": 320379,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Delhi"
  },
  {
    "id": "T1905",
    "source": "A1036",
    "target": "A1083",
    "amount": 250843,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1906",
    "source": "A1083",
    "target": "A1002",
    "amount": 250276,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Chennai"
  },
  {
    "id": "T1907",
    "source": "A1002",
    "target": "A1144",
    "amount": 249736,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Chennai"
  },
  {
    "id": "T1908",
    "source": "A1144",
    "target": "A1181",
    "amount": 247557,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1909",
    "source": "A1065",
    "target": "A1190",
    "amount": 345748,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1910",
    "source": "A1190",
    "target": "A1143",
    "amount": 344883,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1911",
    "source": "A1143",
    "target": "A1001",
    "amount": 348605,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Delhi"
  },
  {
    "id": "T1912",
    "source": "A1001",
    "target": "A1107",
    "amount": 348331,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1913",
    "source": "A1063",
    "target": "A1077",
    "amount": 201917,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1914",
    "source": "A1077",
    "target": "A1147",
    "amount": 203604,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1915",
    "source": "A1147",
    "target": "A1101",
    "amount": 202926,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Chennai"
  },
  {
    "id": "T1916",
    "source": "A1101",
    "target": "A1112",
    "amount": 204197,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1917",
    "source": "A1074",
    "target": "A1131",
    "amount": 222202,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1918",
    "source": "A1131",
    "target": "A1008",
    "amount": 222632,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Delhi"
  },
  {
    "id": "T1919",
    "source": "A1008",
    "target": "A1082",
    "amount": 223748,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Delhi"
  },
  {
    "id": "T1920",
    "source": "A1082",
    "target": "A1185",
    "amount": 222134,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Chennai"
  },
  {
    "id": "T1921",
    "source": "A1100",
    "target": "A1123",
    "amount": 358865,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Kolkata"
  },
  {
    "id": "T1922",
    "source": "A1123",
    "target": "A1193",
    "amount": 359064,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1923",
    "source": "A1193",
    "target": "A1013",
    "amount": 361710,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1924",
    "source": "A1013",
    "target": "A1175",
    "amount": 361821,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1925",
    "source": "A1131",
    "target": "A1124",
    "amount": 358418,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1926",
    "source": "A1124",
    "target": "A1038",
    "amount": 360700,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Chennai"
  },
  {
    "id": "T1927",
    "source": "A1038",
    "target": "A1084",
    "amount": 357743,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Chennai"
  },
  {
    "id": "T1928",
    "source": "A1084",
    "target": "A1154",
    "amount": 357773,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1929",
    "source": "A1025",
    "target": "A1138",
    "amount": 280226,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Chennai"
  },
  {
    "id": "T1930",
    "source": "A1138",
    "target": "A1183",
    "amount": 278184,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Bangalore"
  },
  {
    "id": "T1931",
    "source": "A1183",
    "target": "A1176",
    "amount": 278333,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Kolkata"
  },
  {
    "id": "T1932",
    "source": "A1176",
    "target": "A1041",
    "amount": 278529,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1933",
    "source": "A1112",
    "target": "A1102",
    "amount": 287527,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Kolkata"
  },
  {
    "id": "T1934",
    "source": "A1102",
    "target": "A1068",
    "amount": 284771,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1935",
    "source": "A1068",
    "target": "A1100",
    "amount": 285016,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Kolkata"
  },
  {
    "id": "T1936",
    "source": "A1100",
    "target": "A1181",
    "amount": 285091,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Delhi"
  },
  {
    "id": "T1937",
    "source": "A1072",
    "target": "A1066",
    "amount": 208245,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Kolkata"
  },
  {
    "id": "T1938",
    "source": "A1066",
    "target": "A1174",
    "amount": 210359,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Mumbai"
  },
  {
    "id": "T1939",
    "source": "A1174",
    "target": "A1150",
    "amount": 209581,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Delhi"
  },
  {
    "id": "T1940",
    "source": "A1150",
    "target": "A1016",
    "amount": 209725,
    "channel": "NEFT",
    "time": "10:01",
    "branch": "Kolkata"
  },
  {
    "id": "T1941",
    "source": "A1021",
    "target": "A1171",
    "amount": 62200,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1942",
    "source": "A1171",
    "target": "A1108",
    "amount": 62200,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1943",
    "source": "A1108",
    "target": "A1021",
    "amount": 62200,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1944",
    "source": "A1102",
    "target": "A1165",
    "amount": 93002,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1945",
    "source": "A1165",
    "target": "A1045",
    "amount": 93002,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1946",
    "source": "A1045",
    "target": "A1102",
    "amount": 93002,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1947",
    "source": "A1010",
    "target": "A1123",
    "amount": 62237,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1948",
    "source": "A1123",
    "target": "A1090",
    "amount": 62237,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1949",
    "source": "A1090",
    "target": "A1010",
    "amount": 62237,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1950",
    "source": "A1168",
    "target": "A1069",
    "amount": 122515,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1951",
    "source": "A1069",
    "target": "A1160",
    "amount": 122515,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1952",
    "source": "A1160",
    "target": "A1168",
    "amount": 122515,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1953",
    "source": "A1049",
    "target": "A1081",
    "amount": 108907,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1954",
    "source": "A1081",
    "target": "A1154",
    "amount": 108907,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1955",
    "source": "A1154",
    "target": "A1049",
    "amount": 108907,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1956",
    "source": "A1053",
    "target": "A1100",
    "amount": 145490,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1957",
    "source": "A1100",
    "target": "A1186",
    "amount": 145490,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1958",
    "source": "A1186",
    "target": "A1053",
    "amount": 145490,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1959",
    "source": "A1088",
    "target": "A1125",
    "amount": 125149,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1960",
    "source": "A1125",
    "target": "A1000",
    "amount": 125149,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1961",
    "source": "A1000",
    "target": "A1088",
    "amount": 125149,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1962",
    "source": "A1079",
    "target": "A1044",
    "amount": 64546,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1963",
    "source": "A1044",
    "target": "A1027",
    "amount": 64546,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1964",
    "source": "A1027",
    "target": "A1079",
    "amount": 64546,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1965",
    "source": "A1122",
    "target": "A1198",
    "amount": 79920,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1966",
    "source": "A1198",
    "target": "A1056",
    "amount": 79920,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1967",
    "source": "A1056",
    "target": "A1122",
    "amount": 79920,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1968",
    "source": "A1123",
    "target": "A1146",
    "amount": 95919,
    "channel": "IMPS",
    "time": "11:00",
    "branch": "Mumbai"
  },
  {
    "id": "T1969",
    "source": "A1146",
    "target": "A1076",
    "amount": 95919,
    "channel": "IMPS",
    "time": "11:05",
    "branch": "Mumbai"
  },
  {
    "id": "T1970",
    "source": "A1076",
    "target": "A1123",
    "amount": 95919,
    "channel": "IMPS",
    "time": "11:10",
    "branch": "Mumbai"
  },
  {
    "id": "T1971",
    "source": "A1063",
    "target": "A1197",
    "amount": 48703,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1972",
    "source": "A1006",
    "target": "A1030",
    "amount": 49322,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1973",
    "source": "A1128",
    "target": "A1146",
    "amount": 49434,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1974",
    "source": "A1186",
    "target": "A1127",
    "amount": 48670,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1975",
    "source": "A1028",
    "target": "A1022",
    "amount": 48179,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1976",
    "source": "A1096",
    "target": "A1096",
    "amount": 49303,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1977",
    "source": "A1193",
    "target": "A1025",
    "amount": 49192,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1978",
    "source": "A1013",
    "target": "A1028",
    "amount": 48378,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1979",
    "source": "A1086",
    "target": "A1014",
    "amount": 48969,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1980",
    "source": "A1178",
    "target": "A1097",
    "amount": 48686,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1981",
    "source": "A1099",
    "target": "A1124",
    "amount": 48771,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1982",
    "source": "A1089",
    "target": "A1178",
    "amount": 49758,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1983",
    "source": "A1106",
    "target": "A1140",
    "amount": 49084,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1984",
    "source": "A1167",
    "target": "A1041",
    "amount": 48704,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1985",
    "source": "A1021",
    "target": "A1178",
    "amount": 49775,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1986",
    "source": "A1062",
    "target": "A1010",
    "amount": 48028,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1987",
    "source": "A1124",
    "target": "A1073",
    "amount": 48444,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1988",
    "source": "A1168",
    "target": "A1149",
    "amount": 49983,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1989",
    "source": "A1127",
    "target": "A1028",
    "amount": 48595,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1990",
    "source": "A1132",
    "target": "A1184",
    "amount": 49289,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1991",
    "source": "A1017",
    "target": "A1137",
    "amount": 48867,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1992",
    "source": "A1187",
    "target": "A1022",
    "amount": 49636,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1993",
    "source": "A1037",
    "target": "A1029",
    "amount": 48864,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1994",
    "source": "A1021",
    "target": "A1039",
    "amount": 49330,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1995",
    "source": "A1060",
    "target": "A1015",
    "amount": 48926,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1996",
    "source": "A1094",
    "target": "A1175",
    "amount": 48831,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1997",
    "source": "A1047",
    "target": "A1016",
    "amount": 48030,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1998",
    "source": "A1008",
    "target": "A1071",
    "amount": 49075,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T1999",
    "source": "A1022",
    "target": "A1192",
    "amount": 48452,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2000",
    "source": "A1101",
    "target": "A1073",
    "amount": 49842,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2001",
    "source": "A1049",
    "target": "A1005",
    "amount": 48924,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2002",
    "source": "A1067",
    "target": "A1043",
    "amount": 49281,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2003",
    "source": "A1134",
    "target": "A1075",
    "amount": 49776,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2004",
    "source": "A1011",
    "target": "A1155",
    "amount": 49304,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2005",
    "source": "A1152",
    "target": "A1093",
    "amount": 49796,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2006",
    "source": "A1064",
    "target": "A1095",
    "amount": 48972,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2007",
    "source": "A1006",
    "target": "A1038",
    "amount": 49382,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2008",
    "source": "A1143",
    "target": "A1006",
    "amount": 48755,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2009",
    "source": "A1114",
    "target": "A1051",
    "amount": 48804,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2010",
    "source": "A1018",
    "target": "A1143",
    "amount": 49046,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2011",
    "source": "A1159",
    "target": "A1061",
    "amount": 49472,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2012",
    "source": "A1053",
    "target": "A1158",
    "amount": 49922,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2013",
    "source": "A1066",
    "target": "A1192",
    "amount": 49446,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2014",
    "source": "A1143",
    "target": "A1156",
    "amount": 49935,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2015",
    "source": "A1113",
    "target": "A1149",
    "amount": 48867,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2016",
    "source": "A1189",
    "target": "A1183",
    "amount": 49315,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2017",
    "source": "A1014",
    "target": "A1001",
    "amount": 48322,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2018",
    "source": "A1040",
    "target": "A1157",
    "amount": 49373,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2019",
    "source": "A1003",
    "target": "A1050",
    "amount": 49874,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2020",
    "source": "A1004",
    "target": "A1174",
    "amount": 48167,
    "channel": "UPI",
    "time": "12:30",
    "branch": "Kolkata"
  },
  {
    "id": "T2021",
    "source": "A1113",
    "target": "A1125",
    "amount": 893797,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2022",
    "source": "A1096",
    "target": "A1142",
    "amount": 682041,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2023",
    "source": "A1183",
    "target": "A1084",
    "amount": 786617,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2024",
    "source": "A1169",
    "target": "A1129",
    "amount": 893582,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2025",
    "source": "A1166",
    "target": "A1041",
    "amount": 687486,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2026",
    "source": "A1025",
    "target": "A1043",
    "amount": 860304,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2027",
    "source": "A1142",
    "target": "A1126",
    "amount": 769809,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2028",
    "source": "A1198",
    "target": "A1008",
    "amount": 880639,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2029",
    "source": "A1088",
    "target": "A1162",
    "amount": 749293,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  },
  {
    "id": "T2030",
    "source": "A1081",
    "target": "A1019",
    "amount": 501275,
    "channel": "RTGS",
    "time": "13:15",
    "branch": "Delhi"
  }
];

// Quick lookup maps
const accountMap = Object.fromEntries(realAccounts.map(a => [a.id, a]));

// Risk summary
const riskSummary = {
  total: 200,
  fraud: 41,
  suspicious: 74,
  dormant: 0,
  clean: 85
};