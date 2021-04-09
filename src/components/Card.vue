<template>
    <div class="container">
        <div>
            <b-card                 
                :title="person.name"
                :sub-title="person.homeworld"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆  En esta url esta el nombre de su planeta de origen y no se, como mostrarlo.
                </b-card-text>
            
                <b-button :href="`/about/${person.name}`" variant="primary">Ver mas</b-button>
            </b-card>
        </div>
    </div>
</template>

<script>

export default {
    props: ['person']
    }
</script>