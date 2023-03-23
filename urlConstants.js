const NodeEnv_ApiURL = () => {
  const NodeEnv = process.env.REACT_APP_ENVIRONMENT.trim();
  if (NodeEnv === "DEV") {
    return "http://localhost:8000"; // dev
  } else if (NodeEnv === "UAT") {
    return "http://10.201.23.69:7001"; // uat
  } else if (NodeEnv === "PROD") {
    return "https://histoas5.histogenetics.com:7001/"; // prod
  }
};

export const apiConstants = {
  apiURL: NodeEnv_ApiURL(),
};