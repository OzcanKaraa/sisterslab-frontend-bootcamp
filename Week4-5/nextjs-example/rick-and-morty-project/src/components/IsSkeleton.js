const { Skeleton } = require("@mui/material")


const IsSkeleton = (loading,variant,widht,height children) => {
if(loading){
    return <Skeleton variant={variant} width={widht} height={height}></Skeleton>
}
return children;
};

IsSkeleton.prototype={
    loading:PropTypes.bool.IsRequired,
    variant:PropTypes.string,
    widht:PropTypes.oneOfType([PropTypes.number,Proptype.string]),
    height:PropTypes.oneOfType([PropTypes.number,Proptype.string]),
    children:Proptype.node.IsRequired,
};
    

export default IsSkeleton;
