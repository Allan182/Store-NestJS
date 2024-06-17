import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioRepository {

    private usuarios: UsuarioEntity[] = [];

    async salvar(usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    async emailExiste(email: string) {
        const possivelUsuario = this.usuarios.find(
            usuario => usuario.email === email
        );
        return possivelUsuario !== undefined;
    }


    private buscaPorId(id: string) {
        const possivelUsuario = this.usuarios.find(
            userSave => userSave.id === id
        );

        if (!possivelUsuario) {
            throw new Error('Usuário não encontrado!');
        };

        return possivelUsuario;
    }

    async atualiza(id: string, dadosDeAtt: Partial<UsuarioEntity>) {

        const user = this.buscaPorId(id);
        Object.entries(dadosDeAtt).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            user[chave] = valor;
        });
        return user;
    }

    async remove(id: string) {
        const user = this.buscaPorId(id);
        
        this.usuarios = this.usuarios.filter(
            userSave => userSave.id !== id
        );

        return user;
    }
}