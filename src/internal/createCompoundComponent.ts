function createCompoundComponent<TComponent extends object, TParts extends object>(
  component: TComponent,
  parts: TParts
): TComponent & TParts {
  return Object.assign(component, parts);
}

export default createCompoundComponent;
