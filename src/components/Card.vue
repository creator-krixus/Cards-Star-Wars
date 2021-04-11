<template>
    <div class="container">
        <div>
            <b-card                
                :title="person.name"
                sub-title="Planeta de origen:"
                img-src="https://i.servimg.com/u/f38/12/68/38/30/logo_r10.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <slot></slot>

                <b-card-text>
                    👆👆👆👆👆👆👆
                </b-card-text>

                <b-button :href="`/about/${person.name}`" variant="primary">Ver mas</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>

export default {
    props: ['person'],
    }
</script>