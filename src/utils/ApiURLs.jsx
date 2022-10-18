export const host = "https://bedrock-backend.herokuapp.com"
export const testhost = "https://heavy-berries-crash-119-82-83-164.loca.lt"

export const URLS = {
    //Dashboard
    getAllShares: `${host}/shareslist`,

    uploadFile: `${host}/file-upload`,
    submitDocumentDetails: `${host}/submitform`,
    getDocumentDetails: `${host}/getdetails`,
    // Issue Shares
    createIssuedShares: `${testhost}/issuedshares`,
    getIssuedShares: `${testhost}/issuedshares`,
    updateIssuedShare: `${host}/issuedshares/update`,
    deleteIssuedShare: `${host}/issuedshares/delete`,
    // Orders
    createOrder: `${testhost}/orders`,
    getOrder: `${host}/orders`,
    updateOrder: `${testhost}/orders/update`,
    deleteOrder: `${testhost}/orders/delete`,
    updateOrderStatus: `${testhost}/updatestatus`,
    //
    getPendingOrders: `${testhost}/getpendingorders`,
    getSelfOrders: `${testhost}/orders`
}