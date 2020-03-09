'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'TesteController.index')

Route.resource('/usuarios', 'UsuarioController')


Route.group(() => {


    Route.get('/posts/:id', ({params}) => {
        return {mensagem: 'hello posts '+params.id}
    })

    Route.post('/posts', () => {
        return {mensagem: 'hello posts'}
    })

    Route.put('/posts', () => {
        return {mensagem: 'hello posts'}
    })

    Route.delete('/posts', () => {
        return {mensagem: 'hello posts'}
    })


})
