import { FolderOpenOutlined } from "@ant-design/icons";
export default () => {
  return [
    {
      key: "1",
      title: "人物",
      nameCn: "人物",
      icon: <FolderOpenOutlined />,
      nameEn: "character",
      children: [
        {
          key: "1-1",
          title: "青少年",
          nameCn: "青少年",
          nameEn: "teenager",
          children: [
            {
              key: "1-1-1",
              title: "半身",
              nameCn: "半身",
              nameEn: "halfbody",
              children: [],
            },
            {
              key: "1-1-2",
              title: "半身",
              nameCn: "半身",
              nameEn: "pose",
              children: [],
            },
          ],
        },
        {
          key: "1-2",
          title: "成年",
          nameCn: "成年",
          nameEn: "adult",
          children: [
            {
              key: "1-2-1",
              title: "半身",
              nameCn: "半身",
              nameEn: "halfbody",
              list: [
                {
                  key: "1-2-1-1",
                  name: "test1",
                  src: "image/character/adult/halfbody/1-2-1-1.webp",
                },
                {
                  key: "1-2-1-2",
                  name: "test2",
                  src: "image/character/adult/halfbody/1-2-1-2.webp",
                },
                {
                  key: "1-2-1-3",
                  name: "test3",
                  src: "image/character/adult/halfbody/1-2-1-3.webp",
                },
                {
                  key: "1-2-1-4",
                  name: "test4",
                  src: "image/character/adult/halfbody/1-2-1-4.webp",
                },
                {
                  key: "1-2-1-5",
                  name: "test5",
                  src: "image/character/adult/halfbody/1-2-1-5.webp",
                },
                {
                  key: "1-2-1-6",
                  name: "test6",
                  src: "image/character/adult/halfbody/1-2-1-6.webp",
                },
                {
                  key: "1-2-1-7",
                  name: "test7",
                  src: "image/character/adult/halfbody/1-2-1-7.webp",
                },
                {
                  key: "1-2-1-8",
                  name: "test8",
                  src: "image/character/adult/halfbody/1-2-1-8.webp",
                },
                {
                  key: "1-2-1-9",
                  name: "test9",
                  src: "image/character/adult/halfbody/1-2-1-9.webp",
                },
                {
                  key: "1-2-1-10",
                  name: "test10",
                  src: "image/character/adult/halfbody/1-2-1-10.webp",
                },
                {
                  key: "1-2-1-11",
                  name: "test11",
                  src: "image/character/adult/halfbody/1-2-1-11.webp",
                },
                {
                  key: "1-2-1-12",
                  name: "test12",
                  src: "image/character/adult/halfbody/1-2-1-12.webp",
                },
                {
                  key: "1-2-1-13",
                  name: "test13",
                  src: "image/character/adult/halfbody/1-2-1-13.webp",
                },
              ],
            },
            {
              key: "1-2-2",
              title: "全身",
              nameCn: "全身",
              nameEn: "pose",
              children: [],
            },
          ],
        },
      ],
    },
    {
      key: "2",
      title: "场景",
      nameCn: "场景",
      nameEn: "scene",
      children: [
        {
          key: "2-1",
          title: "室内",
          nameCn: "室内",
          nameEn: "indoor",
          children: [
            {
              key: "2-1-1",
              title: "家庭",
              nameCn: "家庭",
              nameEn: "family",
              children: [],
            },
            {
              key: "2-1-2",
              title: "办公室",
              nameCn: "办公室",
              nameEn: "office",
              children: [],
            },
            {
              key: "2-1-3",
              title: "酒吧",
              nameCn: "酒吧",
              nameEn: "bar",
              children: [],
            },
            {
              key: "2-1-4",
              title: "健身房",
              nameCn: "健身房",
              nameEn: "gym",
              children: [],
            },
            {
              key: "2-1-5",
              title: "咖啡厅",
              nameCn: "咖啡厅",
              nameEn: "cafe",
              children: [],
            },
          ],
        },
        {
          key: "2-2",
          title: "室外",
          nameCn: "室外",
          nameEn: "outdoor",
          children: [
            {
              key: "2-2-1",
              title: "公园",
              nameCn: "公园",
              nameEn: "park",
              children: [],
            },
            {
              key: "2-2-2",
              title: "草地",
              nameCn: "草地",
              nameEn: "lawn",
              children: [],
            },
            {
              key: "2-2-3",
              title: "雪地",
              nameCn: "雪地",
              nameEn: "snowfield",
              children: [],
            },
            {
              key: "2-2-4",
              title: "森林",
              nameCn: "森林",
              nameEn: "forest",
              children: [],
            },
            {
              key: "2-2-5",
              title: "海滩",
              nameCn: "海滩",
              nameEn: "beach",
              children: [],
            },
            {
              key: "2-2-6",
              title: "游乐场",
              nameCn: "游乐场",
              nameEn: "amusementPark",
              children: [],
            },
            {
              key: "2-2-7",
              title: "街景",
              nameCn: "街景",
              nameEn: "street",
              children: [],
            },
            {
              key: "2-2-8",
              title: "操场",
              nameCn: "操场",
              nameEn: "playground",
              children: [],
            },
          ],
        },
      ],
    },
    {
      key: "3",
      title: "物品",
      nameCn: "物品",
      nameEn: "objects",
    },
    {
      key: "4",
      title: "风格",
      nameCn: "风格",
      nameEn: "style",
    },
  ];
};
