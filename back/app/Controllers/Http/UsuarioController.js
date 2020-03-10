'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const UsuarioModel = use('App/Models/User');

/**
 * Resourceful controller for interacting with usuarios
 */
class UsuarioController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const usuarios = await UsuarioModel.all();
    response.send(usuarios);
    
  }

  /**
   * Render a form to be used for creating a new usuario.
   * GET usuarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data =  request.all()
    const user = await UsuarioModel.create(data)
    response.send(user)

  
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const user = await UsuarioModel.find(params.id);
    response.send(user);
  
  }

  async postsUsuarios ({ params, request, response, view }) {
    const userPosts = await UsuarioModel.find(params.id);
    userPosts.posts = await userPosts.posts().fetch();
    return userPosts;
  }

  /**
   * Render a form to update an existing usuario.
   * GET usuarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {


  }

  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const data = request.all();
    const user = await UsuarioModel.find(params.id);
    
    user.merge(data);
    user.save();
    response.send(user);
  
  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  
    const user = await UsuarioModel.find(params.id);
    user.delete();
    response.send({mensagem: 'Deletado com sucesso'});


  }

  async getToken({request, response, auth}) {
      
      const {email, password} =request.all();
      const autentication = await auth.attempt(email, password);
      //const token = await auth.generate(autentication)
      console.log(autentication);
      response.send(autentication);


  }
}

module.exports = UsuarioController
