<template>
  <div>
    <SimpleTable @register="registerTable">
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:delete-outlined',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </SimpleTable>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { SimpleTable, useTable, TableAction } from "/@/components/Table";
import { getMockListByPage } from "/@/api/demo/system";
import { columns, searchFormSchema } from "./role.data";

export default defineComponent({
  name: "RoleManagement",
  components: { SimpleTable, TableAction },
  setup() {
    const [registerTable] = useTable({
      title: "角色列表",
      api: getMockListByPage,
      columns,
      formConfig: {
        labelWidth: 120,
        schemas: searchFormSchema,
      },
      useSearchForm: true,
      showTableSetting: true,
      bordered: true,
      showIndexColumn: false,
      actionColumn: {
        width: 80,
        title: "操作",
        dataIndex: "action",
        slots: { customRender: "action" },
        fixed: undefined,
      },
    });

    function handleDelete(record: Recordable) {
      console.log(record);
    }

    return {
      registerTable,
      handleDelete,
    };
  },
});
</script>
