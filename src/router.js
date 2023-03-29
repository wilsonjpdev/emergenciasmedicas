import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/components/IndexComponent.vue'
import ListaItens from '@/components/ListaItens.vue'

const routes = [
    {
        path: '/',
        component: Index,
        children: [
            {
                path: 'profissionais/:tipo',
                name: 'profissionais',
                props: true,
                components: {
                    profissionais: ListaItens
                }
            },
            {
                path: 'equipamentos/:tipo',
                name: 'equipamentos',
                props: true,
                components: {
                    equipamentosComponent: ListaItens
                }
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router