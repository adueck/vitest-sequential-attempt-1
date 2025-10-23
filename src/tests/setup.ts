export async function setup() {
  console.log("setting up");
  return async () => {
    console.log("tearing down");
  };
}
