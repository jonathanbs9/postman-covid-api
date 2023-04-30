// Test1.js

// Este test verifica que la respuesta tenga el status 200
pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

// Este test verifica que la respuesta tenga un body no vacío
pm.test("Response body is not empty", function () {
  pm.response.to.not.be.empty;
});

// Este test verifica que la respuesta tenga un header específico
pm.test("Response header contains Content-Type", function () {
  pm.response.to.have.header("Content-Type");
});
