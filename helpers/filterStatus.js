module.exports = (query) =>{
        let filterStatus = [
        {
        name:"Tất cả",
        status:"",
        class:""
    },{
        name:"Hoạt động",
        status:"active",
        class:""
    },{
        name:"Dừng hoạt động",
        status:"inactive",
        class:""
    }
    ];

    // Nút đang được chọn
    // const statusCurrent = query.status || "";

    // filterStatus.forEach(item => {
    //     if (item.status == statusCurrent) {
    //         item.class = "active";
    //     }
    // });

        if(query.status){
            const index = filterStatus.findIndex(item => item.status ==query.status);
            filterStatus[index].class = "active";
    
        }else{
            const index = filterStatus.findIndex(item => item.status =="");
            filterStatus[index].class = "active";
        }

        return filterStatus;
}