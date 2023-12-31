<template>
  <button
    type="button"
    class="u-button"
    :disabled="disabled"
    :class="{
      'u-button--primary': type === 'primary',
      'u-button--secondary': type === 'secondary',
      'u-button--outline': type === 'outline',
      'u-button--fancy': type === 'fancy',
      'u-button--small': size === 'small',
      'u-button--medium': size === 'medium',
      'u-button--large': size === 'large'
    }"
  >
    <div class="u-button-slot-container">
      <span class="u-icon-slot" v-if="$slots.icon">
        <slot name="icon"> </slot>
      </span>
      <span class="u-label-text" v-if="label" style="margin: 0 auto">
        <slot>
          {{ label }}
        </slot>
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'outline' | 'fancy'
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    label?: string
  }>(),
  {
    type: 'primary',
    size: 'medium',
    disabled: false,
    label: ''
  }
)
</script>

<style scoped>
.u-button {
  background-color: var(--text);
  color: var(--primary);
  font-weight: 500;
  border: 1px solid var(--primary);
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
}

.u-button:hover {
  background-color: var(--secondary);
  color: var(--background);
  border: 1px solid var(--secondary);
}

.u-button:disabled {
  background-color: var(--accent);
  color: var(--background);
  border: 1px solid var(--accent);
}

.u-button:disabled:hover {
  background-color: var(--accent);
  color: var(--background);
  border: 1px solid var(--accent);
}

.u-button:active {
  background-color: var(--secondary);
  color: var(--background);
  transform: scale(0.95);
}

.u-button--outline {
  background-color: var(--background);
  color: var(--text);
  border: 1px solid var(--primary);
}

.u-button--outline:hover {
  background-color: var(--primary);
  color: var(--text);
  border: 1px solid var(--primary);
}

.u-button--outline:disabled {
  background-color: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.u-button--outline:disabled:hover {
  background-color: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
}

.u-button--fancy {
  border-radius: 40px;
  background-color: transparent;
  position: relative;
  border: none;
  z-index: 2;
}

.u-button--fancy:hover {
  border: none;
}
.u-button--fancy::before {
  content: '';
  position: absolute;
  inset: -0.2rem;
  z-index: -1;
  background: conic-gradient(
    from var(--gradient-angle),
    var(--clr-3),
    var(--clr-4),
    var(--clr-5),
    var(--clr-4),
    var(--clr-3)
  );
  padding: 1.5px;
  border-radius: inherit;
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.u-button--fancy:hover {
  background-color: transparent;
}
.u-button--fancy .u-label-text {
  background: linear-gradient(to right, var(--accent-2), var(--accent-3));
  background-clip: text;
  color: transparent;
}

.u-button--small {
  padding: 0.5rem 1rem;
}

.u-button--medium {
  padding: 0.8rem 1.5rem;
}

.u-button--large {
  padding: 1rem 2rem;
}

.u-icon-slot {
  display: flex;
  align-items: center;
  margin-inline-end: 0.5rem;
}

.u-icon-slot > * {
  width: 1em;
  height: 1em;
  color: black;
}

.u-button-slot-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
