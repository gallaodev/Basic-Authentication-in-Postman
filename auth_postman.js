var data = JSON.parse(responseBody);
postman.setEnvironmentVariable("AuthToken", data['token_resp']);