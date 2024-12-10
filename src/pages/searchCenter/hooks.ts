import searchJson from "@/searchJson";
import { Form } from "antd";
import { Key } from "antd/es/table/interface";
import { EventDataNode } from "antd/es/tree";
import { useEffect, useState } from "react";

interface ListObj {
  key: string;
  name: string;
  src: string;
}
interface TreeArre {
  key: string;
  title: string;
  nameCn?: string;
  nameEn?: string;
  children?: TreeArre[];
  list?: ListObj[];
}

export default () => {
  const arr = searchJson();
  const [form] = Form.useForm();
  const [treeList, setTreeList] = useState<TreeArre[]>(arr); // 基础数据Tree列表
  const [allImgList, setAllImgList] = useState<ListObj[]>([]); // 图片渲染list的所有数据
  const [renderImgList, setRenderImgList] = useState<ListObj[]>([]); // 图片渲染list
  const [currentPage, setCurrentPage] = useState(1); // 分页列表当前分页num
  const [pageSize, setPageSize] = useState(50); // 分页列表当前size
  const [total, setTotal] = useState(0);
  const [searchCondition, setSearchCondition] = useState(false); // 是否展示查询条件
  const showSearchArr = ["1-1-1", "1-1-2", "1-2-1", "1-2-2"];
  useEffect(() => {
    setTreeList(arr);
  }, []);
  // 获取选中节点的img列表
  const selectThisNodes = (
    selectedKeys: Key[],
    info: {
      event: "select";
      selected: boolean;
      node: EventDataNode<TreeArre>;
      selectedNodes: TreeArre[];
      nativeEvent: MouseEvent;
    }
  ) => {
    const arr = info.node?.list || [];
    const showFlag = showSearchArr.indexOf(info.node?.key) > -1;
    setSearchCondition(showFlag);
    setAllImgList(arr);
    setTotal(arr.length);
    // 选取新的节点之后需要重置数据
    setCurrentPage(1);
    setPageSize(50);
  };
  // 页码或pageSize 改变的回调
  const paginationChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };
  // Pagination改变之后获取当前页的数据
  const getRenderListByPageChange = () => {
    const realList = [...allImgList].slice(
      (currentPage - 1) * pageSize,
      currentPage * pageSize
    );
    setRenderImgList(realList);
  };
  useEffect(() => {
    getRenderListByPageChange();
  }, [allImgList, currentPage, pageSize]);
  // 重置表单数据
  const resetForm = () => {
    form.resetFields();
  };
  // 搜索按钮的回调函数
  const searchSubmit = () => {
    const values = form.getFieldsValue();
    let arr = [...allImgList];
    // 判定检索名字是否存在
    if (values?.imageName) {
      arr = arr.filter((item) => item.name.includes(values.imageName));
    }
    // 判定是否纯色
    if (values?.pureOrNot) {
      arr = arr.filter((item) => item.name.includes(values.pureOrNot));
    }
    // 判定性别
    if (values?.sex) {
      arr = arr.filter((item) => item.name.includes(values.sex));
    }
    setAllImgList(arr);
    setCurrentPage(1);
    setPageSize(50);
  };
  return {
    treeList,
    selectThisNodes,
    renderImgList,
    form,
    paginationChange,
    currentPage,
    pageSize,
    total,
    searchCondition,
    resetForm,
    searchSubmit,
  };
};
