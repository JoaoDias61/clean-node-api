import { MissingParamError } from "../erros/missing-param-error"
import { badRequest } from "../halpers/http-helper"
import { Controller } from "./protocols/controller"
import { HttpRequest, HttpResponse } from "./protocols/http"

export class SignUpController implements Controller {
    handle(httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body.name) {
            return badRequest(new MissingParamError('name'))
        }
        if (!httpRequest.body.email) {
            return badRequest(new MissingParamError('email'))
        }
        const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
        for (const field of requiredFields) {
            if(!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field))
            }
        }
    }
}