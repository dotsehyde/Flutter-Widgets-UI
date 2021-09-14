const Spacer = ({ vertical=false,spacing="0"}) => {
    return (
        <div className="spacer" style={{
            "--space": vertical ? `${spacing} 0` : `0 ${spacing}`,
        }}>
        
        </div>
    );
}

export default Spacer;