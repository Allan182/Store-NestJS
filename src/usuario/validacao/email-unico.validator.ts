import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from "../usuario.repository";
import { Injectable } from "@nestjs/common";

@Injectable() // Transformando a classe em um provider 
@ValidatorConstraint({ async: true }) // Dizendo para o class-validator trabalhar com funções Async
export class EmailUnicoValidator implements ValidatorConstraintInterface {

    constructor(private usuarioRepository: UsuarioRepository) { }

    async validate(value: any): Promise<boolean> {
        const usuarioComEmailExiste = await this.usuarioRepository.emailExiste(value);
        return !usuarioComEmailExiste;
    }
}

export const EmailUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator
        });
    }
}