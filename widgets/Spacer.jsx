const Spacer = ({ vertical=false,spacing="0"}) => {
    return (
        <div style={{
            display:"inline",
            margin: vertical ? `${spacing} 0` : `0 ${spacing}`,
        }}>
        
        </div>
    );
}

export default Spacer;