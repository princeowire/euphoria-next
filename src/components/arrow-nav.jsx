const SectionNavigator = () => {
  
  return (
    <div className=" mb-4 text-gray-500 max-sm:hidden">
      <div className="flex gap-2"><a href="/">Shop</a>  <div>{'>'}</div>  <a href="/products">Product</a> <div>{'>'}</div>  <a href="./">...</a></div>
    </div>
  );
};

export default SectionNavigator;
