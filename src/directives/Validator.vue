<script lang="ts">
interface numberRule {
  rule: number;
  msg: string;
}
interface stringRule {
  rule: string;
  msg: string;
}
interface Binding {
  arg: string;
  dir: object;
  instance: object;
  modifiers: object;
  oldValue: any;
  value: {
    min?: numberRule;
    max?: numberRule;
    regex?: stringRule;
    confirmed?: stringRule;
  };
}
type validateOptions = {
  [key: string]: boolean;
};

export const validates: validateOptions = {};
export const vValidator = {
  mounted: (el: HTMLInputElement, binding: Binding) => {
    const { value, arg } = binding;
    el.addEventListener("blur", validate);
    el.addEventListener("change", validate);

    function validate() {
      if (arg === "required" && !el.value) {
        handleError(false, "Must be required");
        return;
      }
      Object.entries(value).every((entry) => {
        const [key, val] = entry;
        const res = ruleFunctions[key](el, val.rule);
        handleError(res, val.msg);
        return res;
      });
    }

    function handleError(result: boolean, message: string) {
      // console.log(result);
      if (!result && el.nextElementSibling) {
        el.nextElementSibling.textContent = message;
        el.nextElementSibling.classList.remove("hidden");
      } else {
        el.nextElementSibling?.classList.add("hidden");
      }

      // Object.defineProperty(errors, el.name, {value: result});
      validates[el.name] = result;
    }

    type ruleOptions = {
      [key: string]: any;
    };
    const ruleFunctions: ruleOptions = {
      min: (el: HTMLInputElement, rule: number) => {
        return el.value.length >= rule;
      },
      max: (el: HTMLInputElement, rule: number) => {
        return el.value.length <= rule;
      },
      regex: (el: HTMLInputElement, rule: string) => {
        let re = new RegExp(rule);
        return re.test(el.value);
      },
      confirmed: (el: HTMLInputElement, rule: string) => {
        // con pas true false
        const compareElement = document.getElementsByName(
          rule
        )[0] as HTMLInputElement;
        if (!compareElement.value) {
          return true;
        }
        const event = new Event("blur");
        if (rule.endsWith("_confirmation")) {
          compareElement.dispatchEvent(event);
          return true;
        }
        return el.value === compareElement.value;
      },
    };
  },
};
</script>
