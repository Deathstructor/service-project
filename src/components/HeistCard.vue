<template>
    <div>
        <h2>{{ GetName() }}</h2>
        <h4>difficulty</h4>
        <h4>tactic</h4>
    </div>
</template>

<script setup>
async function GetName() {
    return (await HeistModel
        .find({})
        .exec())
        .map(e => {
            return {
                name: e.name,
                warehouseId: e.warehouseId,
                job: e.job,
                schedule: e.schedule,
                assignedOrder: e.assignedOrder
            }
        })
}

</script>