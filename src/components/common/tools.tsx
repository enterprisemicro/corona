// 
interface ITool {
    name: string;
    keyword: string;
    date: string;
    image: any;
}

let GenericTool : ITool[] = [
    {
        name: "JSON Tool",
        keyword: "generic_json_tool",
        date: "2018-12-15T08:00:00",
        image: require("../../images/jsonTool.jpeg")
    },
    {
        name: "Date Time",
        keyword: "generic_date_time",
        date: "2018-12-15T08:00:00",
        image: require("../../images/datetimeTool.jpg")
    },
    {
        name: "Encoding Decoding",
        keyword: "generic_encoding_decoding",
        date: "2018-12-15T08:00:00",
        image: require("../../images/encodingDecoding.png")
    },
    {
        name: "Encryption Decryption",
        keyword: "generic_encryption_decryption",
        date: "2018-12-15T08:00:00",
        image: require("../../images/encryptionDecryption.png")
    }
];

let AzureTool : ITool[] = [
    {
        name: "Service Bus",
        keyword: "azure_service_bus",
        date: "2018-12-15T08:00:00",
        image: require("../../images/azureServiceBus.png")
    },
]

let CASTool : ITool[] = [
    {
        name: "Policy Setting",
        keyword: "cas_policy_setting",
        date: "2018-12-15T08:00:00",
        image: require("../../images/encodingDecoding.png")
    },
    {
        name: "Scanner",
        keyword: "cas_scanner",
        date: "2018-12-15T08:00:00",
        image: require("../../images/casScanner.png")
    },
    {
        name: "License",
        keyword: "cas_license",
        date: "2018-12-15T08:00:00",
        image: require("../../images/casLicense.png")
    }
]

export { GenericTool, AzureTool, CASTool }