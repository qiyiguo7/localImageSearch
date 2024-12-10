import { Button, Form, Image, Input, Pagination, Select, Tree } from "antd";
import Scrollbars from "react-custom-scrollbars";
import Hooks from "./hooks";
import styles from "./index.less";

const FormItem = Form.Item;
const { Option } = Select;

const SearchCenter = () => {
  const {
    treeList,
    selectThisNodes,
    renderImgList,
    form,
    paginationChange,
    currentPage,
    pageSize,
    total,
    searchCondition,
  } = Hooks();
  return (
    <div className={styles.searchContent}>
      <div className="searchLeft">
        <Tree treeData={treeList} onSelect={selectThisNodes} showIcon />
      </div>
      <div className="searchRight">
        {/* 这里放入搜索条件 */}
        {
          <div className="searchRightHead">
            <Form form={form} layout="inline">
              <FormItem name="xxx" className="searchInt">
                <Input placeholder="请输入检索条件" />
              </FormItem>
              <FormItem name="yyy" className="searchSelect">
                <Select placeholder="请选择">
                  <Option value="1">白景</Option>
                  <Option value="2">夜景</Option>
                </Select>
              </FormItem>
              <Button type="primary" className="btn btnSearch">
                查询
              </Button>
              <Button type="default" className="btn btnReset">
                重置
              </Button>
            </Form>
          </div>
        }
        {/* 放入图片渲染模块 */}
        <div className="searchRightBody">
          <Scrollbars>
            <div className="searchRightCenter">
              {renderImgList.map((item) => {
                return (
                  <div className="searchRightItem" key={item.key}>
                    <Image width={100} src={item.src} />
                  </div>
                );
              })}
            </div>
          </Scrollbars>
        </div>
        <div className="searchRightBottom">
          <Pagination
            align="end"
            onChange={paginationChange}
            total={total}
            current={currentPage}
            pageSize={pageSize}
            pageSizeOptions={["50", "100", "200", "500"]}
          />
        </div>
      </div>
    </div>
  );
};
export default SearchCenter;
