import {
  registerForEvent
} from "./chunk-QJS23M44.mjs";
import {
  errorHandler
} from "./chunk-EOXGF5FC.mjs";
import {
  checkIn
} from "./chunk-EVF765BR.mjs";
import {
  createEvent
} from "./chunk-TAZXGJ64.mjs";
import "./chunk-U5RXYY2H.mjs";
import {
  getAttendeeBadge
} from "./chunk-FPSPEEES.mjs";
import {
  getEventAttendees
} from "./chunk-LVXKP34Z.mjs";
import {
  getEvent
} from "./chunk-XV33RQJ7.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especificacoes da API para o back-end da aplicacao pass.in construida durante o NLW Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
export {
  app
};
