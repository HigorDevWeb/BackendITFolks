import { mergeConfig } from "vite";

export default (config) =>
  mergeConfig(config, {
    server: {
      // Lista EXATA do host do NGROK (sem https://, só o domínio)
      allowedHosts: [
        "internalagent.itfolkstech.com", // Coloque o SEU domínio
      ],
      // ou para liberar TODOS (menos seguro, só dev):
      // allowedHosts: true,
    },
  });
