/***************************************************************************************************************************************************
 * Objetivo: Responsavel pela manipulação de dados dos Tipos de Usuario no Banco de Dados
 * Data: 19/05/2023
 * Autor: Mateus Alves
 * Versão: 1.0
 ***************************************************************************************************************************************************/

//Import da biblioteca do prisma client
var {PrismaClient} = require('@prisma/client')

var prisma = new PrismaClient()

const insertTipoUsuario = async function(dadosTipoUsuario){
    let sql = `insert into tbl_tipo_usuario (
            tipo
    ) values (
            '${dadosTipoUsuario.tipo}'
    )`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus)
        return true
    else
        return false
}

const selectAllTipos = async function() {
    let sql = 'select * from tbl_tipo_usuario'
    
    let rsTipo = await prisma.$queryRawUnsafe(sql)

    if(rsTipo.length > 0)
        return rsTipo
    else
        return false
    
}

const selectLastId = async function() {
    let sql = `select * from tbl_tipo_usuario order by id desc limit 1;`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if(rsAluno.length > 0)
        return rsAluno
    else
        return false
}

const selectTipoUsuarioByID = async function (id) {
    let sql = `select * from tbl_tipo_usuario where id = ${id}`;

    let rsTipoUsuarioId = await prisma.$queryRawUnsafe(sql);

    if (rsTipoUsuarioId.length > 0) {
        return rsTipoUsuarioId;
    }
    else {
        return false;
    }
}

module.exports = {
    insertTipoUsuario,
    selectLastId,
    selectAllTipos,
    selectTipoUsuarioByID
}