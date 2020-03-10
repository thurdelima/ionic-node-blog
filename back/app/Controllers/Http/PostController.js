'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const PostModel = use('App/Models/Post');


/**
 * Resourceful controller for interacting with posts
 */
class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const posts = await PostModel.all();
    response.send(posts);
  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new post.
   * POST posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data =  request.all()
    const post = await PostModel.create(data)
    response.send(post)
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const data = request.all();
    const post = await PostModel.find(params.id);
    
    post.merge(data);
    post.save();
    response.send(post);
  }

  
  async usuariosPosts ({ params, request, response, view }) {
    const postsUser = await PostModel.find(params.id);
    postsUser.user = await postsUser.user().fetch();
    return postsUser;
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx 
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {

    const post = await PostModel.find(params.id);
    post.delete();
    response.send({mensagem: 'Deletado com sucesso'});
  }
}

module.exports = PostController
