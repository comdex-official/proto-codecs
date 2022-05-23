"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scopes_ScopeEntry = exports.Scopes = exports.SecurityRequirement_SecurityRequirementEntry = exports.SecurityRequirement_SecurityRequirementValue = exports.SecurityRequirement = exports.SecurityScheme_ExtensionsEntry = exports.SecurityScheme = exports.SecurityDefinitions_SecurityEntry = exports.SecurityDefinitions = exports.Tag = exports.JSONSchema = exports.Schema = exports.ExternalDocumentation = exports.License = exports.Contact = exports.Info_ExtensionsEntry = exports.Info = exports.Response_ExtensionsEntry = exports.Response_ExamplesEntry = exports.Response_HeadersEntry = exports.Response = exports.Header = exports.Operation_ExtensionsEntry = exports.Operation_ResponsesEntry = exports.Operation = exports.Swagger_ExtensionsEntry = exports.Swagger_ResponsesEntry = exports.Swagger = exports.securityScheme_FlowToJSON = exports.securityScheme_FlowFromJSON = exports.SecurityScheme_Flow = exports.securityScheme_InToJSON = exports.securityScheme_InFromJSON = exports.SecurityScheme_In = exports.securityScheme_TypeToJSON = exports.securityScheme_TypeFromJSON = exports.SecurityScheme_Type = exports.jSONSchema_JSONSchemaSimpleTypesToJSON = exports.jSONSchema_JSONSchemaSimpleTypesFromJSON = exports.JSONSchema_JSONSchemaSimpleTypes = exports.schemeToJSON = exports.schemeFromJSON = exports.Scheme = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../../google/protobuf/struct");
exports.protobufPackage = "grpc.gateway.protoc_gen_openapiv2.options";
/**
 * Scheme describes the schemes supported by the OpenAPI Swagger
 * and Operation objects.
 */
var Scheme;
(function (Scheme) {
    Scheme[Scheme["UNKNOWN"] = 0] = "UNKNOWN";
    Scheme[Scheme["HTTP"] = 1] = "HTTP";
    Scheme[Scheme["HTTPS"] = 2] = "HTTPS";
    Scheme[Scheme["WS"] = 3] = "WS";
    Scheme[Scheme["WSS"] = 4] = "WSS";
    Scheme[Scheme["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Scheme = exports.Scheme || (exports.Scheme = {}));
function schemeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return Scheme.UNKNOWN;
        case 1:
        case "HTTP":
            return Scheme.HTTP;
        case 2:
        case "HTTPS":
            return Scheme.HTTPS;
        case 3:
        case "WS":
            return Scheme.WS;
        case 4:
        case "WSS":
            return Scheme.WSS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Scheme.UNRECOGNIZED;
    }
}
exports.schemeFromJSON = schemeFromJSON;
function schemeToJSON(object) {
    switch (object) {
        case Scheme.UNKNOWN:
            return "UNKNOWN";
        case Scheme.HTTP:
            return "HTTP";
        case Scheme.HTTPS:
            return "HTTPS";
        case Scheme.WS:
            return "WS";
        case Scheme.WSS:
            return "WSS";
        default:
            return "UNKNOWN";
    }
}
exports.schemeToJSON = schemeToJSON;
var JSONSchema_JSONSchemaSimpleTypes;
(function (JSONSchema_JSONSchemaSimpleTypes) {
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["UNKNOWN"] = 0] = "UNKNOWN";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["ARRAY"] = 1] = "ARRAY";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["BOOLEAN"] = 2] = "BOOLEAN";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["INTEGER"] = 3] = "INTEGER";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["NULL"] = 4] = "NULL";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["NUMBER"] = 5] = "NUMBER";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["OBJECT"] = 6] = "OBJECT";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["STRING"] = 7] = "STRING";
    JSONSchema_JSONSchemaSimpleTypes[JSONSchema_JSONSchemaSimpleTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(JSONSchema_JSONSchemaSimpleTypes = exports.JSONSchema_JSONSchemaSimpleTypes || (exports.JSONSchema_JSONSchemaSimpleTypes = {}));
function jSONSchema_JSONSchemaSimpleTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN":
            return JSONSchema_JSONSchemaSimpleTypes.UNKNOWN;
        case 1:
        case "ARRAY":
            return JSONSchema_JSONSchemaSimpleTypes.ARRAY;
        case 2:
        case "BOOLEAN":
            return JSONSchema_JSONSchemaSimpleTypes.BOOLEAN;
        case 3:
        case "INTEGER":
            return JSONSchema_JSONSchemaSimpleTypes.INTEGER;
        case 4:
        case "NULL":
            return JSONSchema_JSONSchemaSimpleTypes.NULL;
        case 5:
        case "NUMBER":
            return JSONSchema_JSONSchemaSimpleTypes.NUMBER;
        case 6:
        case "OBJECT":
            return JSONSchema_JSONSchemaSimpleTypes.OBJECT;
        case 7:
        case "STRING":
            return JSONSchema_JSONSchemaSimpleTypes.STRING;
        case -1:
        case "UNRECOGNIZED":
        default:
            return JSONSchema_JSONSchemaSimpleTypes.UNRECOGNIZED;
    }
}
exports.jSONSchema_JSONSchemaSimpleTypesFromJSON = jSONSchema_JSONSchemaSimpleTypesFromJSON;
function jSONSchema_JSONSchemaSimpleTypesToJSON(object) {
    switch (object) {
        case JSONSchema_JSONSchemaSimpleTypes.UNKNOWN:
            return "UNKNOWN";
        case JSONSchema_JSONSchemaSimpleTypes.ARRAY:
            return "ARRAY";
        case JSONSchema_JSONSchemaSimpleTypes.BOOLEAN:
            return "BOOLEAN";
        case JSONSchema_JSONSchemaSimpleTypes.INTEGER:
            return "INTEGER";
        case JSONSchema_JSONSchemaSimpleTypes.NULL:
            return "NULL";
        case JSONSchema_JSONSchemaSimpleTypes.NUMBER:
            return "NUMBER";
        case JSONSchema_JSONSchemaSimpleTypes.OBJECT:
            return "OBJECT";
        case JSONSchema_JSONSchemaSimpleTypes.STRING:
            return "STRING";
        default:
            return "UNKNOWN";
    }
}
exports.jSONSchema_JSONSchemaSimpleTypesToJSON = jSONSchema_JSONSchemaSimpleTypesToJSON;
/**
 * The type of the security scheme. Valid values are "basic",
 * "apiKey" or "oauth2".
 */
var SecurityScheme_Type;
(function (SecurityScheme_Type) {
    SecurityScheme_Type[SecurityScheme_Type["TYPE_INVALID"] = 0] = "TYPE_INVALID";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_BASIC"] = 1] = "TYPE_BASIC";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_API_KEY"] = 2] = "TYPE_API_KEY";
    SecurityScheme_Type[SecurityScheme_Type["TYPE_OAUTH2"] = 3] = "TYPE_OAUTH2";
    SecurityScheme_Type[SecurityScheme_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_Type = exports.SecurityScheme_Type || (exports.SecurityScheme_Type = {}));
function securityScheme_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_INVALID":
            return SecurityScheme_Type.TYPE_INVALID;
        case 1:
        case "TYPE_BASIC":
            return SecurityScheme_Type.TYPE_BASIC;
        case 2:
        case "TYPE_API_KEY":
            return SecurityScheme_Type.TYPE_API_KEY;
        case 3:
        case "TYPE_OAUTH2":
            return SecurityScheme_Type.TYPE_OAUTH2;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_Type.UNRECOGNIZED;
    }
}
exports.securityScheme_TypeFromJSON = securityScheme_TypeFromJSON;
function securityScheme_TypeToJSON(object) {
    switch (object) {
        case SecurityScheme_Type.TYPE_INVALID:
            return "TYPE_INVALID";
        case SecurityScheme_Type.TYPE_BASIC:
            return "TYPE_BASIC";
        case SecurityScheme_Type.TYPE_API_KEY:
            return "TYPE_API_KEY";
        case SecurityScheme_Type.TYPE_OAUTH2:
            return "TYPE_OAUTH2";
        default:
            return "UNKNOWN";
    }
}
exports.securityScheme_TypeToJSON = securityScheme_TypeToJSON;
/** The location of the API key. Valid values are "query" or "header". */
var SecurityScheme_In;
(function (SecurityScheme_In) {
    SecurityScheme_In[SecurityScheme_In["IN_INVALID"] = 0] = "IN_INVALID";
    SecurityScheme_In[SecurityScheme_In["IN_QUERY"] = 1] = "IN_QUERY";
    SecurityScheme_In[SecurityScheme_In["IN_HEADER"] = 2] = "IN_HEADER";
    SecurityScheme_In[SecurityScheme_In["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_In = exports.SecurityScheme_In || (exports.SecurityScheme_In = {}));
function securityScheme_InFromJSON(object) {
    switch (object) {
        case 0:
        case "IN_INVALID":
            return SecurityScheme_In.IN_INVALID;
        case 1:
        case "IN_QUERY":
            return SecurityScheme_In.IN_QUERY;
        case 2:
        case "IN_HEADER":
            return SecurityScheme_In.IN_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_In.UNRECOGNIZED;
    }
}
exports.securityScheme_InFromJSON = securityScheme_InFromJSON;
function securityScheme_InToJSON(object) {
    switch (object) {
        case SecurityScheme_In.IN_INVALID:
            return "IN_INVALID";
        case SecurityScheme_In.IN_QUERY:
            return "IN_QUERY";
        case SecurityScheme_In.IN_HEADER:
            return "IN_HEADER";
        default:
            return "UNKNOWN";
    }
}
exports.securityScheme_InToJSON = securityScheme_InToJSON;
/**
 * The flow used by the OAuth2 security scheme. Valid values are
 * "implicit", "password", "application" or "accessCode".
 */
var SecurityScheme_Flow;
(function (SecurityScheme_Flow) {
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_INVALID"] = 0] = "FLOW_INVALID";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_IMPLICIT"] = 1] = "FLOW_IMPLICIT";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_PASSWORD"] = 2] = "FLOW_PASSWORD";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_APPLICATION"] = 3] = "FLOW_APPLICATION";
    SecurityScheme_Flow[SecurityScheme_Flow["FLOW_ACCESS_CODE"] = 4] = "FLOW_ACCESS_CODE";
    SecurityScheme_Flow[SecurityScheme_Flow["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SecurityScheme_Flow = exports.SecurityScheme_Flow || (exports.SecurityScheme_Flow = {}));
function securityScheme_FlowFromJSON(object) {
    switch (object) {
        case 0:
        case "FLOW_INVALID":
            return SecurityScheme_Flow.FLOW_INVALID;
        case 1:
        case "FLOW_IMPLICIT":
            return SecurityScheme_Flow.FLOW_IMPLICIT;
        case 2:
        case "FLOW_PASSWORD":
            return SecurityScheme_Flow.FLOW_PASSWORD;
        case 3:
        case "FLOW_APPLICATION":
            return SecurityScheme_Flow.FLOW_APPLICATION;
        case 4:
        case "FLOW_ACCESS_CODE":
            return SecurityScheme_Flow.FLOW_ACCESS_CODE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SecurityScheme_Flow.UNRECOGNIZED;
    }
}
exports.securityScheme_FlowFromJSON = securityScheme_FlowFromJSON;
function securityScheme_FlowToJSON(object) {
    switch (object) {
        case SecurityScheme_Flow.FLOW_INVALID:
            return "FLOW_INVALID";
        case SecurityScheme_Flow.FLOW_IMPLICIT:
            return "FLOW_IMPLICIT";
        case SecurityScheme_Flow.FLOW_PASSWORD:
            return "FLOW_PASSWORD";
        case SecurityScheme_Flow.FLOW_APPLICATION:
            return "FLOW_APPLICATION";
        case SecurityScheme_Flow.FLOW_ACCESS_CODE:
            return "FLOW_ACCESS_CODE";
        default:
            return "UNKNOWN";
    }
}
exports.securityScheme_FlowToJSON = securityScheme_FlowToJSON;
const baseSwagger = {
    swagger: "",
    host: "",
    basePath: "",
    schemes: 0,
    consumes: "",
    produces: "",
};
exports.Swagger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.swagger !== "") {
            writer.uint32(10).string(message.swagger);
        }
        if (message.info !== undefined) {
            exports.Info.encode(message.info, writer.uint32(18).fork()).ldelim();
        }
        if (message.host !== "") {
            writer.uint32(26).string(message.host);
        }
        if (message.basePath !== "") {
            writer.uint32(34).string(message.basePath);
        }
        writer.uint32(42).fork();
        for (const v of message.schemes) {
            writer.int32(v);
        }
        writer.ldelim();
        for (const v of message.consumes) {
            writer.uint32(50).string(v);
        }
        for (const v of message.produces) {
            writer.uint32(58).string(v);
        }
        Object.entries(message.responses).forEach(([key, value]) => {
            exports.Swagger_ResponsesEntry.encode({ key: key, value }, writer.uint32(82).fork()).ldelim();
        });
        if (message.securityDefinitions !== undefined) {
            exports.SecurityDefinitions.encode(message.securityDefinitions, writer.uint32(90).fork()).ldelim();
        }
        for (const v of message.security) {
            exports.SecurityRequirement.encode(v, writer.uint32(98).fork()).ldelim();
        }
        if (message.externalDocs !== undefined) {
            exports.ExternalDocumentation.encode(message.externalDocs, writer.uint32(114).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            exports.Swagger_ExtensionsEntry.encode({ key: key, value }, writer.uint32(122).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSwagger };
        message.schemes = [];
        message.consumes = [];
        message.produces = [];
        message.responses = {};
        message.security = [];
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swagger = reader.string();
                    break;
                case 2:
                    message.info = exports.Info.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.host = reader.string();
                    break;
                case 4:
                    message.basePath = reader.string();
                    break;
                case 5:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.schemes.push(reader.int32());
                        }
                    }
                    else {
                        message.schemes.push(reader.int32());
                    }
                    break;
                case 6:
                    message.consumes.push(reader.string());
                    break;
                case 7:
                    message.produces.push(reader.string());
                    break;
                case 10:
                    const entry10 = exports.Swagger_ResponsesEntry.decode(reader, reader.uint32());
                    if (entry10.value !== undefined) {
                        message.responses[entry10.key] = entry10.value;
                    }
                    break;
                case 11:
                    message.securityDefinitions = exports.SecurityDefinitions.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.security.push(exports.SecurityRequirement.decode(reader, reader.uint32()));
                    break;
                case 14:
                    message.externalDocs = exports.ExternalDocumentation.decode(reader, reader.uint32());
                    break;
                case 15:
                    const entry15 = exports.Swagger_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry15.value !== undefined) {
                        message.extensions[entry15.key] = entry15.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSwagger };
        message.schemes = [];
        message.consumes = [];
        message.produces = [];
        message.responses = {};
        message.security = [];
        message.extensions = {};
        if (object.swagger !== undefined && object.swagger !== null) {
            message.swagger = String(object.swagger);
        }
        else {
            message.swagger = "";
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.Info.fromJSON(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.host !== undefined && object.host !== null) {
            message.host = String(object.host);
        }
        else {
            message.host = "";
        }
        if (object.basePath !== undefined && object.basePath !== null) {
            message.basePath = String(object.basePath);
        }
        else {
            message.basePath = "";
        }
        if (object.schemes !== undefined && object.schemes !== null) {
            for (const e of object.schemes) {
                message.schemes.push(schemeFromJSON(e));
            }
        }
        if (object.consumes !== undefined && object.consumes !== null) {
            for (const e of object.consumes) {
                message.consumes.push(String(e));
            }
        }
        if (object.produces !== undefined && object.produces !== null) {
            for (const e of object.produces) {
                message.produces.push(String(e));
            }
        }
        if (object.responses !== undefined && object.responses !== null) {
            Object.entries(object.responses).forEach(([key, value]) => {
                message.responses[key] = exports.Response.fromJSON(value);
            });
        }
        if (object.securityDefinitions !== undefined &&
            object.securityDefinitions !== null) {
            message.securityDefinitions = exports.SecurityDefinitions.fromJSON(object.securityDefinitions);
        }
        else {
            message.securityDefinitions = undefined;
        }
        if (object.security !== undefined && object.security !== null) {
            for (const e of object.security) {
                message.security.push(exports.SecurityRequirement.fromJSON(e));
            }
        }
        if (object.externalDocs !== undefined && object.externalDocs !== null) {
            message.externalDocs = exports.ExternalDocumentation.fromJSON(object.externalDocs);
        }
        else {
            message.externalDocs = undefined;
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                message.extensions[key] = struct_1.Value.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.swagger !== undefined && (obj.swagger = message.swagger);
        message.info !== undefined &&
            (obj.info = message.info ? exports.Info.toJSON(message.info) : undefined);
        message.host !== undefined && (obj.host = message.host);
        message.basePath !== undefined && (obj.basePath = message.basePath);
        if (message.schemes) {
            obj.schemes = message.schemes.map((e) => schemeToJSON(e));
        }
        else {
            obj.schemes = [];
        }
        if (message.consumes) {
            obj.consumes = message.consumes.map((e) => e);
        }
        else {
            obj.consumes = [];
        }
        if (message.produces) {
            obj.produces = message.produces.map((e) => e);
        }
        else {
            obj.produces = [];
        }
        obj.responses = {};
        if (message.responses) {
            Object.entries(message.responses).forEach(([k, v]) => {
                obj.responses[k] = exports.Response.toJSON(v);
            });
        }
        message.securityDefinitions !== undefined &&
            (obj.securityDefinitions = message.securityDefinitions
                ? exports.SecurityDefinitions.toJSON(message.securityDefinitions)
                : undefined);
        if (message.security) {
            obj.security = message.security.map((e) => e ? exports.SecurityRequirement.toJSON(e) : undefined);
        }
        else {
            obj.security = [];
        }
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs
                ? exports.ExternalDocumentation.toJSON(message.externalDocs)
                : undefined);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = struct_1.Value.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSwagger };
        message.schemes = [];
        message.consumes = [];
        message.produces = [];
        message.responses = {};
        message.security = [];
        message.extensions = {};
        if (object.swagger !== undefined && object.swagger !== null) {
            message.swagger = object.swagger;
        }
        else {
            message.swagger = "";
        }
        if (object.info !== undefined && object.info !== null) {
            message.info = exports.Info.fromPartial(object.info);
        }
        else {
            message.info = undefined;
        }
        if (object.host !== undefined && object.host !== null) {
            message.host = object.host;
        }
        else {
            message.host = "";
        }
        if (object.basePath !== undefined && object.basePath !== null) {
            message.basePath = object.basePath;
        }
        else {
            message.basePath = "";
        }
        if (object.schemes !== undefined && object.schemes !== null) {
            for (const e of object.schemes) {
                message.schemes.push(e);
            }
        }
        if (object.consumes !== undefined && object.consumes !== null) {
            for (const e of object.consumes) {
                message.consumes.push(e);
            }
        }
        if (object.produces !== undefined && object.produces !== null) {
            for (const e of object.produces) {
                message.produces.push(e);
            }
        }
        if (object.responses !== undefined && object.responses !== null) {
            Object.entries(object.responses).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.responses[key] = exports.Response.fromPartial(value);
                }
            });
        }
        if (object.securityDefinitions !== undefined &&
            object.securityDefinitions !== null) {
            message.securityDefinitions = exports.SecurityDefinitions.fromPartial(object.securityDefinitions);
        }
        else {
            message.securityDefinitions = undefined;
        }
        if (object.security !== undefined && object.security !== null) {
            for (const e of object.security) {
                message.security.push(exports.SecurityRequirement.fromPartial(e));
            }
        }
        if (object.externalDocs !== undefined && object.externalDocs !== null) {
            message.externalDocs = exports.ExternalDocumentation.fromPartial(object.externalDocs);
        }
        else {
            message.externalDocs = undefined;
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.extensions[key] = struct_1.Value.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseSwagger_ResponsesEntry = { key: "" };
exports.Swagger_ResponsesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Response.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSwagger_ResponsesEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Response.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSwagger_ResponsesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Response.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.Response.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSwagger_ResponsesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Response.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseSwagger_ExtensionsEntry = { key: "" };
exports.Swagger_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSwagger_ExtensionsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = struct_1.Value.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSwagger_ExtensionsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? struct_1.Value.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSwagger_ExtensionsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseOperation = {
    tags: "",
    summary: "",
    description: "",
    operationId: "",
    consumes: "",
    produces: "",
    schemes: 0,
    deprecated: false,
};
exports.Operation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.tags) {
            writer.uint32(10).string(v);
        }
        if (message.summary !== "") {
            writer.uint32(18).string(message.summary);
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.externalDocs !== undefined) {
            exports.ExternalDocumentation.encode(message.externalDocs, writer.uint32(34).fork()).ldelim();
        }
        if (message.operationId !== "") {
            writer.uint32(42).string(message.operationId);
        }
        for (const v of message.consumes) {
            writer.uint32(50).string(v);
        }
        for (const v of message.produces) {
            writer.uint32(58).string(v);
        }
        Object.entries(message.responses).forEach(([key, value]) => {
            exports.Operation_ResponsesEntry.encode({ key: key, value }, writer.uint32(74).fork()).ldelim();
        });
        writer.uint32(82).fork();
        for (const v of message.schemes) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.deprecated === true) {
            writer.uint32(88).bool(message.deprecated);
        }
        for (const v of message.security) {
            exports.SecurityRequirement.encode(v, writer.uint32(98).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            exports.Operation_ExtensionsEntry.encode({ key: key, value }, writer.uint32(106).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseOperation };
        message.tags = [];
        message.consumes = [];
        message.produces = [];
        message.responses = {};
        message.schemes = [];
        message.security = [];
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tags.push(reader.string());
                    break;
                case 2:
                    message.summary = reader.string();
                    break;
                case 3:
                    message.description = reader.string();
                    break;
                case 4:
                    message.externalDocs = exports.ExternalDocumentation.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.operationId = reader.string();
                    break;
                case 6:
                    message.consumes.push(reader.string());
                    break;
                case 7:
                    message.produces.push(reader.string());
                    break;
                case 9:
                    const entry9 = exports.Operation_ResponsesEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.responses[entry9.key] = entry9.value;
                    }
                    break;
                case 10:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.schemes.push(reader.int32());
                        }
                    }
                    else {
                        message.schemes.push(reader.int32());
                    }
                    break;
                case 11:
                    message.deprecated = reader.bool();
                    break;
                case 12:
                    message.security.push(exports.SecurityRequirement.decode(reader, reader.uint32()));
                    break;
                case 13:
                    const entry13 = exports.Operation_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry13.value !== undefined) {
                        message.extensions[entry13.key] = entry13.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseOperation };
        message.tags = [];
        message.consumes = [];
        message.produces = [];
        message.responses = {};
        message.schemes = [];
        message.security = [];
        message.extensions = {};
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(String(e));
            }
        }
        if (object.summary !== undefined && object.summary !== null) {
            message.summary = String(object.summary);
        }
        else {
            message.summary = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.externalDocs !== undefined && object.externalDocs !== null) {
            message.externalDocs = exports.ExternalDocumentation.fromJSON(object.externalDocs);
        }
        else {
            message.externalDocs = undefined;
        }
        if (object.operationId !== undefined && object.operationId !== null) {
            message.operationId = String(object.operationId);
        }
        else {
            message.operationId = "";
        }
        if (object.consumes !== undefined && object.consumes !== null) {
            for (const e of object.consumes) {
                message.consumes.push(String(e));
            }
        }
        if (object.produces !== undefined && object.produces !== null) {
            for (const e of object.produces) {
                message.produces.push(String(e));
            }
        }
        if (object.responses !== undefined && object.responses !== null) {
            Object.entries(object.responses).forEach(([key, value]) => {
                message.responses[key] = exports.Response.fromJSON(value);
            });
        }
        if (object.schemes !== undefined && object.schemes !== null) {
            for (const e of object.schemes) {
                message.schemes.push(schemeFromJSON(e));
            }
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = Boolean(object.deprecated);
        }
        else {
            message.deprecated = false;
        }
        if (object.security !== undefined && object.security !== null) {
            for (const e of object.security) {
                message.security.push(exports.SecurityRequirement.fromJSON(e));
            }
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                message.extensions[key] = struct_1.Value.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.tags) {
            obj.tags = message.tags.map((e) => e);
        }
        else {
            obj.tags = [];
        }
        message.summary !== undefined && (obj.summary = message.summary);
        message.description !== undefined &&
            (obj.description = message.description);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs
                ? exports.ExternalDocumentation.toJSON(message.externalDocs)
                : undefined);
        message.operationId !== undefined &&
            (obj.operationId = message.operationId);
        if (message.consumes) {
            obj.consumes = message.consumes.map((e) => e);
        }
        else {
            obj.consumes = [];
        }
        if (message.produces) {
            obj.produces = message.produces.map((e) => e);
        }
        else {
            obj.produces = [];
        }
        obj.responses = {};
        if (message.responses) {
            Object.entries(message.responses).forEach(([k, v]) => {
                obj.responses[k] = exports.Response.toJSON(v);
            });
        }
        if (message.schemes) {
            obj.schemes = message.schemes.map((e) => schemeToJSON(e));
        }
        else {
            obj.schemes = [];
        }
        message.deprecated !== undefined && (obj.deprecated = message.deprecated);
        if (message.security) {
            obj.security = message.security.map((e) => e ? exports.SecurityRequirement.toJSON(e) : undefined);
        }
        else {
            obj.security = [];
        }
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = struct_1.Value.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseOperation };
        message.tags = [];
        message.consumes = [];
        message.produces = [];
        message.responses = {};
        message.schemes = [];
        message.security = [];
        message.extensions = {};
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(e);
            }
        }
        if (object.summary !== undefined && object.summary !== null) {
            message.summary = object.summary;
        }
        else {
            message.summary = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.externalDocs !== undefined && object.externalDocs !== null) {
            message.externalDocs = exports.ExternalDocumentation.fromPartial(object.externalDocs);
        }
        else {
            message.externalDocs = undefined;
        }
        if (object.operationId !== undefined && object.operationId !== null) {
            message.operationId = object.operationId;
        }
        else {
            message.operationId = "";
        }
        if (object.consumes !== undefined && object.consumes !== null) {
            for (const e of object.consumes) {
                message.consumes.push(e);
            }
        }
        if (object.produces !== undefined && object.produces !== null) {
            for (const e of object.produces) {
                message.produces.push(e);
            }
        }
        if (object.responses !== undefined && object.responses !== null) {
            Object.entries(object.responses).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.responses[key] = exports.Response.fromPartial(value);
                }
            });
        }
        if (object.schemes !== undefined && object.schemes !== null) {
            for (const e of object.schemes) {
                message.schemes.push(e);
            }
        }
        if (object.deprecated !== undefined && object.deprecated !== null) {
            message.deprecated = object.deprecated;
        }
        else {
            message.deprecated = false;
        }
        if (object.security !== undefined && object.security !== null) {
            for (const e of object.security) {
                message.security.push(exports.SecurityRequirement.fromPartial(e));
            }
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.extensions[key] = struct_1.Value.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseOperation_ResponsesEntry = { key: "" };
exports.Operation_ResponsesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Response.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseOperation_ResponsesEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Response.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseOperation_ResponsesEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Response.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.Response.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseOperation_ResponsesEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Response.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseOperation_ExtensionsEntry = { key: "" };
exports.Operation_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseOperation_ExtensionsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = struct_1.Value.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseOperation_ExtensionsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? struct_1.Value.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseOperation_ExtensionsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseHeader = {
    description: "",
    type: "",
    format: "",
    default: "",
    pattern: "",
};
exports.Header = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.format !== "") {
            writer.uint32(26).string(message.format);
        }
        if (message.default !== "") {
            writer.uint32(50).string(message.default);
        }
        if (message.pattern !== "") {
            writer.uint32(106).string(message.pattern);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseHeader };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.format = reader.string();
                    break;
                case 6:
                    message.default = reader.string();
                    break;
                case 13:
                    message.pattern = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseHeader };
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = String(object.type);
        }
        else {
            message.type = "";
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = String(object.format);
        }
        else {
            message.format = "";
        }
        if (object.default !== undefined && object.default !== null) {
            message.default = String(object.default);
        }
        else {
            message.default = "";
        }
        if (object.pattern !== undefined && object.pattern !== null) {
            message.pattern = String(object.pattern);
        }
        else {
            message.pattern = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.type !== undefined && (obj.type = message.type);
        message.format !== undefined && (obj.format = message.format);
        message.default !== undefined && (obj.default = message.default);
        message.pattern !== undefined && (obj.pattern = message.pattern);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseHeader };
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = "";
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = "";
        }
        if (object.default !== undefined && object.default !== null) {
            message.default = object.default;
        }
        else {
            message.default = "";
        }
        if (object.pattern !== undefined && object.pattern !== null) {
            message.pattern = object.pattern;
        }
        else {
            message.pattern = "";
        }
        return message;
    },
};
const baseResponse = { description: "" };
exports.Response = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.schema !== undefined) {
            exports.Schema.encode(message.schema, writer.uint32(18).fork()).ldelim();
        }
        Object.entries(message.headers).forEach(([key, value]) => {
            exports.Response_HeadersEntry.encode({ key: key, value }, writer.uint32(26).fork()).ldelim();
        });
        Object.entries(message.examples).forEach(([key, value]) => {
            exports.Response_ExamplesEntry.encode({ key: key, value }, writer.uint32(34).fork()).ldelim();
        });
        Object.entries(message.extensions).forEach(([key, value]) => {
            exports.Response_ExtensionsEntry.encode({ key: key, value }, writer.uint32(42).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResponse };
        message.headers = {};
        message.examples = {};
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.schema = exports.Schema.decode(reader, reader.uint32());
                    break;
                case 3:
                    const entry3 = exports.Response_HeadersEntry.decode(reader, reader.uint32());
                    if (entry3.value !== undefined) {
                        message.headers[entry3.key] = entry3.value;
                    }
                    break;
                case 4:
                    const entry4 = exports.Response_ExamplesEntry.decode(reader, reader.uint32());
                    if (entry4.value !== undefined) {
                        message.examples[entry4.key] = entry4.value;
                    }
                    break;
                case 5:
                    const entry5 = exports.Response_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry5.value !== undefined) {
                        message.extensions[entry5.key] = entry5.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResponse };
        message.headers = {};
        message.examples = {};
        message.extensions = {};
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = exports.Schema.fromJSON(object.schema);
        }
        else {
            message.schema = undefined;
        }
        if (object.headers !== undefined && object.headers !== null) {
            Object.entries(object.headers).forEach(([key, value]) => {
                message.headers[key] = exports.Header.fromJSON(value);
            });
        }
        if (object.examples !== undefined && object.examples !== null) {
            Object.entries(object.examples).forEach(([key, value]) => {
                message.examples[key] = String(value);
            });
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                message.extensions[key] = struct_1.Value.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.schema !== undefined &&
            (obj.schema = message.schema ? exports.Schema.toJSON(message.schema) : undefined);
        obj.headers = {};
        if (message.headers) {
            Object.entries(message.headers).forEach(([k, v]) => {
                obj.headers[k] = exports.Header.toJSON(v);
            });
        }
        obj.examples = {};
        if (message.examples) {
            Object.entries(message.examples).forEach(([k, v]) => {
                obj.examples[k] = v;
            });
        }
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = struct_1.Value.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResponse };
        message.headers = {};
        message.examples = {};
        message.extensions = {};
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = exports.Schema.fromPartial(object.schema);
        }
        else {
            message.schema = undefined;
        }
        if (object.headers !== undefined && object.headers !== null) {
            Object.entries(object.headers).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.headers[key] = exports.Header.fromPartial(value);
                }
            });
        }
        if (object.examples !== undefined && object.examples !== null) {
            Object.entries(object.examples).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.examples[key] = String(value);
                }
            });
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.extensions[key] = struct_1.Value.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseResponse_HeadersEntry = { key: "" };
exports.Response_HeadersEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.Header.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResponse_HeadersEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.Header.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResponse_HeadersEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Header.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? exports.Header.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResponse_HeadersEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.Header.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseResponse_ExamplesEntry = { key: "", value: "" };
exports.Response_ExamplesEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResponse_ExamplesEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseResponse_ExamplesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseResponse_ExamplesEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
};
const baseResponse_ExtensionsEntry = { key: "" };
exports.Response_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseResponse_ExtensionsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = struct_1.Value.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseResponse_ExtensionsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? struct_1.Value.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseResponse_ExtensionsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseInfo = {
    title: "",
    description: "",
    termsOfService: "",
    version: "",
};
exports.Info = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.termsOfService !== "") {
            writer.uint32(26).string(message.termsOfService);
        }
        if (message.contact !== undefined) {
            exports.Contact.encode(message.contact, writer.uint32(34).fork()).ldelim();
        }
        if (message.license !== undefined) {
            exports.License.encode(message.license, writer.uint32(42).fork()).ldelim();
        }
        if (message.version !== "") {
            writer.uint32(50).string(message.version);
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            exports.Info_ExtensionsEntry.encode({ key: key, value }, writer.uint32(58).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInfo };
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.termsOfService = reader.string();
                    break;
                case 4:
                    message.contact = exports.Contact.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.license = exports.License.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.version = reader.string();
                    break;
                case 7:
                    const entry7 = exports.Info_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry7.value !== undefined) {
                        message.extensions[entry7.key] = entry7.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInfo };
        message.extensions = {};
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.termsOfService !== undefined && object.termsOfService !== null) {
            message.termsOfService = String(object.termsOfService);
        }
        else {
            message.termsOfService = "";
        }
        if (object.contact !== undefined && object.contact !== null) {
            message.contact = exports.Contact.fromJSON(object.contact);
        }
        else {
            message.contact = undefined;
        }
        if (object.license !== undefined && object.license !== null) {
            message.license = exports.License.fromJSON(object.license);
        }
        else {
            message.license = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = String(object.version);
        }
        else {
            message.version = "";
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                message.extensions[key] = struct_1.Value.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.termsOfService !== undefined &&
            (obj.termsOfService = message.termsOfService);
        message.contact !== undefined &&
            (obj.contact = message.contact
                ? exports.Contact.toJSON(message.contact)
                : undefined);
        message.license !== undefined &&
            (obj.license = message.license
                ? exports.License.toJSON(message.license)
                : undefined);
        message.version !== undefined && (obj.version = message.version);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = struct_1.Value.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInfo };
        message.extensions = {};
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.termsOfService !== undefined && object.termsOfService !== null) {
            message.termsOfService = object.termsOfService;
        }
        else {
            message.termsOfService = "";
        }
        if (object.contact !== undefined && object.contact !== null) {
            message.contact = exports.Contact.fromPartial(object.contact);
        }
        else {
            message.contact = undefined;
        }
        if (object.license !== undefined && object.license !== null) {
            message.license = exports.License.fromPartial(object.license);
        }
        else {
            message.license = undefined;
        }
        if (object.version !== undefined && object.version !== null) {
            message.version = object.version;
        }
        else {
            message.version = "";
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.extensions[key] = struct_1.Value.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseInfo_ExtensionsEntry = { key: "" };
exports.Info_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseInfo_ExtensionsEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = struct_1.Value.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseInfo_ExtensionsEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? struct_1.Value.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseInfo_ExtensionsEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseContact = { name: "", url: "", email: "" };
exports.Contact = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        if (message.email !== "") {
            writer.uint32(26).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseContact };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                case 3:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseContact };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        if (object.email !== undefined && object.email !== null) {
            message.email = String(object.email);
        }
        else {
            message.email = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        message.email !== undefined && (obj.email = message.email);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseContact };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        if (object.email !== undefined && object.email !== null) {
            message.email = object.email;
        }
        else {
            message.email = "";
        }
        return message;
    },
};
const baseLicense = { name: "", url: "" };
exports.License = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLicense };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLicense };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLicense };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        return message;
    },
};
const baseExternalDocumentation = { description: "", url: "" };
exports.ExternalDocumentation = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(10).string(message.description);
        }
        if (message.url !== "") {
            writer.uint32(18).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseExternalDocumentation };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseExternalDocumentation };
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = String(object.url);
        }
        else {
            message.url = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.url !== undefined && (obj.url = message.url);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseExternalDocumentation };
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.url !== undefined && object.url !== null) {
            message.url = object.url;
        }
        else {
            message.url = "";
        }
        return message;
    },
};
const baseSchema = { discriminator: "", readOnly: false, example: "" };
exports.Schema = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.jsonSchema !== undefined) {
            exports.JSONSchema.encode(message.jsonSchema, writer.uint32(10).fork()).ldelim();
        }
        if (message.discriminator !== "") {
            writer.uint32(18).string(message.discriminator);
        }
        if (message.readOnly === true) {
            writer.uint32(24).bool(message.readOnly);
        }
        if (message.externalDocs !== undefined) {
            exports.ExternalDocumentation.encode(message.externalDocs, writer.uint32(42).fork()).ldelim();
        }
        if (message.example !== "") {
            writer.uint32(50).string(message.example);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchema };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.jsonSchema = exports.JSONSchema.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.discriminator = reader.string();
                    break;
                case 3:
                    message.readOnly = reader.bool();
                    break;
                case 5:
                    message.externalDocs = exports.ExternalDocumentation.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.example = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSchema };
        if (object.jsonSchema !== undefined && object.jsonSchema !== null) {
            message.jsonSchema = exports.JSONSchema.fromJSON(object.jsonSchema);
        }
        else {
            message.jsonSchema = undefined;
        }
        if (object.discriminator !== undefined && object.discriminator !== null) {
            message.discriminator = String(object.discriminator);
        }
        else {
            message.discriminator = "";
        }
        if (object.readOnly !== undefined && object.readOnly !== null) {
            message.readOnly = Boolean(object.readOnly);
        }
        else {
            message.readOnly = false;
        }
        if (object.externalDocs !== undefined && object.externalDocs !== null) {
            message.externalDocs = exports.ExternalDocumentation.fromJSON(object.externalDocs);
        }
        else {
            message.externalDocs = undefined;
        }
        if (object.example !== undefined && object.example !== null) {
            message.example = String(object.example);
        }
        else {
            message.example = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.jsonSchema !== undefined &&
            (obj.jsonSchema = message.jsonSchema
                ? exports.JSONSchema.toJSON(message.jsonSchema)
                : undefined);
        message.discriminator !== undefined &&
            (obj.discriminator = message.discriminator);
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs
                ? exports.ExternalDocumentation.toJSON(message.externalDocs)
                : undefined);
        message.example !== undefined && (obj.example = message.example);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSchema };
        if (object.jsonSchema !== undefined && object.jsonSchema !== null) {
            message.jsonSchema = exports.JSONSchema.fromPartial(object.jsonSchema);
        }
        else {
            message.jsonSchema = undefined;
        }
        if (object.discriminator !== undefined && object.discriminator !== null) {
            message.discriminator = object.discriminator;
        }
        else {
            message.discriminator = "";
        }
        if (object.readOnly !== undefined && object.readOnly !== null) {
            message.readOnly = object.readOnly;
        }
        else {
            message.readOnly = false;
        }
        if (object.externalDocs !== undefined && object.externalDocs !== null) {
            message.externalDocs = exports.ExternalDocumentation.fromPartial(object.externalDocs);
        }
        else {
            message.externalDocs = undefined;
        }
        if (object.example !== undefined && object.example !== null) {
            message.example = object.example;
        }
        else {
            message.example = "";
        }
        return message;
    },
};
const baseJSONSchema = {
    ref: "",
    title: "",
    description: "",
    default: "",
    readOnly: false,
    example: "",
    multipleOf: 0,
    maximum: 0,
    exclusiveMaximum: false,
    minimum: 0,
    exclusiveMinimum: false,
    maxLength: long_1.default.UZERO,
    minLength: long_1.default.UZERO,
    pattern: "",
    maxItems: long_1.default.UZERO,
    minItems: long_1.default.UZERO,
    uniqueItems: false,
    maxProperties: long_1.default.UZERO,
    minProperties: long_1.default.UZERO,
    required: "",
    array: "",
    type: 0,
    format: "",
    enum: "",
};
exports.JSONSchema = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ref !== "") {
            writer.uint32(26).string(message.ref);
        }
        if (message.title !== "") {
            writer.uint32(42).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(50).string(message.description);
        }
        if (message.default !== "") {
            writer.uint32(58).string(message.default);
        }
        if (message.readOnly === true) {
            writer.uint32(64).bool(message.readOnly);
        }
        if (message.example !== "") {
            writer.uint32(74).string(message.example);
        }
        if (message.multipleOf !== 0) {
            writer.uint32(81).double(message.multipleOf);
        }
        if (message.maximum !== 0) {
            writer.uint32(89).double(message.maximum);
        }
        if (message.exclusiveMaximum === true) {
            writer.uint32(96).bool(message.exclusiveMaximum);
        }
        if (message.minimum !== 0) {
            writer.uint32(105).double(message.minimum);
        }
        if (message.exclusiveMinimum === true) {
            writer.uint32(112).bool(message.exclusiveMinimum);
        }
        if (!message.maxLength.isZero()) {
            writer.uint32(120).uint64(message.maxLength);
        }
        if (!message.minLength.isZero()) {
            writer.uint32(128).uint64(message.minLength);
        }
        if (message.pattern !== "") {
            writer.uint32(138).string(message.pattern);
        }
        if (!message.maxItems.isZero()) {
            writer.uint32(160).uint64(message.maxItems);
        }
        if (!message.minItems.isZero()) {
            writer.uint32(168).uint64(message.minItems);
        }
        if (message.uniqueItems === true) {
            writer.uint32(176).bool(message.uniqueItems);
        }
        if (!message.maxProperties.isZero()) {
            writer.uint32(192).uint64(message.maxProperties);
        }
        if (!message.minProperties.isZero()) {
            writer.uint32(200).uint64(message.minProperties);
        }
        for (const v of message.required) {
            writer.uint32(210).string(v);
        }
        for (const v of message.array) {
            writer.uint32(274).string(v);
        }
        writer.uint32(282).fork();
        for (const v of message.type) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.format !== "") {
            writer.uint32(290).string(message.format);
        }
        for (const v of message.enum) {
            writer.uint32(370).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseJSONSchema };
        message.required = [];
        message.array = [];
        message.type = [];
        message.enum = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.ref = reader.string();
                    break;
                case 5:
                    message.title = reader.string();
                    break;
                case 6:
                    message.description = reader.string();
                    break;
                case 7:
                    message.default = reader.string();
                    break;
                case 8:
                    message.readOnly = reader.bool();
                    break;
                case 9:
                    message.example = reader.string();
                    break;
                case 10:
                    message.multipleOf = reader.double();
                    break;
                case 11:
                    message.maximum = reader.double();
                    break;
                case 12:
                    message.exclusiveMaximum = reader.bool();
                    break;
                case 13:
                    message.minimum = reader.double();
                    break;
                case 14:
                    message.exclusiveMinimum = reader.bool();
                    break;
                case 15:
                    message.maxLength = reader.uint64();
                    break;
                case 16:
                    message.minLength = reader.uint64();
                    break;
                case 17:
                    message.pattern = reader.string();
                    break;
                case 20:
                    message.maxItems = reader.uint64();
                    break;
                case 21:
                    message.minItems = reader.uint64();
                    break;
                case 22:
                    message.uniqueItems = reader.bool();
                    break;
                case 24:
                    message.maxProperties = reader.uint64();
                    break;
                case 25:
                    message.minProperties = reader.uint64();
                    break;
                case 26:
                    message.required.push(reader.string());
                    break;
                case 34:
                    message.array.push(reader.string());
                    break;
                case 35:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.type.push(reader.int32());
                        }
                    }
                    else {
                        message.type.push(reader.int32());
                    }
                    break;
                case 36:
                    message.format = reader.string();
                    break;
                case 46:
                    message.enum.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseJSONSchema };
        message.required = [];
        message.array = [];
        message.type = [];
        message.enum = [];
        if (object.ref !== undefined && object.ref !== null) {
            message.ref = String(object.ref);
        }
        else {
            message.ref = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = String(object.title);
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.default !== undefined && object.default !== null) {
            message.default = String(object.default);
        }
        else {
            message.default = "";
        }
        if (object.readOnly !== undefined && object.readOnly !== null) {
            message.readOnly = Boolean(object.readOnly);
        }
        else {
            message.readOnly = false;
        }
        if (object.example !== undefined && object.example !== null) {
            message.example = String(object.example);
        }
        else {
            message.example = "";
        }
        if (object.multipleOf !== undefined && object.multipleOf !== null) {
            message.multipleOf = Number(object.multipleOf);
        }
        else {
            message.multipleOf = 0;
        }
        if (object.maximum !== undefined && object.maximum !== null) {
            message.maximum = Number(object.maximum);
        }
        else {
            message.maximum = 0;
        }
        if (object.exclusiveMaximum !== undefined &&
            object.exclusiveMaximum !== null) {
            message.exclusiveMaximum = Boolean(object.exclusiveMaximum);
        }
        else {
            message.exclusiveMaximum = false;
        }
        if (object.minimum !== undefined && object.minimum !== null) {
            message.minimum = Number(object.minimum);
        }
        else {
            message.minimum = 0;
        }
        if (object.exclusiveMinimum !== undefined &&
            object.exclusiveMinimum !== null) {
            message.exclusiveMinimum = Boolean(object.exclusiveMinimum);
        }
        else {
            message.exclusiveMinimum = false;
        }
        if (object.maxLength !== undefined && object.maxLength !== null) {
            message.maxLength = long_1.default.fromString(object.maxLength);
        }
        else {
            message.maxLength = long_1.default.UZERO;
        }
        if (object.minLength !== undefined && object.minLength !== null) {
            message.minLength = long_1.default.fromString(object.minLength);
        }
        else {
            message.minLength = long_1.default.UZERO;
        }
        if (object.pattern !== undefined && object.pattern !== null) {
            message.pattern = String(object.pattern);
        }
        else {
            message.pattern = "";
        }
        if (object.maxItems !== undefined && object.maxItems !== null) {
            message.maxItems = long_1.default.fromString(object.maxItems);
        }
        else {
            message.maxItems = long_1.default.UZERO;
        }
        if (object.minItems !== undefined && object.minItems !== null) {
            message.minItems = long_1.default.fromString(object.minItems);
        }
        else {
            message.minItems = long_1.default.UZERO;
        }
        if (object.uniqueItems !== undefined && object.uniqueItems !== null) {
            message.uniqueItems = Boolean(object.uniqueItems);
        }
        else {
            message.uniqueItems = false;
        }
        if (object.maxProperties !== undefined && object.maxProperties !== null) {
            message.maxProperties = long_1.default.fromString(object.maxProperties);
        }
        else {
            message.maxProperties = long_1.default.UZERO;
        }
        if (object.minProperties !== undefined && object.minProperties !== null) {
            message.minProperties = long_1.default.fromString(object.minProperties);
        }
        else {
            message.minProperties = long_1.default.UZERO;
        }
        if (object.required !== undefined && object.required !== null) {
            for (const e of object.required) {
                message.required.push(String(e));
            }
        }
        if (object.array !== undefined && object.array !== null) {
            for (const e of object.array) {
                message.array.push(String(e));
            }
        }
        if (object.type !== undefined && object.type !== null) {
            for (const e of object.type) {
                message.type.push(jSONSchema_JSONSchemaSimpleTypesFromJSON(e));
            }
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = String(object.format);
        }
        else {
            message.format = "";
        }
        if (object.enum !== undefined && object.enum !== null) {
            for (const e of object.enum) {
                message.enum.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ref !== undefined && (obj.ref = message.ref);
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.default !== undefined && (obj.default = message.default);
        message.readOnly !== undefined && (obj.readOnly = message.readOnly);
        message.example !== undefined && (obj.example = message.example);
        message.multipleOf !== undefined && (obj.multipleOf = message.multipleOf);
        message.maximum !== undefined && (obj.maximum = message.maximum);
        message.exclusiveMaximum !== undefined &&
            (obj.exclusiveMaximum = message.exclusiveMaximum);
        message.minimum !== undefined && (obj.minimum = message.minimum);
        message.exclusiveMinimum !== undefined &&
            (obj.exclusiveMinimum = message.exclusiveMinimum);
        message.maxLength !== undefined &&
            (obj.maxLength = (message.maxLength || long_1.default.UZERO).toString());
        message.minLength !== undefined &&
            (obj.minLength = (message.minLength || long_1.default.UZERO).toString());
        message.pattern !== undefined && (obj.pattern = message.pattern);
        message.maxItems !== undefined &&
            (obj.maxItems = (message.maxItems || long_1.default.UZERO).toString());
        message.minItems !== undefined &&
            (obj.minItems = (message.minItems || long_1.default.UZERO).toString());
        message.uniqueItems !== undefined &&
            (obj.uniqueItems = message.uniqueItems);
        message.maxProperties !== undefined &&
            (obj.maxProperties = (message.maxProperties || long_1.default.UZERO).toString());
        message.minProperties !== undefined &&
            (obj.minProperties = (message.minProperties || long_1.default.UZERO).toString());
        if (message.required) {
            obj.required = message.required.map((e) => e);
        }
        else {
            obj.required = [];
        }
        if (message.array) {
            obj.array = message.array.map((e) => e);
        }
        else {
            obj.array = [];
        }
        if (message.type) {
            obj.type = message.type.map((e) => jSONSchema_JSONSchemaSimpleTypesToJSON(e));
        }
        else {
            obj.type = [];
        }
        message.format !== undefined && (obj.format = message.format);
        if (message.enum) {
            obj.enum = message.enum.map((e) => e);
        }
        else {
            obj.enum = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseJSONSchema };
        message.required = [];
        message.array = [];
        message.type = [];
        message.enum = [];
        if (object.ref !== undefined && object.ref !== null) {
            message.ref = object.ref;
        }
        else {
            message.ref = "";
        }
        if (object.title !== undefined && object.title !== null) {
            message.title = object.title;
        }
        else {
            message.title = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.default !== undefined && object.default !== null) {
            message.default = object.default;
        }
        else {
            message.default = "";
        }
        if (object.readOnly !== undefined && object.readOnly !== null) {
            message.readOnly = object.readOnly;
        }
        else {
            message.readOnly = false;
        }
        if (object.example !== undefined && object.example !== null) {
            message.example = object.example;
        }
        else {
            message.example = "";
        }
        if (object.multipleOf !== undefined && object.multipleOf !== null) {
            message.multipleOf = object.multipleOf;
        }
        else {
            message.multipleOf = 0;
        }
        if (object.maximum !== undefined && object.maximum !== null) {
            message.maximum = object.maximum;
        }
        else {
            message.maximum = 0;
        }
        if (object.exclusiveMaximum !== undefined &&
            object.exclusiveMaximum !== null) {
            message.exclusiveMaximum = object.exclusiveMaximum;
        }
        else {
            message.exclusiveMaximum = false;
        }
        if (object.minimum !== undefined && object.minimum !== null) {
            message.minimum = object.minimum;
        }
        else {
            message.minimum = 0;
        }
        if (object.exclusiveMinimum !== undefined &&
            object.exclusiveMinimum !== null) {
            message.exclusiveMinimum = object.exclusiveMinimum;
        }
        else {
            message.exclusiveMinimum = false;
        }
        if (object.maxLength !== undefined && object.maxLength !== null) {
            message.maxLength = object.maxLength;
        }
        else {
            message.maxLength = long_1.default.UZERO;
        }
        if (object.minLength !== undefined && object.minLength !== null) {
            message.minLength = object.minLength;
        }
        else {
            message.minLength = long_1.default.UZERO;
        }
        if (object.pattern !== undefined && object.pattern !== null) {
            message.pattern = object.pattern;
        }
        else {
            message.pattern = "";
        }
        if (object.maxItems !== undefined && object.maxItems !== null) {
            message.maxItems = object.maxItems;
        }
        else {
            message.maxItems = long_1.default.UZERO;
        }
        if (object.minItems !== undefined && object.minItems !== null) {
            message.minItems = object.minItems;
        }
        else {
            message.minItems = long_1.default.UZERO;
        }
        if (object.uniqueItems !== undefined && object.uniqueItems !== null) {
            message.uniqueItems = object.uniqueItems;
        }
        else {
            message.uniqueItems = false;
        }
        if (object.maxProperties !== undefined && object.maxProperties !== null) {
            message.maxProperties = object.maxProperties;
        }
        else {
            message.maxProperties = long_1.default.UZERO;
        }
        if (object.minProperties !== undefined && object.minProperties !== null) {
            message.minProperties = object.minProperties;
        }
        else {
            message.minProperties = long_1.default.UZERO;
        }
        if (object.required !== undefined && object.required !== null) {
            for (const e of object.required) {
                message.required.push(e);
            }
        }
        if (object.array !== undefined && object.array !== null) {
            for (const e of object.array) {
                message.array.push(e);
            }
        }
        if (object.type !== undefined && object.type !== null) {
            for (const e of object.type) {
                message.type.push(e);
            }
        }
        if (object.format !== undefined && object.format !== null) {
            message.format = object.format;
        }
        else {
            message.format = "";
        }
        if (object.enum !== undefined && object.enum !== null) {
            for (const e of object.enum) {
                message.enum.push(e);
            }
        }
        return message;
    },
};
const baseTag = { description: "" };
exports.Tag = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.externalDocs !== undefined) {
            exports.ExternalDocumentation.encode(message.externalDocs, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTag };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.externalDocs = exports.ExternalDocumentation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTag };
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.externalDocs !== undefined && object.externalDocs !== null) {
            message.externalDocs = exports.ExternalDocumentation.fromJSON(object.externalDocs);
        }
        else {
            message.externalDocs = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description);
        message.externalDocs !== undefined &&
            (obj.externalDocs = message.externalDocs
                ? exports.ExternalDocumentation.toJSON(message.externalDocs)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTag };
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.externalDocs !== undefined && object.externalDocs !== null) {
            message.externalDocs = exports.ExternalDocumentation.fromPartial(object.externalDocs);
        }
        else {
            message.externalDocs = undefined;
        }
        return message;
    },
};
const baseSecurityDefinitions = {};
exports.SecurityDefinitions = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.security).forEach(([key, value]) => {
            exports.SecurityDefinitions_SecurityEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityDefinitions };
        message.security = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.SecurityDefinitions_SecurityEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.security[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSecurityDefinitions };
        message.security = {};
        if (object.security !== undefined && object.security !== null) {
            Object.entries(object.security).forEach(([key, value]) => {
                message.security[key] = exports.SecurityScheme.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.security = {};
        if (message.security) {
            Object.entries(message.security).forEach(([k, v]) => {
                obj.security[k] = exports.SecurityScheme.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecurityDefinitions };
        message.security = {};
        if (object.security !== undefined && object.security !== null) {
            Object.entries(object.security).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.security[key] = exports.SecurityScheme.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseSecurityDefinitions_SecurityEntry = { key: "" };
exports.SecurityDefinitions_SecurityEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SecurityScheme.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityDefinitions_SecurityEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.SecurityScheme.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSecurityDefinitions_SecurityEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.SecurityScheme.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.SecurityScheme.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSecurityDefinitions_SecurityEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.SecurityScheme.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseSecurityScheme = {
    type: 0,
    description: "",
    name: "",
    in: 0,
    flow: 0,
    authorizationUrl: "",
    tokenUrl: "",
};
exports.SecurityScheme = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.in !== 0) {
            writer.uint32(32).int32(message.in);
        }
        if (message.flow !== 0) {
            writer.uint32(40).int32(message.flow);
        }
        if (message.authorizationUrl !== "") {
            writer.uint32(50).string(message.authorizationUrl);
        }
        if (message.tokenUrl !== "") {
            writer.uint32(58).string(message.tokenUrl);
        }
        if (message.scopes !== undefined) {
            exports.Scopes.encode(message.scopes, writer.uint32(66).fork()).ldelim();
        }
        Object.entries(message.extensions).forEach(([key, value]) => {
            exports.SecurityScheme_ExtensionsEntry.encode({ key: key, value }, writer.uint32(74).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityScheme };
        message.extensions = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.in = reader.int32();
                    break;
                case 5:
                    message.flow = reader.int32();
                    break;
                case 6:
                    message.authorizationUrl = reader.string();
                    break;
                case 7:
                    message.tokenUrl = reader.string();
                    break;
                case 8:
                    message.scopes = exports.Scopes.decode(reader, reader.uint32());
                    break;
                case 9:
                    const entry9 = exports.SecurityScheme_ExtensionsEntry.decode(reader, reader.uint32());
                    if (entry9.value !== undefined) {
                        message.extensions[entry9.key] = entry9.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSecurityScheme };
        message.extensions = {};
        if (object.type !== undefined && object.type !== null) {
            message.type = securityScheme_TypeFromJSON(object.type);
        }
        else {
            message.type = 0;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.in !== undefined && object.in !== null) {
            message.in = securityScheme_InFromJSON(object.in);
        }
        else {
            message.in = 0;
        }
        if (object.flow !== undefined && object.flow !== null) {
            message.flow = securityScheme_FlowFromJSON(object.flow);
        }
        else {
            message.flow = 0;
        }
        if (object.authorizationUrl !== undefined &&
            object.authorizationUrl !== null) {
            message.authorizationUrl = String(object.authorizationUrl);
        }
        else {
            message.authorizationUrl = "";
        }
        if (object.tokenUrl !== undefined && object.tokenUrl !== null) {
            message.tokenUrl = String(object.tokenUrl);
        }
        else {
            message.tokenUrl = "";
        }
        if (object.scopes !== undefined && object.scopes !== null) {
            message.scopes = exports.Scopes.fromJSON(object.scopes);
        }
        else {
            message.scopes = undefined;
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                message.extensions[key] = struct_1.Value.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = securityScheme_TypeToJSON(message.type));
        message.description !== undefined &&
            (obj.description = message.description);
        message.name !== undefined && (obj.name = message.name);
        message.in !== undefined && (obj.in = securityScheme_InToJSON(message.in));
        message.flow !== undefined &&
            (obj.flow = securityScheme_FlowToJSON(message.flow));
        message.authorizationUrl !== undefined &&
            (obj.authorizationUrl = message.authorizationUrl);
        message.tokenUrl !== undefined && (obj.tokenUrl = message.tokenUrl);
        message.scopes !== undefined &&
            (obj.scopes = message.scopes ? exports.Scopes.toJSON(message.scopes) : undefined);
        obj.extensions = {};
        if (message.extensions) {
            Object.entries(message.extensions).forEach(([k, v]) => {
                obj.extensions[k] = struct_1.Value.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecurityScheme };
        message.extensions = {};
        if (object.type !== undefined && object.type !== null) {
            message.type = object.type;
        }
        else {
            message.type = 0;
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.in !== undefined && object.in !== null) {
            message.in = object.in;
        }
        else {
            message.in = 0;
        }
        if (object.flow !== undefined && object.flow !== null) {
            message.flow = object.flow;
        }
        else {
            message.flow = 0;
        }
        if (object.authorizationUrl !== undefined &&
            object.authorizationUrl !== null) {
            message.authorizationUrl = object.authorizationUrl;
        }
        else {
            message.authorizationUrl = "";
        }
        if (object.tokenUrl !== undefined && object.tokenUrl !== null) {
            message.tokenUrl = object.tokenUrl;
        }
        else {
            message.tokenUrl = "";
        }
        if (object.scopes !== undefined && object.scopes !== null) {
            message.scopes = exports.Scopes.fromPartial(object.scopes);
        }
        else {
            message.scopes = undefined;
        }
        if (object.extensions !== undefined && object.extensions !== null) {
            Object.entries(object.extensions).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.extensions[key] = struct_1.Value.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseSecurityScheme_ExtensionsEntry = { key: "" };
exports.SecurityScheme_ExtensionsEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            struct_1.Value.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityScheme_ExtensionsEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = struct_1.Value.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSecurityScheme_ExtensionsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value ? struct_1.Value.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSecurityScheme_ExtensionsEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = struct_1.Value.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseSecurityRequirement = {};
exports.SecurityRequirement = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.securityRequirement).forEach(([key, value]) => {
            exports.SecurityRequirement_SecurityRequirementEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSecurityRequirement };
        message.securityRequirement = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.SecurityRequirement_SecurityRequirementEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.securityRequirement[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSecurityRequirement };
        message.securityRequirement = {};
        if (object.securityRequirement !== undefined &&
            object.securityRequirement !== null) {
            Object.entries(object.securityRequirement).forEach(([key, value]) => {
                message.securityRequirement[key] =
                    exports.SecurityRequirement_SecurityRequirementValue.fromJSON(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.securityRequirement = {};
        if (message.securityRequirement) {
            Object.entries(message.securityRequirement).forEach(([k, v]) => {
                obj.securityRequirement[k] =
                    exports.SecurityRequirement_SecurityRequirementValue.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSecurityRequirement };
        message.securityRequirement = {};
        if (object.securityRequirement !== undefined &&
            object.securityRequirement !== null) {
            Object.entries(object.securityRequirement).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.securityRequirement[key] =
                        exports.SecurityRequirement_SecurityRequirementValue.fromPartial(value);
                }
            });
        }
        return message;
    },
};
const baseSecurityRequirement_SecurityRequirementValue = { scope: "" };
exports.SecurityRequirement_SecurityRequirementValue = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.scope) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityRequirement_SecurityRequirementValue,
        };
        message.scope = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSecurityRequirement_SecurityRequirementValue,
        };
        message.scope = [];
        if (object.scope !== undefined && object.scope !== null) {
            for (const e of object.scope) {
                message.scope.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.scope) {
            obj.scope = message.scope.map((e) => e);
        }
        else {
            obj.scope = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSecurityRequirement_SecurityRequirementValue,
        };
        message.scope = [];
        if (object.scope !== undefined && object.scope !== null) {
            for (const e of object.scope) {
                message.scope.push(e);
            }
        }
        return message;
    },
};
const baseSecurityRequirement_SecurityRequirementEntry = { key: "" };
exports.SecurityRequirement_SecurityRequirementEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.SecurityRequirement_SecurityRequirementValue.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseSecurityRequirement_SecurityRequirementEntry,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.SecurityRequirement_SecurityRequirementValue.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseSecurityRequirement_SecurityRequirementEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.SecurityRequirement_SecurityRequirementValue.fromJSON(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.SecurityRequirement_SecurityRequirementValue.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseSecurityRequirement_SecurityRequirementEntry,
        };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = exports.SecurityRequirement_SecurityRequirementValue.fromPartial(object.value);
        }
        else {
            message.value = undefined;
        }
        return message;
    },
};
const baseScopes = {};
exports.Scopes = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        Object.entries(message.scope).forEach(([key, value]) => {
            exports.Scopes_ScopeEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScopes };
        message.scope = {};
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.Scopes_ScopeEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.scope[entry1.key] = entry1.value;
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScopes };
        message.scope = {};
        if (object.scope !== undefined && object.scope !== null) {
            Object.entries(object.scope).forEach(([key, value]) => {
                message.scope[key] = String(value);
            });
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        obj.scope = {};
        if (message.scope) {
            Object.entries(message.scope).forEach(([k, v]) => {
                obj.scope[k] = v;
            });
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScopes };
        message.scope = {};
        if (object.scope !== undefined && object.scope !== null) {
            Object.entries(object.scope).forEach(([key, value]) => {
                if (value !== undefined) {
                    message.scope[key] = String(value);
                }
            });
        }
        return message;
    },
};
const baseScopes_ScopeEntry = { key: "", value: "" };
exports.Scopes_ScopeEntry = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseScopes_ScopeEntry };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseScopes_ScopeEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseScopes_ScopeEntry };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=openapiv2.js.map