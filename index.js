module.exports.handler = async(event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
                message: "Hello World! 1",
                input: event,
            },
            null,
            2
        ),
    };
};