<template>
    <button
        class="hx-button"
        :class="[`hx-button--${type}`, {
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
        }]"
        @click="handelClick"
    >
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#${icon}`"></use>
        </svg>
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: 'HxButton',
    props: {
        type: {
            default: '',
            type: String,
        },
        plain: {
            default: false,
            type: Boolean,
        },
        round: {
            defualt: false,
            type: Boolean,
        },
        circle: {
            defualt: false,
            type: Boolean,
        },
        icon: {
            default: '',
            type: String,
        },
    },
    methods: {
        handelClick (e) {
            this.$emit('click', e)
        },
    },
    created () {
        console.log(this.type)
        console.log(this.$slots)
    },

}
</script>

<style lang='scss' scoped>
.hx-button {
    .icon {
        &+span {
            padding-left: 5px;
        }
    }
}
.hx-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
}
.hx-button--primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
    }
  }
  .hx-button--success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
    }
  }
   .hx-button--info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
    }
  }
  .hx-button--warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
    }
  }
  .hx-button--danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
    }
  }
  // 朴素按钮样式
.hx-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.hx-button--primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.hx-button--success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.hx-button--info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.hx-button--warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.hx-button--danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.hx-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.hx-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.hx-button [class*=hx-icon-]+span{
  margin-left: 5px;
}
// disabled属性
.hx-button.is-disabled{
   cursor: no-drop;
}
</style>
