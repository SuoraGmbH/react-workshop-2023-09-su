export const gssp = function (response: any) {
  if (response.success) {
    return {
      success: true,
      statusCode: 200,
      data: response.data,
    } as const;
  }

  if (response.statusCode === 300) {
    return {
      type: "redirect",
    } as const;
  }

  if (response.statusCode >= 400) {
    return new Error();
  }
};

function handleSuccess(
  successPageData: Extract<ReturnType<typeof gssp>, { success: true }>
) {
  return successPageData.statusCode;
}
