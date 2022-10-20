export const host = "https://bedrock-backend.herokuapp.com"
export const testhost = "https://khaki-hotels-hang-119-82-83-164.loca.lt"

export const URLS = {
    //Dashboard
    getAllShares: `${host}/shareslist`,

    uploadFile: `${host}/file-upload`,
    submitDocumentDetails: `${host}/submitform`,
    getDocumentDetails: `${host}/getdetails`,
    // Issue Shares
    createIssuedShares: `${host}/issuedshares`,
    getIssuedShares: `${host}/issuedshares`,
    updateIssuedShare: `${host}/issuedshares/update`,
    deleteIssuedShare: `${host}/issuedshares/delete`,
    // Orders
    createOrder: `${host}/orders`,
    getOrder: `${host}/orders`,
    updateOrder: `${host}/orders/update`,
    deleteOrder: `${host}/orders/delete`,
    updateOrderStatus: `${host}/updatestatus`,
    //
    getPendingOrders: `${host}/getpendingorders`,
    getSelfOrders: `${host}/orders`,
    getOrderHistory: `${host}/getorderhistory`
    // 
}