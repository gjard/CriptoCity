import axios from "axios";

/**
 * Configurar o axios para a api: api.coincap.io/v2/assets
 */
export default axios.create({
  baseURL: `api.coincap.io/v2/assets`
});
