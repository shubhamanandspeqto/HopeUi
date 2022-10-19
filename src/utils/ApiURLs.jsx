export const host = "https://bedrock-backend.herokuapp.com"
export const testhost = "https://sharp-wasps-shout-119-82-83-164.loca.lt"

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
    createOrder: `${testhost}/orders`,
    getOrder: `${host}/orders`,
    updateOrder: `${host}/orders/update`,
    deleteOrder: `${host}/orders/delete`,
    updateOrderStatus: `${testhost}/updatestatus`,
    //
    getPendingOrders: `${testhost}/getpendingorders`,
    getSelfOrders: `${host}/orders`
}