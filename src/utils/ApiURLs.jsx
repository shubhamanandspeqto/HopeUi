export const host = "https://bedrock-backend.herokuapp.com"

export const URLS = {
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
    deleteOrder: `${host}/orders/delete`
}