export const unauthorizedError = (res, message) => res.status(401).json({
  status: 'error',
  error_code: 401,
  message,
});

export const createdOkResponse = (res, data, message) => res.status(201).json({
  status: 201,
  data,
  message,
});

export const successResponse = (res, data, message) => res.status(200).json({
  status: 200,
  data,
  message,
});

export const badrequestError = (res, message) => res.status(400).json({
  status: 'error',
  error_code: 400,
  message,
});

export const notFoundError = (res, message) => res.status(404).json({
  status: 'error',
  error_code: 404,
  message,
});

export const conflictError = (res, message) => res.status(409).json({
  status: 'error',
  error_code: 409,
  message,
});

export const noContent = (res, message) => res.status(204).json({
  status: 204,
  message,
});

export const serverError = (res, message) => res.status(500).json({
  status: 'error',
  error_code: 500,
  message,
});

export const pageNotFoundError = (res, message) => res.status(404).json({ status: 'error', error_code: 404, message });

export const fieldNotFoundError = (res, message) => res.status(422).json({ status: 'error', error_code: 422, message });
