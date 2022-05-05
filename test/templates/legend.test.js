import legend from "../../src/templates/legend.js"

describe("legend", () => {
  test("is a function", () => {
    expect(typeof legend).toBe("function")
  })

  test("renders with no argument", () => {
    expect(legend()).toBe(undefined)
  })

  test("renders with arguments", () => {
    expect(legend([{ key: 1 }, { key: 2 }])).toEqual(
      expect.stringContaining(`<ul class="legend"><li>`)
    )

    expect(
      legend([{ color: ["red"], shape: "circle", key: 1 }, { key: 2 }])
    ).toEqual(expect.stringContaining(`<ul class="legend"><li>`))
  })
})
