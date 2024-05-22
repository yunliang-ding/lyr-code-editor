export default ({ menus }) => {
  /** 渲染 vNode */
  return (
    <div>
      {menus.map((item: any) => {
        return <div {...item}>{item.label}</div>;
      })}
    </div>
  );
};
