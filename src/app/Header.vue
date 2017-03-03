<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse mb-4">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#"><slot name="logo"></slot></a>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <slot name="navigator" class="navbar-nav mr-auto"></slot>
      </div>
    </nav>
  </div>
</template>
