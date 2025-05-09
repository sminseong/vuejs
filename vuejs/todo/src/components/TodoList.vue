<script>

</script>

<template>
    <div class="todo__list">
        <!-- 할일 목록이 있을 경우 -->
        <div class="todo__item">
            <input type="checkbox" id="chk">
            <label for="chk" class="todo_checkbox-label"></label>
            <span class="todo__item-text">아침먹기</span>
            <span class="material-symbols-outlined todo__delete-icon">delete</span>
        </div>
        
        <!-- 할일 목록이 없을 경우 -->
        <div class="todo__item-no" style="display: none;">
            <p>할 일이 없습니다.</p>
        </div>
    </div>
</template>